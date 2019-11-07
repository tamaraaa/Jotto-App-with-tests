import rootReducer from "../src/reducers/rootReducer";
import { createStore } from "redux";

export const storeFactory = initalState => {
  return createStore(rootReducer, initalState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
