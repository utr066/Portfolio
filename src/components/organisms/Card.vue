<template>
  <div class="card" :class="type">
    <img class="card-img" src="" alt="">
    <CardContent
        :title="title"
        :sub_title="sub_title"
        :description="description"
    />
  </div>
</template>

<script>
import CardContent from '../molecules/CardContent'

export default {
    name: 'Card',
    components: {
        CardContent
    },
    props: {
        title: String,
        sub_title: String,
        description: String,
        src: String,
        type: String
    }
}
</script>


<style scoped>
.card {
  background: #fff;
  border-radius: 5px;
}

.work {
  height: 300px;
}

.skill {
  height: 100px;
}
</style>
