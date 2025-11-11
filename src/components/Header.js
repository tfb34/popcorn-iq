import { signOut } from "firebase/auth"
import logo from "../assets/popcorniq-logo.png"
import userIcon from "../assets/user.png"
import { auth } from "../utils/firebase"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Header = ()=>{
    const navigate = useNavigate();

    const user = useSelector(store => store.user)
    
    const handleSignOut = ()=>{
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
           navigate("/error")
        });
    }
    
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