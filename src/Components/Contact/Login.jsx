import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const auth = getAuth();

  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState("");
  let [passError, setPassError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("This field is error");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("invalid email address");
    }

    if (!password) {
      setPassError("This field is error");
    }

    if (
      email &&
      password &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (!userCredential.user.emailVerified) {
            setEmailError(
              "Email is not verified, please check your email or further instruction"
            );
          } else {
            setEmailError("");
            setTimeout(() => {
              localStorage.setItem(
                "token",
                JSON.stringify(userCredential.user.accessToken)
              );
              alert("Login success");
              navigate("/");
            }, 2000);
          }
          console.log("Ok");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-4xl font-josefin text-gray-800 mb-6 text-center">
          Login
        </h1>
        <p className="text-sm text-gray-600 font-lato mb-6 text-center">
          Please login using account details below.
        </p>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-lato text-sm mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={handleEmail}
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-lato"
              placeholder="Enter your email"
            />
            {emailError && <p className="text-red-500">{emailError}</p>}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-lato text-sm mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={handlePassword}
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 font-lato"
              placeholder="Enter your password"
            />
            {passError && <p className="text-red-500">{passError}</p>}
          </div>
          <div className="text-right mb-4">
            <a
              href="#"
              className="text-pink-500 text-sm font-lato hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-md text-lg hover:bg-pink-600 font-lato"
          >
            LogIn
          </button>
        </form>
        <div className="text-center mt-6">
          <p className="text-gray-700 text-sm font-lato">
            Don't have an Account?{" "}
            <a href="#" className="text-pink-500 hover:underline">
              <Link to="/SignUp"> Create account</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
