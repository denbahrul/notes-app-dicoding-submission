import React from "react";
import useInput from "../hooks/useInput";
import { register } from "../utils/network-data";
import { useNavigate } from "react-router-dom";

function RegisterInput() {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const navigate = useNavigate();

  async function onSubmitHandler(event) {
    event.preventDefault();

    const { error } = await register({
      name: name,
      email: email,
      password: password,
    });
    if (!error) {
      navigate("/");
    }
  }

  return (
    <div className="input-register">
      <label htmlFor="name">Name</label>
      <input type="text" id="name" value={name} onChange={onNameChange} />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" value={email} onChange={onEmailChange} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" value={password} onChange={onPasswordChange}></input>
      <button type="button" onClick={onSubmitHandler}>
        Daftar
      </button>
    </div>
  );
}

export default RegisterInput;
