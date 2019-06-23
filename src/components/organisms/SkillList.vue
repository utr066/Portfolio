<template>
  <div class="grid">
    <div v-for="skill in skills" :key="skill.title">
      <SkillCard 
        :title="skill.name"
        :level="skill.level"
        :image_path="skill.image_path"
      />
    </div>
  </div>
</template>

<script>
import SkillCard from '../molecules/SkillCard'

export default {
  name: 'SkillList',
  components: {
    SkillCard
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
