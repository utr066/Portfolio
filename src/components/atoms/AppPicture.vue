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
  max-width: 257px;
  margin: auto;
}

/* .skill_image {
  width: 150px;
} */

.work_image {
  width: 100%;
  height: 200px;
}

</style>

