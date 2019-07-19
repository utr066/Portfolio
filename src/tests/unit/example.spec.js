import { mount } from '@vue/test-utils'
import AppButton from '../../components/atoms/AppButton.vue'

describe('AppButton', () => {
  test('renders a button', () => {
    const wrapper = mount(AppButton, {
      propsData: {
        text: 'ボタン'
      }
    })
    expect(wrapper.props().text).toBe('ボタン')
  })
})