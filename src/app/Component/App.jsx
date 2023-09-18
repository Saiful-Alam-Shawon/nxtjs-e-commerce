'use client'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideLoading } from "../Redux/slices/cartSlice";
import { usePathname } from "next/navigation";
import Header from "./Header";
import CartSidebar from "./CartSidebar";

// import { useDispatch, useSelector } from 'react-redux'
// import CartSidebar from './CartSidebar'
// import { useEffect } from 'react'
// import { hideLoading } from '@/redux/slices/cartSlice'
// import { usePathname } from 'next/navigation'
// import Navbar from "./Navbar";

const App = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(hideLoading())
    }, [dispatch])
    const { cartItems, loading } = useSelector((state) => state.cart)
    const pathname = usePathname()

    return (
        <div className="w-4/5 mx-auto">
            <div>
                <div
                    className={`${loading
                        ? ''
                        : cartItems.length > 0 &&
                            (pathname === '/' || pathname.indexOf('/product/') >= 0)
                            ? ''
                            : ''
                        }`}
                >
                    <div >
                        <Header />
                        <main >{children}</main>
                        {/* <CartSidebar /> */}
                    </div>

                </div>
                <CartSidebar />
            </div>
        </div >
    );
};

export default App;