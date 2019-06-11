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
import axios from 'axios'
import Rate from '../atoms/Rate'

export default {
    name: 'SkillList',
    components: {
        Card,
        Rate
    },
    data() {
        return {
            skills: [
                {
                    name: 'HTML',
                    level: 1
                },
                {
                    name: 'CSS',
                    level: 1
                },
                {
                    name: 'jQuery',
                    level: 1
                },
                {
                    name: 'Vue',
                    level: 1
                },
                {
                    name: 'React',
                    level: 1
                },
                {
                    name: 'Ruby',
                    level: 1
                },
                {
                    name: 'Rails',
                    level: 1
                },
                {
                    name: 'PHP',
                    level: 1
                },
                {
                    name: 'Laravel',
                    level: 1
                },
               {
                    name: 'Go',
                    level: 1
                },
               {
                    name: 'Docker',
                    level: 1
                },
                {
                    name: 'Mysql',
                    level: 1
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
