<template>
  <div class="introduction grid">
      <AppPicture
        :src="src"
        alt="avatar"
        type="avatar"
      />
      <div class="right_content">
        <AppText :text="text" type="intro"/>
        <LinkList :links="links" ul_style="intro" li_style="vertical"/>   
      </div>
  </div>
</template>

<script>
import AppPicture from '../atoms/AppPicture'
import AppText from '../atoms/AppText'
import LinkList from '../molecules/LinkList'
import axios from 'axios';

export default {
  name: 'Introduction',
  components: {
    AppPicture,
    AppText,
    LinkList
  },
  data() {
    return {
      text: "2015年12月~ プログラミング学習を始める。IT企業でインターンをし、RailsやJavascriptを学ぶ。\n\n2017年4月~ 大学卒業、Webエンジニアへ。ここではLaravelとGoによる開発を行った。\n\n2018年4月~ フリーランス。直近はLaravelによる開発を行った。",
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
  mounted () {
    axios
      .get('http://localhost:9800/users/1/profile')
      .then(response => {
        this.text = response.data.profile.introduction
      })
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

