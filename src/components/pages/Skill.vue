<template>
    <div id="skill" class="skill">
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

<style>
.skill {
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

