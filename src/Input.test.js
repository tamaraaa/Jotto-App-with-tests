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
    test("renders without error", () => {});
    test("render input ", () => {});
    test("render submit btn ", () => {});
  });
  describe("word has been guessed", () => {
    test("renders without error", () => {});
    test("does not render input ", () => {});
    test("does not render submit btn ", () => {});
  });
});
describe("update state", () => {});
