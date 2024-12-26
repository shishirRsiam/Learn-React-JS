import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProfileDropdown from './ProfileDropdown';
import NavigationLinks from './NavigationLinks';

const NavbarComponent = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [Authenticated, setAuthenticated] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to handle mobile menu toggle

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        console.log('authToken ->', token);
        if (token) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, []);

    

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <motion.nav
            className="bg-gradient-to-r from-purple-500 to-blue-400 shadow-md top-0 w-full z-10"
            initial={{ y: -100 }} // Start position when off-screen
            animate={{ y: isVisible ? 0 : -100 }} // Animate to the visible state
            transition={{ type: 'spring', stiffness: 100, damping: 25 }} // Animation settings
        >
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-white">HireHub</a>

                {/* Navigation Links */}
                <NavigationLinks />

                <div>
                    {Authenticated ? (
                        <ProfileDropdown />
                    ) : (
                        <div className="flex space-x-4">
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
                <button
                    className="md:hidden text-white"
                    onClick={toggleMobileMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <motion.div
                className="md:hidden bg-purple-500 text-white px-4 py-4"
                initial={{ opacity: 0 }} // Start with no opacity
                animate={{ opacity: isMobileMenuOpen ? 1 : 0 }} // Fade in when the menu is open
                transition={{ duration: 0.3 }} // Transition duration for the opacity change
            >
                <NavigationLinks />
                <div className="mt-4">
                    {Authenticated ? (
                        <ProfileDropdown />
                    ) : (
                        <div className="flex space-x-4">
                            <Link to='/login/' className="block py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Login
                            </Link>
                            <Link to='/register/' className="block py-2 px-4 rounded-md hover:bg-white hover:text-gray-500 transition">
                                Register
                            </Link>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default NavbarComponent;
