<template>
  <LinkList
    :links="links"
    :ul_style="ul_style"
    :li_style="li_style"
  />
</template>

<script>
import LinkList from '../molecules/LinkList'

export default {
  name: 'Header',
  data() {
    return {
      ul_style: 'nav',
      li_style: 'horizon',
      links: [
        {
          path: '#profile',
          label: 'PROFILE'
        },
        {
          path: '#works',
          label: 'WORKS'
        },
        {
          path: '#skill',
          label: 'SKILL'
        },
        {
          path: '#contact',
          label: 'CONTACT'
        }
      ],
    }
  },
  components: {
    LinkList
  }    
}
</script>
