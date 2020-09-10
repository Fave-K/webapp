import * as actionTypes from "./actionTypes";
import * as sharedServices from "../Shared/services";
import { getAuth, getAuthToken } from "./selectors";
import {
  getSelectedProfile,
  getCredentials,
  getBackgroundLoginProcess,
} from "./selectors";
import { objectToCamelCase } from "src/lib/utils";

//#region  log in user

export const login = (credentials) => {
  return (dispatch, getState) => {
    //Signal the start of the process
    dispatch({
      type: actionTypes.LOG_IN_REQUESTED,
    });

    //function to fetch from the api

    let url = "";
    url = sharedServices.API_ENDPOINT.concat(`/authentication/login/`);

    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: credentials.username,
        password: credentials.password,
      }),
    };

    return fetch(url, request)
      .then((response) => {
        if (response.status === 200) {
          //update Todays list of orders

          response.json().then((userDetails) => {
            dispatch({
              type: actionTypes.LOG_IN_SUCCEEDED,
              payload: {
                userDetails: objectToCamelCase(userDetails),
                credentials,
              },
            });
          });
        }

        //If response is unauthorized, login and try again
        else if (response.status === 400) {
          response.json().then((data) => {
            if (data["non_field_errors"]) {
              dispatch({
                type: actionTypes.LOG_IN_FAILED,

                payload: { error: data["non_field_errors"][0] },
              });
            }
          });
        } else {
          dispatch({
            type: actionTypes.LOG_IN_FAILED,
            payload: {
              error: "An error occurred while logging in. Please retry",
            },
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.LOG_IN_FAILED,
          payload: {
            error: "An error occurred while logging in. Please retry",
          },
        });
      });
  };
};

export const resetLogin = () => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOG_IN_RESET,
    });
  };
};

//#endregion
