<template>
    <div id="contact" class="contact">
        <h2 class="contact_title">Contact</h2>
        <ContactForm />
    </div>
</template>

<script>
import ContactForm from '../organisms/ContactForm'

export default {
  name: 'contact',
  components: {
    ContactForm
  }
}
</script>

<style>
.contact {
  text-align: center;
  /* background-color: #FAFAFA; */
}

.contact_title {
    font-weight: normal;
}
</style>

