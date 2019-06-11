<template>
  <div>
    <ul :class="ul_style">
      <li v-for="link in links" :key="link.label" :class="li_style">
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
      ul_style: String,
      li_style: String
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

.vertical {
  text-align: left;
  margin-left: -20px;
}
</style>
