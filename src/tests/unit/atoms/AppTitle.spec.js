import { mount } from '@vue/test-utils'
import AppTitle from '../../../components/atoms/AppTitle.vue'

describe('AppTitle', () => {
  test('renders a AppTitle ', () => {
    const wrapper = mount(AppTitle, {
      propsData: {
        title: 'Title',
        type: 'title'
      }
    })
    expect(wrapper.props().title).toBe('Title')
    expect(wrapper.props().type).toBe('title')
  })
})