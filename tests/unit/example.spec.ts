import { shallowMount } from '@vue/test-utils'
import HomeView from '@/components/HomeView.vue'
import AuthorizationView from '@/components/AuthorizationView.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HomeView, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})

describe('Example', () => {
  it('renders props.msg when passed', () => {
    const msg = 'New Message';
    const wrapper = shallowMount(AuthorizationView, {
      props: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});