import { mount } from '@vue/test-utils'
import AppLink from '../../../components/atoms/AppLink.vue'

describe('AppLink', () => {
  test('renders a Link ', () => {
    const wrapper = mount(AppLink, {
      propsData: {
        label: 'ラベル',
        url: '#',
        type: 'under',

      }
    })
    expect(wrapper.props().label).toBe('ラベル')
    expect(wrapper.props().url).toBe('#')
    expect(wrapper.props().type).toBe('under')
  })
})