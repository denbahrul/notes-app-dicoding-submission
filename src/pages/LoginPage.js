import React from "react";
import { Link } from "react-router-dom";
import LoginInput from "../components/LoginInput";
import PropTypes from "prop-types";

function LoginPage({ loginSuccess }) {
  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi</h2>
      <LoginInput loginSuccess={loginSuccess} />
      <p>
        'Belum punya akun?'
        <Link to="/register">Daftar di sini</Link>
      </p>
    </section>
  );
}

LoginInput.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
