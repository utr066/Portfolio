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
  /* border: 2px solid #1b0303; */
  /* box-sizing: border-box; */
  /* width: 100%; */
  /* height: 300px; */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
