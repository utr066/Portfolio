<template>
  <div class="card" :class="type">
    <CardContent
			:title="title"
			:sub_title="sub_title"
			:description="description"
    />
    <AppPicture :src="src" :type="type" />
    <AppLink v-if="type === 'work'" :type="type" :label="title" path="#" />
  </div>
</template>

<script>
import CardContent from '../molecules/CardContent'
import AppPicture from '../atoms/AppPicture'
import AppLink from '../atoms/AppLink'

export default {
	name: 'Card',
	components: {
    CardContent,
    AppPicture,
    AppLink
	},
	props: {
		title: String,
		sub_title: String,
		description: String,
		src: String,
		type: String
	}
}
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 5px;
}

.skill {
  /* height: 100px; */
}
</style>
