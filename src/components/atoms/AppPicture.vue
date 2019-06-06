<template>
    <img :src="src" :alt="alt" :class="type">
</template>

<script>
export default {
  name: 'AppPicture',
  props: {
    src: String,
    alt: String,
    type: String
  }
}
</script>

<style scoped>
.avatar {
    width: 20%;
    height: 20%;
    border-radius: 50%;
}
</style>

