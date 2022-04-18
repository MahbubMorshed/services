import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./register.css";
import auth from "../../../firebase.init";
import SocialLogin from "../socialLogin/SocialLogin";
import Loading from "../../shared/loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (user) {
    // navigate("/home");
  }
  if (loading || updating) {
    <Loading />;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    alert("Updated profile");
    navigate("/home");
  };

  return (
    <div className="register-form">
      <h2 className="text-center tex-dark">Please register</h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="your name" />
        <input type="email" name="email" id="" placeholder="Your email" />
        <input type="password" name="password" id="" placeholder="password" />
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <label
          className={agree ? "ps-2 text-dark" : "ps-2 text-primary"}
          htmlFor="terms"
        >
          Accept DigitalArt terms and condition
        </label>
        <input
          disabled={!agree}
          className="btn btn-dark w-50 mx-auto mt-2"
          type="submit"
          value="Register"
        />
      </form>
      <p>
        Already have an account ?{" "}
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please login
        </Link>
      </p>
      <SocialLogin />
    </div>
  );
};

export default Register;
