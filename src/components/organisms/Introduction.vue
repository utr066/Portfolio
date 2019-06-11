<template>
  <div class="introduction grid">
      <AppPicture
        :src="src"
        alt="avatar"
        type="avatar"
      />
      <div class="right_content">
        <AppText :text="introduction" type="intro"/>
        <LinkList :links="links" ul_style="intro" li_style="vertical"/>   
      </div>
  </div>
</template>

<script>
import AppPicture from '../atoms/AppPicture'
import AppText from '../atoms/AppText'
import LinkList from '../molecules/LinkList'

export default {
  name: 'Introduction',
  components: {
    AppPicture,
    AppText,
    LinkList
  },
  data() {
    return {
      position: 'right',
      src: require('../../assets/images/cat.jpg'),
      links: [
        {
          path: '#',
          label: 'Qiita'
        },
        {
          path: '#',
          label: 'Blog'
        },
        {
          path: '#',
          label: 'Github'
        }
      ]
    }
  },
  computed: {
    introduction() {
      return this.$store.state.introduction
    }
  },
  mounted() {
      this.$store.dispatch('setIntroduction')
  }
}
</script>

<style scoped>
.introduction {
  padding: 5% 0;
  width: 60%;
  display: flex;
  margin: auto;
}

.right_content {
  margin-left: 10%;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 10px;
  margin: auto;
}
</style>

