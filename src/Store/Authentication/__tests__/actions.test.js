/* global  it, describe, expect, beforeAll, jest */
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actionTypes from "../actionTypes";
import * as authActions from "../actions";
import * as processTypes from "store/Shared/services";
import { objectToCamelCase } from "src/lib/utils";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("User action creators", () => {
  beforeAll(() => {
    global.sessionStorage = jest.genMockFunction();
    global.sessionStorage.setItem = jest.genMockFunction();
    global.sessionStorage.getItem = jest.genMockFunction();
  });

  it("should create an action to log in user", () => {
    let sampleResponse = {
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImV2YW5zQHZvcmFuZS5jb20iLCJleHAiOjE1OTk3NDE1MjcsImVtYWlsIjoiZXZhbnNAdm9yYW5lLmNvbSJ9.13P6YKgsbb14s7oZrnBmfMaixl1CPDTdSJ6Fmt4VWkA",
      id: 2,
      accountant: null,
      dispatcher: null,
      last_login: "2020-09-09T17:28:20.808698Z",
      is_superuser: true,
      phone_number: null,
      email: "evans@vorane.com",
      first_name: null,
      last_name: null,
      user_uuid: "259e4c74-b650-47aa-8f7d-e2e6dd03abd8",
      is_active: true,
      is_staff: true,
      date_joined: "2020-09-09T17:28:16.223042Z",
      date_modified: "2020-09-09T17:28:16.227764Z",
      password_set: true,
      active: false,
      verified: false,
      groups: [],
      user_permissions: [],
    };

    let credentials = {
      email: "evans@vorane.com",
      password: "overmars24",
    };

    const expectedActions = [
      { type: actionTypes.LOG_IN_REQUESTED },
      {
        type: actionTypes.LOG_IN_SUCCEEDED,
        payload: {
          userDetails: objectToCamelCase(sampleResponse),
          credentials,
        },
      },
    ];

    const store = mockStore({
      _loginProcess: { status: processTypes.IDLE },
      auth: {
        isUserAuthenticated: false,
        token: undefined,
      },
      userDetails: undefined,
    });

    fetch.mockResponse(JSON.stringify(sampleResponse));
    return store.dispatch(authActions.login(credentials)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
