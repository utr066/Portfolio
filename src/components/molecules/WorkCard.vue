<template>
  <div>
    <AppCard
      :title="title"
      :sub_title="sub_title"  
    />
    <AppText :text="description"/>
  </div>
</template>

<script>
import AppCard from '../atoms/AppCard'
import AppText from '../atoms/AppText'

export default {
    name: 'WorkCard',
    components: {
      AppCard,
      AppText
    },
    props: {
      title: String,
      sub_title: String,
      description: String
    }
}
</script>
