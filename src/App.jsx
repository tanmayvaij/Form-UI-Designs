import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login/> } />
                <Route path="/signup" element={ <Registration/> } />
                <Route path="/changepassword" element={ <ChangePassword/> } />
                <Route path="/forgotpassword" element={ <ForgotPassword/> } />
            </Routes>
        </BrowserRouter>
    )
}
