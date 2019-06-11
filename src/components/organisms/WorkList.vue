<template>
    <div class="grid">
        <div v-for="work in works" :key="work.title">
            <Card
                :title="work.title"
                :sub_title="work.sub_title"
                :description="work.description"
                type="work"
            />
        </div>
    </div>
</template>

<script>
import Card from '../organisms/Card'
import axios from 'axios';

export default {
    name: 'WorkList',
    components: {
        Card
    },
    data() {
        return {
            works: [
                {
                    id: 1,
                    user_id: 1,
                    title: 'hoge',
                    sub_title: 'hogeのサイト',
                    description: 'reactで作ったhogeのサイトです。Reduxは使用せず、Reactのみです。'
                },
                {
                    id: 1,
                    user_id: 1,
                    title: 'fuga',
                    sub_title: 'fugaのサイト',
                    description: 'hogehoge'
                },
                {
                    id: 1,
                    user_id: 1,
                    title: 'hogefuga',
                    sub_title: 'hogefugaのサイト',
                    description: 'hogehoge'
                },
                {
                    id: 1,
                    user_id: 1,
                    title: 'fugahoge',
                    sub_title: 'fugahogeのサイト',
                    description: 'hogehoge'
                },
                {
                    id: 1,
                    user_id: 1,
                    title: 'hogehogefuga',
                    sub_title: 'hogehogefugaのサイト',
                    description: 'hogehoge'
                },
            ]
        }
    },
    mounted () {
    axios
        .get('http://localhost:9800/users/1/works')
        .then(response => {
            this.works = response.data.works
        })
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
