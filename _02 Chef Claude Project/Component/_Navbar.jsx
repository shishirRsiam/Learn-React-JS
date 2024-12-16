const Navbar = () => {
    const imgSrc = 'https://logowik.com/content/uploads/images/chef-restaurant5078.logowik.com.webp'
    return (
        <>
            <nav className="bg-gray-900 text-white shadow-xl shadow-yellow-100">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    <a href="/" className="flex mx-auto content-center text-center text-white text-5xl font-bold flex items-center space-x-4 transition duration-300 ease-in-out">
                        <img src={imgSrc} alt="Chef Claude Logo" className="w-12 h-12 rounded-xl" />
                        <span className="mb-2"> Chef Claude </span>
                    </a>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
