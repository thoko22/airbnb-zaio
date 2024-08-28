import axios from "axios";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT
} from "../type/userTypes";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    });

    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const { data } = await axios.post(
      "http://localhost:5000/login",
      { email, password },
      config
    );
    localStorage.setItem("userInfo", JSON.stringify(data));

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => async(dispatch) => {
  localStorage.removeItem("userInfo"); // Remove user info from localStorage
  dispatch({ type: USER_LOGOUT });
};