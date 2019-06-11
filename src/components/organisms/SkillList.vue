<template>
  <div class="grid">
    <div v-for="skill in skills" :key="skill.title">
      <Card
        :title="skill.name"
        :level="skill.level"
        type="skill"
      />
      <Rate :level="skill.level" />
    </div>
  </div>
</template>

<script>
import Card from '../organisms/Card'
import Rate from '../atoms/Rate'

export default {
  name: 'SkillList',
  components: {
    Card,
    Rate
  },
  computed: {
    skills() {
      return this.$store.state.skills
    }
  },
  mounted() {
    this.$store.dispatch('setSkills')
  }
}
</script>

<style scoped>
.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 10px;
  margin: auto;
}
</style>
