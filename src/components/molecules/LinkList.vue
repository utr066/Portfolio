<template>
  <div>
    <ul :class="{'horizon-wrapper': (list === 'horizon')}">
      <li v-for="link in links" :key="link.label" :class="list">
        <AppLink
          :label="link.label"
          :path="link.path"
          :decorate='decorate'
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
        links: Array,
        decorate: String,
        list: String
    }
}
</script>

<style scoped>
.horizon-wrapper {
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    margin: auto;
    margin-top: 2%;
}
.horizon {
  list-style: none;
  display: inline;
  border-bottom: 3px solid #C4FFE7;
}
</style>
