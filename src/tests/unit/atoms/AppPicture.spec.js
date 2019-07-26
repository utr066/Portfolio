import { mount } from '@vue/test-utils'
import AppPicture from '../../../components/atoms/AppPicture.vue'

describe('AppPicture', () => {
  test('renders a AppPicture ', () => {
    const wrapper = mount(AppPicture, {
      propsData: {
        src: '#',
        alt: 'sharp',
        type: 'avatar'
      }
    })
    expect(wrapper.props().src).toBe('#')
    expect(wrapper.props().alt).toBe('sharp')
    expect(wrapper.props().type).toBe('avatar')
  })
})