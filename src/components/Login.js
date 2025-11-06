import { useState } from "react";
import Header from "./Header";
const Login = ()=>{

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                 <img className="h-100" src="https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/US-en-20251020-TRIFECTA-perspective_8a45da41-350f-44b7-b1fa-716f96050491_small.jpg" alt="catalog" />
            </div>
            
            <form className="p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In": "Sign Up"}</h1>
               {
                !isSignInForm &&  <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
               }
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" >{isSignInForm? "Sign In": "Sign Up"}</button>
                <p className="py-4 text-sm" onClick={toggleForm}>
                    {isSignInForm? "New to PopcornIQ? Sign Up": "Already a user? Sign in"}
                </p>
            </form>
        </div>
    )
}

export default Login;