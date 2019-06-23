<template>
  <div class="grid">
    <div v-for="work in works" :key="work.title">
      <WorkCard 
        :title="work.title"
        :sub_title="work.sub_title"
        :description="work.description"
        :src="work.image_path"
        :url="work.url"
      />
    </div>
  </div>
</template>

<script>
import WorkCard from '../molecules/WorkCard'

export default {
  name: 'WorkList',
  components: {
    WorkCard
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
