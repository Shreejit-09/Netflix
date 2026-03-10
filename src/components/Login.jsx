import Header from "./Header";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { validateEmailSignIn, validateEmailSignUp } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { backgroundImage } from "../utils/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const full_name = useRef(null);
  const phone = useRef(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    console.log(full_name, phone);
    const message = isSignIn
      ? validateEmailSignIn(email.current.value, password.current.value)
      : validateEmailSignUp(
          email.current.value,
          password.current.value,
          full_name.current.value,
          phone.current.value,
        );
    setErrorMessage(message);
    if (message) return;
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("==>>" + user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode);
          console.log(errorCode, errorMessage);
        });
      console.log("Signing In");
    } else {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: full_name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName }),
              );
              // Profile updated!
              console.log("Profile Created");
              setIsSignIn(true);
              // ...
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
              // ...
            });
          console.log("==>>" + JSON.stringify(user));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });

      console.log("Signing Up");
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          src={backgroundImage}
          alt="background"
        />
      </div>
      <p className="absolute text-white text-4xl font-bold left-0 right-0 top-[16.67%] text-center">
        Unlimited movies, TV shows and more.
      </p>
      <p className="absolute text-white text-lg font-medium left-0 right-0 top-[25%] text-center">
        Watch anywhere. Cancel anytime.
      </p>
      <div className="w-1/3 absolute flex flex-col gap-1 p-10 bg-black/50 mx-auto right-0 left-0 top-[33.33%] rounded-lg cursor-pointer">
        <form className="flex flex-col">
          {!isSignIn ? (
            <>
              <input
                type="text"
                ref={full_name}
                placeholder="Full Name"
                className="p-2 m-2 border rounded-md bg-black/70 font-medium text-white"
              />
              <input
                type="number"
                ref={phone}
                placeholder="Phone Number"
                className="p-2 m-2 border rounded-md bg-black/70 font-medium text-white"
              />
            </>
          ) : null}
          <input
            type="text"
            ref={email}
            placeholder={isSignIn ? "Email or Phone Number" : "Email ID"}
            className="p-2 m-2 border rounded-md bg-black/70 font-medium text-white"
          />
          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="p-2 m-2 border rounded-md bg-black/70 font-medium text-white"
          />
          <p className="text-red-600 font-medium text-sm mx-2 py-2">
            {errorMessage}
          </p>
          <button
            className="p-4 m-4 bg-red-600 hover:bg-red-700  font-bold text-lg rounded-md text-white"
            onClick={handleClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          {/* <label className="flex items-center gap-2 text-white">New to Netflix? <a href="#" className="text-white hover:underline">Sign up now.</a></label> */}
        </form>
        <div className="relative w-full h-auto">
          {isSignIn ? (
            <label className="flex items-center text-white w-full">
              Not a User?
              <Link
                className=" text-white p-1 rounded font-semibold text-left items-center hover:underline"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                Sign Up
              </Link>
            </label>
          ) : (
            <label className="flex items-center text-white w-full">
              Already a User |
              <Link
                className=" text-white p-1 rounded font-semibold text-left items-center hover:underline"
                onClick={() => setIsSignIn(!isSignIn)}
              >
                Sign In
              </Link>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
