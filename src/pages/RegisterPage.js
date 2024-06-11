import React from "react";
import { Link } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";

function RegisterPage() {
  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun</h2>
      <RegisterInput />
      <p>
        'Sudah punya akun?'
        <Link to="/">Login di sini</Link>
      </p>
    </section>
  );
}

export default RegisterPage;
