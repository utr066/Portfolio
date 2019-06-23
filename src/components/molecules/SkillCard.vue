<template>
  <div>
    <AppTitle :title="title" class="skill_title"/>
    <AppPicture 
      :src="image_path"
      :alt="title"
      class="skill_image"
    />
    <Rate :level="level" /> 
  </div>
</template>

<script>
import AppTitle from '../atoms/AppTitle'
import AppPicture from '../atoms/AppPicture.vue'
import Rate from '../atoms/Rate'

export default {
  name: 'SkillCard',
  components: {
    AppTitle,
    AppPicture,
    Rate,
  },
  props: {
    title: String,
    level: Number,
    image_path: String
  }
}
</script>


<style scoped>
.skill_title {
  font-family: 'Al Nile';
  font-weight: normal;
  font-size: 30px;
}
.skill_image {
  width: 150px;
}
</style>
