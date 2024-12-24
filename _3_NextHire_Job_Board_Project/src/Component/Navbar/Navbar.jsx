import React, { useState, useEffect } from 'react';
import isAuthenticated from '../Authentication/IsAuthenticated';
import ProfileDropdown from './ProfileDropdown';
import NavigationLinks from './Navigation Links';
import { Link } from "react-router-dom";


const NavbarComponent = () => {
    const [isVisible, setIsVisible] = useState(true); 
    const [lastScrollY, setLastScrollY] = useState(0);

    const [Authenticated, setAuthenticated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        console.log('authToken ->', token);
        if (token) {
            setAuthenticated(true);
        }
        else {
            setAuthenticated(false);
        }
    }, []);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
        const token = localStorage.getItem('access_token');
        console.log('token ->', token);
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return ( 
        <nav
            className={`bg-gradient-to-r from-purple-500 to-blue-400 shadow-md top-0 w-full z-10 transition-transform duration-300 ${
                isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-white">HireHub</a>

                <><NavigationLinks /></>

                <div>
                    {Authenticated ? ( <> 
                        <ProfileDropdown /> 
                    </>
                        ) : ( <div className="flex space-x-4">
                            <Link to='/login/' className="hidden md:inline-block bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Login
                            </Link>
                            <Link to='/register/' className="hidden md:inline-block bg-yellow-300 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Register
                            </Link>
                        </div>
                    )}
                </div>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default NavbarComponent;
