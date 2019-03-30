<template>
  <div class="agent">
    <!-- 右边侧正文顶部卡片 -->
    <top-card></top-card>
    <!-- 搜做/选择类型展示/切换展示样式操作条 -->
    <search-bar></search-bar>
    <!-- 条目列表 -->
    <div class="lists">
      <list-item
        v-for="(item, key) in agents_list"
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
      listDataType: '',
    }
  },
  components: {
    TopCard,
    SearchBar,
    ListItem
  },
  computed: {
    ...mapGetters(['agents_list'])
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
