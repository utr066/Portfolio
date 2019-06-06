<template>
  <div>
    <ul class="nav">
      <li v-for="link in links" :key="link.label" :class="list_style">
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
        list_style: String
    }
}
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: flex-end;
}

.horizon {
  list-style: none;
  display: inline;
  margin: 10px;
}
</style>
