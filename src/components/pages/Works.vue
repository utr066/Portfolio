<template>
    <div id="works" class="works">
        <h2 class="works_title">WORKS</h2>
        <WorkList class="work-list"/>
    </div>
</template>

<script>
import WorkList from '../organisms/WorkList'

export default {
  name: 'profile',
  components: {
    WorkList
  }
}
</script>

<style scoped>
.works {
    text-align: center;
    margin: auto;
    background-color: #FAFAFA;
}

.work-list{
    width: 73%;
}

.works_title {
    font-weight: normal;
}
</style>

