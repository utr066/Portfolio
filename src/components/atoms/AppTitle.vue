<template>
    <div class="top">
        <h1 class="title">{{ title }}</h1>
        <p class="sub_title">{{ sub_title }}</p>
    </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    title: String,
    sub_title: String
  }
}
</script>

<style scoped>
.title {
    font-family: 'Al Nile';
    font-weight: normal;
    font-size: 30px;
}

.sub_title {
    font-size: 13px;
    color: #aaaaaa;
    margin-top: -1%;
    letter-spacing: 1px;
}

.top {
    padding: 15% 0;
}
</style>
