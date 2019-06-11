<template>
	<div>
			<AppInput placeholder="お名前" type="inquiry"/>
			<AppInput placeholder="メールアドレス" type="inquiry" />
			<AppTextArea placeholder="お問い合わせ内容" type="inquiry" />
	</div>
</template>

<script>
import AppInput from '../atoms/AppInput'
import AppTextArea from '../atoms/AppTextArea'

export default {
	name: 'ContactForm',
	components: {
		AppInput,
		AppTextArea
	}
}
</script>
