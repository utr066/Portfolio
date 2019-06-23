<template>
    <h1 class="title" :class="type">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
    type: String 
  }
}
</script>

<style scoped>
.title {
  font-family: 'Al Nile';
  font-weight: normal;
}
</style>
