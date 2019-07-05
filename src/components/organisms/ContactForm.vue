<template>
	<div>
    <form @submit.prevent="submitInquiry">
      <input name="name" v-model="name" placeholder="お名前" class="inquiry" required>
      <input type="email" name="mail_address" v-model="mail_address" placeholder="メールアドレス" class="inquiry" required>
      <textarea
          name="content"
          cols="30"
          rows="10"
          v-model="content"
          placeholder="お問い合わせ内容"
          class="inquiry inquiry-content"
          required
      ></textarea>
      <button type="submit" class="submit-btn">送信</button>
    </form>
	</div>
</template>

<script>
import api from '../../api'

export default {
  name: 'ContactForm',
  data() {
    return {
      name: "",
      mail_address: "",
      content: ""
    }
  },
  methods: {
    submitInquiry: function () {
      api.submitInquiry({
        name: this.name,
        mail_address: this.mail_address,
        content: this.content
      }).then(() => {
        this.$toasted.success('メール送信が成功したよ！').goAway(2000)
      })
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


.inquiry {
  display: block;
  font: 15px/24px sans-serif;
  box-sizing: border-box;
  width: 50%;
  padding: 0.3em;
  letter-spacing: 1px;
  margin: auto;
  margin-top: 2%;
}

.inquiry-content {
  border: 1px solid #ddd;
}
</style>

