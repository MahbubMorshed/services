import React from "react";
import google from "../../../images/googleLogo.png";
import fb from "../../../images/fb.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }
  if (user) {
    navigate("/home");
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="bg-dark w-25" style={{ height: "1px" }}></div>
        <p className="mt-2 px-2">or</p>
        <div className="bg-dark w-25" style={{ height: "1px" }}></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark text-light w-50 d-block mx-auto my-2"
        >
          <img src={google} alt="" />
          <span className="px-2 ">Google signin</span>
        </button>
        <button className="btn btn-dark text-light w-50 d-block mx-auto my-2">
          <img src={fb} alt="" />
          <span className="px-2 ">Facebook signin</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
