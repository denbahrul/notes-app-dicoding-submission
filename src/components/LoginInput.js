import React from "react";
import useInput from "../hooks/useInput";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";

function LoginInput({ loginSuccess }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  async function onLogin(event) {
    event.preventDefault();

    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccess(data);
    }
  }

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange} />
      <button type="button" onClick={onLogin}>
        Masuk
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginInput;
