<template>
    <div class="bg-gray">
        <div id="profile" class="profile">
            <h2 class="profile">PROFILE</h2>
            <Introduction />
        </div>
    </div>
</template>

<script>
import Introduction from '../organisms/Introduction'
export default {
  name: 'profile',
  components: {
    Introduction
  }
}
</script>

<style>
.profile {
    width: 70%;
    margin: auto;
    margin-top: 5%;
    padding-top: 3%;
    font-weight: normal;
}

.bg-gray {
    background-color: #FAFAFA;
}
</style>

