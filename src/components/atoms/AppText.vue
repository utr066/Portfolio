<template>
  <p :class="type">{{ text }}</p>
</template>

<script>
export default {
  name: 'AppText',
  props: {
    text: String,
    type: String
  }
}
</script>

<style scoped>
.sub_title {
  font-size: 13px;
  color: #aaaaaa;
  letter-spacing: 1px;
  text-align: center;
}

.description {
  font-size: 14px;
  color: #aaaaaa;
  letter-spacing: 1px;
}

.intro {
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: left;
  opacity: 0.7;
}

.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
</style>

