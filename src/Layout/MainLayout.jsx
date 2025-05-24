import React from 'react';
import { Outlet } from 'react-router';
import Navber from '../Component/Navber';
import Footer from '../Component/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <div>
                <Outlet></Outlet>
            </div>
              <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;