<template>
  <input
    type="text"
    :placeholder="placeholder"
    :class="type"
  >
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    placeholder: String,
    type: String
  }
}
</script>

<style scoped>
.inquiry {
  display: block;
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  width: 50%;
  padding: 0.3em;
  letter-spacing: 1px;
  margin: auto;
  margin-top: 2%;
}
</style>
