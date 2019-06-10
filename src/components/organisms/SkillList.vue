<template>
    <div class="grid">
        <div v-for="skill in skills" :key="skill.title">
            <SkillCard
                :title="skill.name"
                :level="skill.levels"
                class="skill"
            />
        </div>
    </div>
</template>

<script>
import SkillCard from '../molecules/SkillCard'
import axios from 'axios';

export default {
    name: 'SkillList',
    components: {
        SkillCard
    },
    data() {
        return {
            skills: [
                {
                    name: 'hoge',
                    levels: 1
                },
                {
                    name: 'fuga',
                    levels: 1
                },
                {
                    name: 'hogefuga',
                    levels: 1
                },
                {
                    name: 'fugahoge',
                    levels: 1
                },
                {
                    name: 'hogehogefuga',
                    levels: 1
                },
            ]
        }
    },
    mounted () {
    axios
        .get('http://localhost:9800/users/1/skills')
        .then(response => {
            this.skills = response.data.skills
        })
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
