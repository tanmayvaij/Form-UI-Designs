import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar" className="flex justify-center">
            
            <ul className="fixed flex flex-wrap text-xs text-white p-2 rounded-xl">
                <span></span>
                <NavLink className="hover:text-pink-500 p-2" to="/">Login</NavLink>
                <NavLink className="hover:text-pink-500 p-2" to="/signup">Registration</NavLink>
                <NavLink className="hover:text-pink-500 p-2" to="/changepassword">Change Password</NavLink>
                <NavLink className="hover:text-pink-500 p-2" to="/forgotpassword">Forgot Password</NavLink>
                <NavLink className="hover:text-pink-500 p-2" to="/emailverification">Email Verification</NavLink>
            </ul>

        </div>
    )
}
