import { mount } from '@vue/test-utils'
import AppText from '../../../components/atoms/AppText.vue'

describe('AppText', () => {
  test('renders a AppText ', () => {
    const wrapper = mount(AppText, {
      propsData: {
        text: 'creator',
        type: 'sub_title'
      }
    })
    expect(wrapper.props().text).toBe('creator')
    expect(wrapper.props().type).toBe('sub_title')
  })
})