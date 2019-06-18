<template>
<button :class="type">{{ text }}</button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: String,
    type: String
  }
}
</script>

<style scoped>
.inquiry {
  font-size: 16px;
  padding: 2px 10px;
  margin-top: 20px;
  background-color: #ddd;
  color: #fff;
}
</style>
