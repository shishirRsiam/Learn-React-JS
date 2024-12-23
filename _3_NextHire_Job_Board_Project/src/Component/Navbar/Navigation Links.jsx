export default () => {
    return (
        <ul className="hidden md:flex space-x-2">
            <li><a href="/" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all">Home</a></li>
            <li><a href="#features" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all">Features</a></li>
            <li><a href="#pricing" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all">Pricing</a></li>
            <li><a href="#about" className="text-white font-semibold px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-800 transition-all">About</a></li>
        </ul>
    );
}