import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUpForm = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailError, setEmailError] = useState("");
  let [passError, setPassError] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPassError("");
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError("This field is error");
    }

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError("invalid email address");
    }

    if (!password) {
      setPassError("This field is error");
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setPassError(
        "The string must contain at least 1 lowercase alphabetical character"
      );
    } else if (!/(?=.*[!@#$%^&*])/.test(password)) {
      setPassError(
        "The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict"
      );
    } else if (!/(?=.{8,})/.test(password)) {
      setPassError("The string must be eight characters or longer");
    }

    if (
      password &&
      email &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            console.log("success email verification ");
            navigate("/Login");
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            setEmailError("Email is already in use");
          }
          console.log(errorCode);
        });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <input
        onChange={handleEmail}
        type="email"
        placeholder="Email Address"
        className="w-full border border-gray-300 p-2 rounded-md mb-4"
      />
      {emailError && <p className="text-red-500">{emailError}</p>}

      <input
        onChange={handlePassword}
        type="password"
        placeholder="Password"
        className="w-full border border-gray-300 p-2 rounded-md mb-4"
      />
      {passError && <p className="text-red-500">{passError}</p>}

      <button
        onClick={handleSubmit}
        className="w-full bg-[#FB2E86] text-white py-2 rounded-md hover:bg-blue-600 transition"
      >
        Register
      </button>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <a href="#" className="text-blue-500">
          <Link to="/Login">Log in</Link>
        </a>
      </p>
    </div>
  );
};

export default SignUpForm;
