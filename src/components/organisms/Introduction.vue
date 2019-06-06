<template>
  <div class="introduction">
      <AppPicture
        :src="src"
        alt="avatar"
        type="avatar"
      />
      <div class="right_content">
        <AppText :text="text" />
        <LinkList :links="links" />   
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
      text: 'introdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
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
  }
}
</script>

<style scoped>
.introduction {
  padding: 5% 2% 20% 15%;
  display: flex;
}

.right_content {
  margin-left: 10%;
}
</style>

