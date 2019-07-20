<template>
  <header>
    <LinkList
      :links="links"
      :ul_style="ul_style"
      :li_style="li_style"
    />
  </header>
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
          url: '#profile',
          title: 'PROFILE'
        },
        {
          url: '#works',
          title: 'WORKS'
        },
        {
          url: '#skill',
          title: 'SKILL'
        },
        {
          url: '#contact',
          title: 'CONTACT'
        }
      ],
    }
  },
  components: {
    LinkList
  }    
}
</script>
