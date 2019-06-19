<template>
  <div class="grid">
    <div v-for="work in works" :key="work.title">
      <Card
        :title="work.title"
        :sub_title="work.sub_title"
        :description="work.description"
        :src="work.image_path"
        type="work"
      />
    </div>
  </div>
</template>

<script>
import Card from '../organisms/Card'

export default {
  name: 'WorkList',
  components: {
    Card
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  margin: auto;
}
</style>
