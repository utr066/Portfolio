<template>
  <div>
    <ul class="list-wrapper">
      <li v-for="link in links" :key="link.label" class="list">
         <AppLink
          :label="link.label"
          :path="link.path"
        />
      </li>
    </ul>
  </div>
</template>


<script>
import AppLink from '../atoms/AppLink'
export default {
    name: 'LinkList',
    components: {
        AppLink
    },
    props: {
        links: Array
    }
}
</script>

<style>
.list-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: auto;
    margin-top: 4%;
}
.list {
  list-style: none;
  display: inline;
  border-bottom: 3px solid #C4FFE7;
}
</style>
