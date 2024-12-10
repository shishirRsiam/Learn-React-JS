const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-900 text-white shadow-xl shadow-yellow-100">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#" className="flex mx-auto content-center text-center text-white text-5xl font-bold flex items-center space-x-4 transition duration-300 ease-in-out">
            <img src="./src/assets/logo.png" alt="World Logo" className="w-12 h-12" />
            <span className="mb-2">My Travel Journal</span>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
