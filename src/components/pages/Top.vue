<template>
  <div class="wrapper">
    <Header />
    <AppTitle 
      title="YUTARO OHNO"
      sub_title="CREATOR"
    />
    <Profile />
    <Skill />
    <Works />
    <Contact />
  </div>
</template>

<script>
import Header from '../organisms/Header'
import AppTitle from '../atoms/AppTitle'
import Profile from './Profile'
import Works from './Works'
import Skill from './Skill'
import Contact from './Contact'

export default {
  name: 'top',
  components: {
    Header,
    AppTitle,
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

