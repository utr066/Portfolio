<template>
    <h1 class="title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
  }
}
</script>

<style>
.title {
    font-family: 'Andale Mono';
    font-size: 40px;
}
</style>
