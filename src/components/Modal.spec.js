
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Modal from "./Modal.vue"

describe("Modal component Unit Tests", () => {

  it("it renders the modal", () => {

    const wrapper = mount(Modal, {
      props: {
        title: "hola",
        showButton: true,
        titleColor: "blue",
      }
    });

    expect(wrapper).toBeTruthy();
  });

  it("it renders the modal with the button", () => {

    const wrapper = mount(Modal, {
      props: {
        title: "hola",
        showButton: true,
        titleColor: "blue",
      },
    });

    const button = wrapper.find('button')

    expect(button.exists()).toBeTruthy()
  });

  it("it renders the modal without the button", () => {

    const wrapper = mount(Modal, {
      props: {
        title: "hola",
        showButton: false,
        titleColor: "blue",
      },
    });

    const button = wrapper.find('button')

    expect(button.exists()).toBeFalsy()
  });

  it("it clicks on the button and emits an event", () => {
    //////// Arrange
    const wrapper = mount(Modal, {
      props: {
        title: "hola",
        showButton: true,
        titleColor: "blue",
      },
    });
    //////// Act
    const button = wrapper.find('button')
    button.trigger('click')

    /////// Assert

    expect(wrapper.emitted()).toHaveProperty('close')
  });

});
