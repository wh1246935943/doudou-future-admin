<template>
  <div class="w-input">
    <input
      type="text"
      @input="onInput"
    >
  </div>
</template>
<script>
export default {
  name: 'WInput',
  data() {
    return {
      inputValue: Number | String,
    }
  },
  methods: {
    onInput(event) {
      this.$nextTick(() => {
        this.$emit('input', event.target.value);
        // this.inputValue = event.target.value;
      })
    }
  }
}
</script>
<style lang="scss">
.w-input{

}
</style>
