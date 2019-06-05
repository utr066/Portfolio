<template>
    <a
      class="link-text"
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
    path: String
  }
}
</script>

<style>
.link-text {
    color: #d3d3d3;
    text-decoration: none;
    padding: 20px;
}

.link-text:hover {
  background-color: #C4FFE7;
  color: #fff;
}
</style>

