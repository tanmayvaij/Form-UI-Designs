import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar" className="fixed text-white p-2">
            
            <ul className="flex flex-wrap text-xs">
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
