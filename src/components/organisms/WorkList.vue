<template>
  <div class="grid">
    <div v-for="work in works" :key="work.title">
      <Card
        :title="work.title"
        :sub_title="work.sub_title"
        :description="work.description"

      />
    <AppPicture :src="work.image_path" type="work_image" />
    <AppLink v-if="url" :type="work_link" :label="work.title" :url="work.url" />
    </div>
  </div>
</template>

<script>
import Card from '../organisms/Card'
import AppPicture from '../atoms/AppPicture'
import AppLink from '../atoms/AppLink'

export default {
  name: 'WorkList',
  components: {
    Card,
    AppPicture,
    AppLink
  },
  computed: {
    works() {
      return this.$store.state.works
    }
  },
  mounted () {
    this.$store.dispatch('setWorks')
  }
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(267px, 1fr));
  grid-gap: 10px;
  margin: auto;
}
</style>
