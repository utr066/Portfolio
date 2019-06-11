<template>
  <div>
    <AppTitle :title="title" />
    <AppText
      :text="text"
      type="sub_title"
    />
  </div>
</template>

<script>
import AppTitle from '../atoms/AppTitle'
import AppText from '../atoms/AppText'

export default {
    name: 'Title',
    components: {
      AppTitle,
      AppText
    },
    props: {
      title: String,
      text: String,
    }
}
</script>
