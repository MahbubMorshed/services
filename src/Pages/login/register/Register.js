import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import "./register.css";
import auth from "../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    navigate("/home");
  }

  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center", color: "red" }}>Please register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="your name" />
        <input type="email" name="email" id="" placeholder="Your email" />
        <input type="password" name="password" id="" placeholder="password" />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account ?{" "}
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please login
        </Link>
      </p>
    </div>
  );
};

export default Register;
