import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};
describe("render", () => {
  describe("word has not be guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("render input ", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("render submit btn ", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-button");
      expect(submitBtn.length).toBe(1);
    });
  });
  describe("word has been guessed", () => {
    test("renders without error", () => {});
    test("does not render input ", () => {});
    test("does not render submit btn ", () => {});
  });
});
describe("update state", () => {});
