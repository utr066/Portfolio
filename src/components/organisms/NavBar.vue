<template>
  <div class="nav-bar">
    <Title title="yutaro-ohno.me" />
    <LinkList
      :links="links"
      :decorate="decorate"
      :list="list"
    />
  </div>
</template>

<script>
import LinkList from '../molecules/LinkList'
import Title from '../atoms/AppTitle'
export default {
  name: 'NavBar',
  data () {
    return {
      links: [
        {
          path: '/profile',
          label: 'PROFILE'
        },
        {
          path: '/works',
          label: 'WORKS'
        },
        {
          path: '/skill',
          label: 'SKILL'
        },
        {
          path: '/contact',
          label: 'CONTACT'
        }
      ],
      list: 'horizon',
      decorate: 'under'
    }
  },
  components: {
    LinkList,
    Title
  }
}
</script>

<style scoped>
.nav-bar{
  text-align: center
}
</style>

