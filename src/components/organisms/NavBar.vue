<template>
  <div>
    <Title title="yutaro-ohno.me" />
    <LinkList
    :links="links"
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
      ]
    }
  },
  components: {
    LinkList,
    Title
  }
}
</script>
