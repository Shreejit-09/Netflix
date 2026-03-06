import Header from "./Header";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  return (
    <div>
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75772f65-58b5-465f-b642-fa858b6168ca/web/IN-en-20260302-TRIFECTA-perspective_26418256-c5f3-4e9a-8160-a6b534228a2f_large.jpg"
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
                placeholder="Full Name"
                className="p-2 m-2 border rounded-md bg-black/70 font-medium"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="p-2 m-2 border rounded-md bg-black/70 font-medium"
              />
            </>
          ) : null}
          <input
            type="text"
            placeholder={isSignIn ? "Email or Phone Number" : "Email ID"}
            className="p-2 m-2 border rounded-md bg-black/70 font-medium"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 m-2 border rounded-md bg-black/70 font-medium"
          />
          <button className="p-4 m-4 bg-red-600 hover:bg-red-700  font-bold text-lg rounded-md text-white">
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
