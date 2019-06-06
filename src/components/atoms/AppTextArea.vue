<template>
    <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        :placeholder="placeholder"
        :class="type"
    >
    </textareaname="">    
</template>

<script>
export default {
    name: 'AppTextArea',
    props: {
        placeholder: String,
        type: String
    }
}
</script>

<style scoped>
.inquiry {
    display: block;
    font: 15px/24px sans-serif;
    box-sizing: border-box;
    width: 50%;
    padding: 0.3em;
    letter-spacing: 1px;
    margin: auto;
    margin-top: 2%;
    border: 1px solid #ddd;
}
</style>
