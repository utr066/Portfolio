<template>
    <div id="profile" class="bg-gray">
        <h2 class="profile_title">PROFILE</h2>
        <Introduction />
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
#profile {
    padding-bottom: 30px;
    text-align: center;
    margin: auto;
}

.profile_title {
    font-weight: normal;
    padding-top: 2%;
}

.bg-gray {
    background-color: #FAFAFA;
}

</style>

