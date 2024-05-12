import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import App from './App';
import User from './components/User/User';
import Admin from './components/Admin/Admin';
import HomPage from './components/Home/HomePage';
import ManageUser from './components/Admin/Content/ManageUser';
import DashBoard from './components/Admin/Content/DashBoard';
import Login from './components/Auth/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./components/Auth/SignUp";


const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomPage />} />
                    <Route path="users" element={<User />} />
                </Route>
                <Route path="admins" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
            </Routes>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    )
}

export default Layout;