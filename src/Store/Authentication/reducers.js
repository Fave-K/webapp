import * as actionTypes from "./actionTypes";
import * as processTypes from "../Shared/processTypes";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  _loginProcess: { status: processTypes.IDLE },
  auth: {
    isUserAuthenticated: false,
    token: undefined,
  },
  userDetails: undefined,
};

const authenticationPersistConfig = {
  key: "authentication",
  storage: storage,
  blacklist: ["_loginProcess"],
};

const authenticationReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    //#region LOG_IN
    case actionTypes.LOG_IN_REQUESTED:
      return {
        ...state,
        _loginProcess: { status: processTypes.PROCESSING },
      };
    case actionTypes.LOG_IN_SUCCEEDED:
      return {
        ...state,
        _loginProcess: { status: processTypes.SUCCESS },
        userDetails: action.payload.userDetails,
        auth: {
          isUserAuthenticated: true,
          token: action.payload.userDetails.token,
        },
        credentials: action.payload.credentials,
      };
    case actionTypes.LOG_IN_FAILED:
      return {
        ...state,
        _loginProcess: {
          status: processTypes.ERROR,
          error: action.payload.error,
        },
      };
    case actionTypes.LOG_IN_RESET: {
      return {
        ...state,
        _loginProcess: { status: processTypes.IDLE },
      };
    }
    //#endregion

    default:
      return state;
  }
};

export default persistReducer(
  authenticationPersistConfig,
  authenticationReducer
);
