<template>
  <div id="skill">
    <h2 class="skill_title">SKILL</h2>
    <SkillList class="skill-list"/>
  </div>
</template>

<script>
import SkillList from '../organisms/SkillList'

export default {
  name: 'skill',
  components: {
    SkillList
  }
}
</script>

<style scoped>
#skill {
  padding-bottom: 30px;
  text-align: center;
  margin: auto;
}

.skill-list{
  width: 60%;
}

.skill_title {
  font-weight: normal;
}
</style>

