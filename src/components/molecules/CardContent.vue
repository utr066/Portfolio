<template>
    <div>
        <AppTitle type="card" :title="title" />
        <AppText :text="sub_title" type="sub_title" />
        <AppText :text="description" type="description"/>
    </div>
</template>

<script>
import AppTitle from '../atoms/AppTitle'
import AppText from '../atoms/AppText'

export default {
    name: 'CardContent',
    components: {
        AppTitle,
        AppText
    },
    props: {
        title: String,
        sub_title: String,
        description: String,
    }
}
</script>

<style scoped>
</style>
