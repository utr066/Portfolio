<template>
  <div class="wrapper">
    <Header />
    <Cover />
    <Profile />
    <Skill />
    <Works />
    <Contact />
  </div>
</template>

<script>
import Cover from './Cover'
import Header from '../organisms/Header'
import Profile from './Profile'
import Works from './Works'
import Skill from './Skill'
import Contact from './Contact'

export default {
  name: 'top',
  components: {
    Header,
    Cover,
    Profile,
    Works,
    Skill,
    Contact
  }
}
</script>

<style>
.wrapper {
  text-align: center;
}

</style>

