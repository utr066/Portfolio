<template>
  <div class="introduction grid">
      <AppPicture
        :src="avatar"
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
    }
  },
  computed: {
    introduction() {
      return this.$store.state.profile.introduction
    },
    avatar() {
      return this.$store.state.profile.avatar
    },
    links() {
      return this.$store.state.profile.links
    },
  },
  mounted() {
    this.$store.dispatch('setProfile')
  }
}
</script>

<style scoped>
.introduction {
  padding: 5% 0;
  display: flex;
  margin: auto;
}

.right_content {
  padding: 0 13%;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(267px, 350px));
  justify-content: center;
}
</style>

