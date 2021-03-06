import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "../test/testUtils";
import Input from "./Input";
import { _Input } from './Input'

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
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("renders without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("does not render input ", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("does not render submit btn ", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-button");
      expect(submitBtn.length).toBe(0);
    });
  });
});
describe("redux props", () => {
  test('has success pice of state as prop',()=>{
    const success = true;
    const wrapper = setup({success});
    const successProp = wrapper.instance().props.success
    expect(successProp).toBe(success)
  });
  test('`guessWord` action creator is a function prop',()=>{
    const wrapper = setup();
    const guessWordProp = wrapper.instance().props.guessWord
    expect(guessWordProp).toBeInstanceOf(Function)
  })
  
});
describe('`guessWord` action calls',()=>{
  let guessWordMock;
  let wrapper;
  const guessedWord = 'train'
  beforeEach(()=>{
     guessWordMock = jest.fn();
     wrapper = shallow(< _Input guessWord={guessWordMock}/>);
     wrapper.setState({ currentGuess : guessedWord})
     const submitBtn = findByTestAttr(wrapper,'submit-button');
     submitBtn.simulate('click',{ preventDefault(){}});
  })
  test('`guessWord` action is called on submit',()=>{    
    const guessWordMockCalls = guessWordMock.mock.calls.length;
    expect(guessWordMockCalls).toBe(1)
  });
  test('calls `guessWord` with input value',()=>{
    const guessedWordArg = guessWordMock.mock.calls[0][0];
    expect(guessedWordArg).toBe(guessedWord)

  })
})
