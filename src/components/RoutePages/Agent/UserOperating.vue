<template>
  <div class="listitem-user-operating row">
    <div class="col-sm-10 col-xs-12">
      <div class="resources">
        <div class="add-resource">
          <test-dropdown
            :isInputPromp="isInputPromp"
            title="Separate muliple resource withcommas"
            placeholder="input value"
            buttonConfirmTxt="Add Resource"
            className="add-resource-prompt"
            :data="item.resources"
            @close="isInputPromp = false"
            @dorpdown-inputpromp="dorpdownInputConfirm"
          >
            <test-button
              primary
              square
              icon="icon-plus"
              @click="isInputPromp=true"
            ></test-button>
          </test-dropdown>
        </div>
        <div class="os-list">
          <test-button
            class="os-button"
            v-for="(item, index) in item.resources"
            :key="index"
            info
            iconAfter
            icon="icon-trash"
            @icon-click="buttonIconClick(index, item)"
          >{{item}}</test-button>
        </div>
      </div>
      
    </div>
    <div class="col-sm-2 col-xs-12 deny">
      <test-button v-if="item.status==='building'" primary icon="icon-deny" @click="deny">Deny</test-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isInputPromp: false,
      tipMsg: ''
    }
  },
  props: {
    item: Object
  },
  methods: {
    // resources字段中添加os
    dorpdownInputConfirm(value) {
      let deepCopyItem = JSON.parse(JSON.stringify(this.item));
      // 将字符串分割为数组并去重复
      let values = Array.from(new Set(value.split(',')));
      /**
       * 过滤用户输入内容并匹配当前列表中resources字段是否已包含构造的数据。
       * handleData   : 过滤后最终提交接口的resource集合
       * hasedData    ：已经存在的resource集合
       * upperCaseStr : 将用户输入的每一个条目首字母转大写后的字符串
       */
      let [handleData, hasedData, upperCaseStr] = [[], [], ''];
      values.forEach(e => {
        if (!e) return;
        upperCaseStr = e.replace(e[0],e[0].toUpperCase());
        if (deepCopyItem.resources.includes(upperCaseStr)) {
          hasedData.push(upperCaseStr);
          return
        }
        handleData.push(upperCaseStr);
      });
      
      deepCopyItem.resources.unshift(...handleData);
      this.updataAgent(deepCopyItem, hasedData, 1);
    },
    // 删除resources字段中选中的os
    buttonIconClick(index, item) {
      this.$alert.confirm({
        confirmText: `confirm delete ${item}?`,
        title: 'prompt',
        onConfirm: () => {
          let deepCopyItem = JSON.parse(JSON.stringify(this.item));
          this.$delete(deepCopyItem.resources, index);
          this.updataAgent(deepCopyItem, [], 0)
        }
      })
    },
    // deny agent
    deny() {
      this.$alert.confirm({
        confirmText: 'confirm deny?',
        title: 'prompt',
        onConfirm: () => {
          this.$store.commit('SET_AGENTS', {flag: 0, id: this.item.id});
          this.$toast.tip({message: 'deny success'})
        }
      })
    },

    /**
     * 更新agent.resources字段
     * @param { Array } newAgent    - resources数据组装后完整的agent对象
     *                                  调用设置接口传入的完整对象
     * @param { Array }  hasedData   - 已存的数据集合
     * @param { Number }  flag        - 0: 删除， 1：添加
     */
    updataAgent(newAgent, hasedData, flag) {
      let param = {
        id: newAgent.id,
        body: newAgent
      }
      console.log('resources入参:::', param);
      this.$Service.updataAgent(
        param,
        resp => {
          console.log('updataAgent callback:::', resp);
          if (resp.status !== 200) return;

          let message = flag? 'add success' : 'delete success';
          if (hasedData.length !== 0) message = `[${hasedData.join(',')}] already saved, others added`;

          this.isInputPromp = false;
          this.$toast.tip({message: message});
          // 更新vuex数据
          this.$store.commit('SET_AGENTS', {flag: 1, id: this.item.id, resource: newAgent.resources});
        }
      )
    }
  }
}
</script>
<style lang="scss">
.listitem-user-operating{
  .resources{
    display: flex;
    justify-content: flex-start;
    .add-resource{
      width: 27px;
    }
    .os-list{
      flex: 1;
      .os-button{
        font-size: 12px;
        padding: 3px 5px;;
        margin-right: 5px;
        color: #2c3e50;
        margin-top: 4px;
        cursor: default;
        .icon{
          cursor: pointer;
        }
      }
    }
  }
  .is-square{
    padding: 9px 7px;
    .icon-plus{
      position: absolute;
      top: 4px;
      right: 5px;
      font-size: 12px;
    }
  }
  .deny{
    text-align: right;
    .button{
      height: 30px;
      padding: 0 15px;
      font-size: 14px;
    }
  }
}
</style>
