import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

export const cartContext = createContext([]);
export const WishContext = createContext([]);



const Root = () => {
    const [cart, setCart]= useState([]);
    const [wish, setWish]= useState([]);
    const location = useLocation();
 const path= location.pathname;
 console.log('Root Path',path);
    return (
        <cartContext.Provider value={{ cart, setCart }}>
        <WishContext.Provider value={{ wish, setWish }}>
            <div className=''>
                <Navbar />
                <Outlet />
                {/* <Footer /> */}
                 {
                    (
                        (path==='/products') ||
                        (path==='/statistics') ||
                        (path==='/dashboard')
                        
                    ) && 
                    <> <Footer></Footer>
                    </>
                    
                } 


            </div>
        </WishContext.Provider>
    </cartContext.Provider>
    );
};

export default Root;