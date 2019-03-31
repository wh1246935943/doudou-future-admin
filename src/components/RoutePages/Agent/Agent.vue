<template>
  <div class="agent">
    <!-- 右边侧正文顶部卡片 -->
    <top-card></top-card>
    <!-- 搜做/选择类型展示/切换展示样式操作条 -->
    <search-bar
      @switch-agentType="switchAgentType"
    ></search-bar>
    <!-- 条目列表 -->
    <div class="lists">
      <list-item
        v-for="(item, key) in allAgents"
        :key="key"
        :item="item"
      ></list-item>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import TopCard from './TopCard.vue';
import SearchBar from './SearchBar.vue';
import ListItem from './ListItem.vue';
export default {
  data() {
    return {
      listDataType: 'all',
    }
  },
  components: {
    TopCard,
    SearchBar,
    ListItem
  },
  computed: {
    ...mapGetters(['agents_list']),
    allAgents() {
      if (this.listDataType === 'all') return this.agents_list;
      return Object.values(this.agents_list).filter(element => {
        return element.type === this.listDataType
      });
    }
  },
  methods: {
    switchAgentType(type) {
      this.listDataType = type;
    }
  }
}
</script>
<style lang="scss">
.agent{
  .lists{
    width: 100%;
    height: auto;
    padding: 0 5px;
  }
}
</style>
