import React from "react";
import { Link } from "react-router-dom";

export default () => {
    return (
        <ul className="hidden md:flex space-x-2">
            <Link to="/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all">Home</Link>
            <Link to="/feed/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all">Job Feed</Link>
            <Link to="about" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all">About</Link>
        </ul>
    );
}