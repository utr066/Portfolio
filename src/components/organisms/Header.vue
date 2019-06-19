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
          label: 'PROFILE'
        },
        {
          url: '#works',
          label: 'WORKS'
        },
        {
          url: '#skill',
          label: 'SKILL'
        },
        {
          url: '#contact',
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
