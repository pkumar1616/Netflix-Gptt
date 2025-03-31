import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setIsSignForm] = useState(true)
  const toggleSignInForm =()=>{
    setIsSignForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web_tall_panel/IN-en-20250324-TRIFECTA-perspective_69cb00d3-7b5e-45e8-b378-7757f9c8f60b_large.jpg"
          alt="logo"
        />
      </div>
      <form className=" p-12  bg-black opacity-75 absolute w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "SignUp"}</h1>
        {!isSignInForm &&(
        <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 b w-full bg-gray-700"
        />)}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
         <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 b w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
        {isSignInForm? "Sign In": "SignUp"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix?Sign Up Now": "Already Registered? Sign In Now"}
          
          </p>
      </form>
    </div>
  );
};

export default Login;
