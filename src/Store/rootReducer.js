import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//import reducers from domains
import authenticationReducer from "./Authentication/reducers";

const persistConfig = {
  key: "root",
  blacklist: ["authentication"],
  storage: storage,
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    authentication: authenticationReducer,
  })
);

export default rootReducer;
