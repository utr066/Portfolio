<template>
    <div class="contact">
        <NavBar />
        <ContactForm />
    </div>
</template>

<script>
import NavBar from '../organisms/NavBar'
import ContactForm from '../organisms/ContactForm'

export default {
  name: 'contact',
  components: {
    NavBar,
    ContactForm
  }
}
</script>

<style>
.contact {
  text-align: center;
}
</style>

