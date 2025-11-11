import { signOut, onAuthStateChanged } from "firebase/auth"
import logo from "../assets/popcorniq-logo.png"
import userIcon from "../assets/user.png"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import { addUser,removeUser } from '../utils/userSlice';

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const user = useSelector(store => store.user)
    
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
           navigate("/error")
        });
    }

    useEffect(()=>{
    
            const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid,email,displayName, photoURL} = user
                dispatch(addUser({
                    uid: uid,
                    email: email,
                    displayName:displayName,
                    photoURL: photoURL
                 }));

                 navigate("/browse")

            } else {
                dispatch(removeUser())
                navigate("/")
            }
            });

            //this will be called when component unmounts
            return ()=> unsubscribe();
    },[])

    
    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img src={logo}
                alt="logo" 
                className="w-44"/>
            {
                user && <div className="flex p-2">
                <img alt="userIcon" src={user.photoURL} className="w-12 h-12" />
                <button onClick={handleSignOut} className="font-bold text-white">(Sign out)</button>
            </div>
            }
            
        </div>
    )
}

export default Header;