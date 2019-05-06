<template>
  <div class="history">
    <div class=title>History</div>
    <ul>
      <li
        style="list-style-type: disc"
        class="history-item"
        v-for="(item, index) in historyList"
        :key="index"
        :title="item.name"
      >
        <span class="li-disc"></span>
        {{item.name}}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['agents_list']),
    historyList() {
      return Object.values(this.agents_list).slice(0, 11)
    }
  }
}
</script>
<style lang="scss">
.history{
  position: absolute;
  bottom: 20px;
  overflow: hidden;
  height: 260px;
  width: 100%;
  .title{
    font-size: 24px;
    color: #ccc;
    padding-left: 15px;
  }
  .history-item{
    font-size: 12px;
    color: #999;
    cursor: pointer;
    margin-top: 15px;
    padding-left: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 80%;
    white-space: nowrap;
    .li-disc{
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #999;
      display: inline-block;
      margin-right: 20px;
    }
    &:hover{
      color: #00B4CF;
      .li-disc{
        background: #00B4CF;
      }
    }
  }
}
</style>
