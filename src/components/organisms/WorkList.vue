<template>
    <div class="grid">
        <div v-for="work in works" :key="work.title">
            <WorkCard
                :title="work.title"
                :sub_title="work.sub_title"
                :description="work.description"
                class="work"
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
    data() {
        return {
            works: [
                {
                    title: 'hoge',
                    sub_title: 'hogeのサイト',
                    description: 'hogehoge'
                },
                {
                    title: 'fuga',
                    sub_title: 'fugaのサイト',
                    description: 'hogehoge'
                },
                {
                    title: 'hogefuga',
                    sub_title: 'hogefugaのサイト',
                    description: 'hogehoge'
                },
                {
                    title: 'fugahoge',
                    sub_title: 'fugahogeのサイト',
                    description: 'hogehoge'
                },
                {
                    title: 'hogehogefuga',
                    sub_title: 'hogehogefugaのサイト',
                    description: 'hogehoge'
                },
            ]
        }
    }
}
</script>

<style>
.grid{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin: auto;
}
</style>
