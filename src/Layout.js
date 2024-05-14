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
import ListQuiz from "./components/User/ListQuiz";
import DetailQuiz from "./components/User/DetailQuiz";

const NotFound = () => {
    return (
        <div className="container mt-3 alert alert-danger">
            404.Not found data with your current URL
        </div>
    )
}

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route index element={<HomPage />} />
                    <Route path="users" element={<ListQuiz />} />
                </Route>
                <Route path="quiz/:id" element={<DetailQuiz />} />
                <Route path="admins" element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-users" element={<ManageUser />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="*" element={<NotFound />} />

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