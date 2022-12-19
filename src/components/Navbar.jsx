import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="navbar" className="flex flex-wrap items-center justify-between px-8 py-4 shadow">
            
            <h1 className="text-xl italic font-bold">Navigation</h1>

            <ul className="flex flex-wrap font-medium text-sm items-center space-x-10">
                <span></span>
                <NavLink className="hover:text-blue-800" to="/">Login</NavLink>
                <NavLink className="hover:text-blue-800" to="/registration">Registration</NavLink>
                <NavLink className="hover:text-blue-800" to="/changepassword">Change Password</NavLink>
                <NavLink className="hover:text-blue-800" to="/forgotpassword">Forgot Password</NavLink>
            </ul>

        </div>
    )
}
