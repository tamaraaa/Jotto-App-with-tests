import rootReducer from "../src/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";

import { middlewares } from "../src/configureStore";

export const storeFactory = initalState => {
  const createSoreWithMiddlewares = applyMiddleware(...middlewares)(
    createStore
  );
  return createSoreWithMiddlewares(rootReducer, initalState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};
