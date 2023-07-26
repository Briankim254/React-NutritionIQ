import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo";
import jwtDecode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";

const SignupForm = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  console.log(user);
  return (
    <>
      <div className="h-screen flex items-center justify-center bg-gradient-to-br ">
        <div className="w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-lg shadow-md hover:shadow-2xl">
          <div className="flex justify-center mx-auto">
            <Logo />
          </div>

          <h1 className="mt-6  font-semibold text-center text-gray-700">
            Create your account
          </h1>

          <div className="flex items-center justify-center mt-6 mx-2">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const data = jwtDecode(credentialResponse.credential);
                setUser(data);
                setProfile(data.profileObj);
              }}
              onError={() => {
                console.log("sign up Failed");
              }}
            />
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-400">
            have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-800 hover:underline"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupForm;
