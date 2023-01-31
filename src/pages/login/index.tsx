import React, { useState } from "react";
import {
  setLocalStorage,
  removeLocalStorage,
} from "../../services/utils/Storage";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      {isLogin && <Navigate to={`/`} replace />}
      <p>username</p>
      <input />
      <br />

      <p>password</p>
      <input />
      <br />

      <button
        onClick={() => {
          setLocalStorage(`loginInfo`, {
            username: "test",
            password: "1234",
            firstName: "boss",
            lastName: "kung",
          });
          setIsLogin(true);
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          removeLocalStorage(`loginInfo`);
        }}
      >
        Sign-out
      </button>
    </div>
  );
};

export default Login;
