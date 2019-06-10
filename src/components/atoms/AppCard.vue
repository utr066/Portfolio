<template>
  <div :class="type">
    <img class="card-img" src="" alt="">
    <div class="card-content">
        <h1 class="card-title">{{ title }}</h1>
        <p class="card-text">{{ sub_title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
      title: String,
      sub_title: String,
      type: String
  }
}
</script>

<style scoped>
.card {
  margin: 30px auto;
  /* width: 300px; */
  height: 300px;
  background: #fff;
  border-radius: 5px;
  /* box-shadow: 0 1px 2px #ccc; */
}

.work {
  margin: 30px auto;
  height: 300px;
  background: #fff;
  border-radius: 5px;
}

.skill {
  margin: 30px auto;
  background: #fff;
  border-radius: 5px;
}

.card:hover {
  /* box-shadow: 0 2px 8px #ccc; */
}

.card-img {
  border-radius: 5px 5px 0 0;
  max-width: 100%;
  height: auto;
}
.card-content {
  padding: 20px;
}
.card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
.card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
</style>

