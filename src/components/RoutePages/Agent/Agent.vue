<template>
  <div class="agent">
    <top-card></top-card>
    <search-bar></search-bar>
  </div>
</template>
<script>
import TopCard from './TopCard.vue';
import SearchBar from './SearchBar.vue'
export default {
  components: {
    TopCard,
    SearchBar
  },
  data() {
    return {
      // .
    }
  }
}
</script>
<style lang="scss">
.agent{
  // ...
}
</style>
