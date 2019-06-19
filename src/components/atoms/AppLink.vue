<template>
  <a
    :class="type"
    :href="path"
  >
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    label: String,
    path: String,
    type: String
  }
}
</script>

<style scoped>
.under {
  color: #d3d3d3;
  text-decoration: none;
  padding: 20px;
}

.under:hover {
  background-color: #C4FFE7;
  color: #fff;
}

.work {
  font-size: 14px;
  padding: 10px;
  display: block;
  background-color: #fff;
}
</style>

