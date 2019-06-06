<template>
    <LinkList
      :links="links"
      :list_style="list_style"
    />
</template>

<script>
import LinkList from '../molecules/LinkList'

export default {
    name: 'Header',
    data() {
        return {
            list_style: 'horizon',
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

<style>

</style>
