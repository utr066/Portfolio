<template>
	<div>
    <form @submit="formSubmit">
      <AppInput name="name" v-model="name" placeholder="お名前" type="inquiry"  />
      <AppInput name="mail_address" v-model="mail_address" placeholder="メールアドレス" type="inquiry" />
      <AppTextArea name="content" v-model="content" placeholder="お問い合わせ内容" type="inquiry" />
      <AppButton text="送信" type="submit" class="submit-btn" />
    </form>
    {{ name }}
	</div>
</template>

<script>
import AppInput from '../atoms/AppInput'
import AppTextArea from '../atoms/AppTextArea'
import AppButton from '../atoms/AppButton'

export default {
  name: 'ContactForm',
  data() {
    return {
      name: "",
      mail_address: "",
      content: ""
    }
  },
	components: {
		AppInput,
      AppTextArea,
      AppButton
  },
  methods: {
    formSubmit: function (e) {
      e.preventDefault();
      this.$store.dispatch('submitInquiry')
    }
  }
}
</script>

<style>
.submit-btn {
  font-size: 16px;
  padding: 2px 10px;
  margin-top: 20px;
  background-color: #ddd;
  color: #fff;
}
</style>

