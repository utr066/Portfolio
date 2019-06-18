<template>
  <div class="wrapper">
    <Header />
    <Cover />
    <Profile />
    <Skill />
    <Works />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Cover from './Cover'
import Header from '../organisms/Header'
import Profile from './Profile'
import Works from './Works'
import Skill from './Skill'
import Contact from './Contact'
import Footer from '../organisms/Footer'

export default {
  name: 'top',
  components: {
    Header,
    Cover,
    Profile,
    Works,
    Skill,
    Contact,
    Footer
  }
}
</script>

<style scoped>
.wrapper {

}
</style>

