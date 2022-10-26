import { mount, shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import App from './App.vue'

describe('Main Page', ()=>{

it('renders the page', ()=>{
    const wrapper = mount(App)
    expect(wrapper).toBeTruthy()
});

it('it opens the modal 1', ()=>{
    
    const wrapper = mount(App)

    wrapper.find('#btn-1').trigger('click')


    expect(wrapper.vm.showModal1).toBeTruthy()
});

it('it closes the modal 1', async ()=>{
    
    const wrapper = mount(App)

    await wrapper.find('#btn-1').trigger('click')
    await wrapper.findComponent('#modal-1').trigger('close')
// console.log(wrapper.find('#modal-1'))

    expect(wrapper.vm.showModal1).toBeFalsy()
});

});