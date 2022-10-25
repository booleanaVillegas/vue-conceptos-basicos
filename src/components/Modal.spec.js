
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Modal from "./Modal.vue"

describe("Modal component Unit Tests", () => {
  it("it renders the modal", () => {
    
console.log(Modal)

    const wrapper = mount(Modal, {
      props: {
        title: "hola",
        showButton: true,
        titleColor: "blue",
      },
    });

    expect(wrapper).toBeTruthy();
  });
});
