<template>
    <div class="cover">
        <Title 
        title="YUTARO OHNO"
        text="CREATOR"
        />
    </div>
</template>

<script>
import Title from '../molecules/Title'

export default {
    name: "Cover",
    components: {
        Title
    }
}
</script>

<style>
.cover {
  height: 90vh;;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
