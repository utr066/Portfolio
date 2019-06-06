<template>
    <div class="works">
        <NavBar />
        <WorkList />
    </div>
</template>

<script>
import NavBar from '../organisms/NavBar'
import WorkList from '../organisms/WorkList'

export default {
  name: 'profile',
  components: {
    NavBar,
    WorkList
  }
}
</script>

<style>
.works {
  text-align: center;
}
</style>

