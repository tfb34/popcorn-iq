import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
     const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const toggleForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = ()=>{
       const message = checkValidData(emailRef.current.value, passwordRef.current.value)
       setErrorMessage(message)
     
       //sign /sign up

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                 <img className="h-100" src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/US-en-20251020-TRIFECTA-perspective_8a45da41-350f-44b7-b1fa-716f96050491_small.jpg" alt="catalog" />
            </div>
            
            <form onSubmit={(e)=>{e.preventDefault()}} className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
               {
                !isSignInForm &&  <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
               }
                <input type="text" placeholder="Email Address" ref={emailRef} className="p-4 my-4 w-full bg-gray-700" />
                <input type="password" placeholder="Password" ref={passwordRef} className="p-4 my-4 w-full bg-gray-700" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick} >{isSignInForm? "Sign In": "Sign Up"}</button>
               <p className="text-red-500 font-bold text-sm py-2">{errorMessage}</p>
                <p className="py-4 text-sm cursor-pointer" onClick={toggleForm}>
                    {isSignInForm? "New to PopcornIQ? Sign Up": "Already a user? Sign in"}
                </p>
            </form>
        </div>
    )
}

export default Login;