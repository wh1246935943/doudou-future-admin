<template>
  <div class="listitem-user-operating row">
    <div class="col-sm-10 col-xs-12">
      <div class="resources">
        <div class="add-os">
          <test-button primary square icon="icon-plus" @click="addOs"></test-button>
        </div>
        <div class="os-list">
          <test-button
            class="os-button"
            v-for="(os, index) in item.resources"
            :key="index"
            info
            iconAfter
            icon="icon-trash"
            @icon-click="buttonIconClick(index)"
          >{{os}}</test-button>
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
  props: {
    item: Object
  },
  methods: {
    // resources字段中添加os
    addOs() {
      // ...
    },
    // 删除resources字段中选中的os
    buttonIconClick(index) {
      this.$alert.confirm({
        confirmText: 'confirm delete?',
        title: 'prompt',
        onConfirm: () => {
          this.$store.commit('SET_AGENTS', {flag: 1, id: this.item.id, index: index});
          this.$toast.tip({message: 'delete success'})
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
    }
  }
}
</script>
<style lang="scss">
.listitem-user-operating{
  .resources{
    display: flex;
    justify-content: flex-start;
    .add-os{
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
