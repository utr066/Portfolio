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
/* .avatar {
} */
</style>

