import { mount } from '@vue/test-utils'
import Rate from '../../../components/atoms/Rate.vue'

describe('Rate', () => {
  it('renders a props ', () => {
    const wrapper = mount(Rate, {
      propsData: {
        level: 3,
      }
    })
    expect(wrapper.props().level).toBe(3)
  })

  it("renders a computed rateObject", () => {
    const localThis = { level: 3 }

    expect(Rate.computed.rateObject.call(localThis)).toBe("rate3")
  })
})