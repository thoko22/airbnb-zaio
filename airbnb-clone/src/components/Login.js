import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../action/userActions";
import { openModal } from "../action/modalAction";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  
  useEffect(() => {
    if (userInfo) {
      dispatch(openModal("closed", ""));
    }
  }, [dispatch, userInfo]);
  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="login_form">
      <h2>Login or SignUp</h2>
      {error && <h2>{error}</h2>}
      {loading && <h2>Loading...</h2>}
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect with Facebook</button>
        <button className="google-login">Connect with Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="browser-default"
          placeholder="Email address"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="browser-default"
          placeholder="password"
        ></input>
        <button className="sign-up-button">login</button>
        <div className="divider"></div>
        <div>Dont have an account? Sign up</div>
      </form>
    </div>
  );
};

export default Login;
