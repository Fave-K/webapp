import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || null || compose;

import reducer from "./rootReducer";
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
export default store;
