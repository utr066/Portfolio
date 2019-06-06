<template>
    <div>
        <NavBar />
        <div class="profile">
            <h2 class="profile">PROFILE</h2>
            <Introduction />
        </div>
    </div>
</template>

<script>
import NavBar from '../organisms/NavBar'
import Introduction from '../organisms/Introduction'
export default {
  name: 'profile',
  components: {
    NavBar,
    Introduction
  }
}
</script>

<style>
.profile {
    background-color: #ddd;
    width: 70%;
    margin: auto;
    margin-top: 5%;
    padding-top: 3%;
}
</style>

