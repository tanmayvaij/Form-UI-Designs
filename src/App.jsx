import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";

export default function App() {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={ <Login/> } />
                <Route path="/signup" element={ <Registration/> } />
                <Route path="/changepassword" element={ <ChangePassword/> } />
                <Route path="/forgotpassword" element={ <ForgotPassword/> } />
                <Route path="/emailverification" element={ <EmailVerification/> } />
            </Routes>
        </BrowserRouter>
    )
}
