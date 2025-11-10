import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import popcorniqBackground from "../assets/popcorniq-background-image.png"
import {createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";

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
     
        if(message) return;

        if(!isSignInForm){
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log("new user created")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +" - "+errorMessage)
            });
        }else{
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("returned user: "+ user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode +"- "+ errorMessage)
            });
        }

    }

    return (
        <div>
            <Header />
            <div className="absolute">
                 <img className="h-100" src={popcorniqBackground} alt="catalog" />
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