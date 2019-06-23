<template>
  <div class="work_card">
    <AppTitle :title="title" class="work_title"/>
    <AppText :text="sub_title" type="sub_title" />
    <AppText :text="description" type="description"/>
    <AppPicture :src="src" type="work_image" :alt="title" />
    <AppLink v-if="url" type="work_link" :label="title" :url="url" />  
  </div>
</template>

<script>
import AppTitle from '../atoms/AppTitle'
import AppText from '../atoms/AppText'
import AppPicture from '../atoms/AppPicture'
import AppLink from '../atoms/AppLink'

export default {
    name: 'WorkCard',
    components: {
      AppTitle,
      AppText,
      AppPicture,
      AppLink
    },
    props: {
      title: String,
      sub_title: String,
      description: String,
      src: String,
      url: String
    }
}
</script>

<style>
.work_card {
  background-color: #fff;
  min-height: 370px;
}

.work_title {
  font-size: 20px;
  padding-top: 20px;
}
</style>
