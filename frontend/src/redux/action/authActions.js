import { AUTH_TYPE } from "../type";
import * as api from "../api";
import { toast } from "react-toastify";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(userData);
    console.log(data);

    dispatch({
      type: AUTH_TYPE.USER_SIGNUP,
      payload: data,
    });
    toast.success(data.msg);
    window.location.href = "/auth/user/login";
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userData);
    console.log(data);

    dispatch({
      type: AUTH_TYPE.USER_SIGNUP,
      payload: data,
    });

    toast.success(data.msg);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.data));
    window.location.href = "/";
  } catch (err) {
    console.log(err);
    if (err.response && err.response.data) {
      toast.error(err.response.data.msg);
    }
  }
};
