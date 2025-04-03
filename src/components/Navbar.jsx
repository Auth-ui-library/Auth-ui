import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logoAIO.jpg"; // Assurez-vous que le chemin est correct

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white border-b border-zinc-950/5 fixed w-full z-10">
            <div className="inset-x-0 top-0 z-50 bg-yellow-500 px-4 py-1 text-center text-white">
                <p className="text-sm font-medium animate-pulse">
                    🚧 Site en cours de construction - Merci de revenir plus tard ! 🚧
                </p>
            </div>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className=" flex items-center space-x-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="group flex items-center space-x-3 transition-transform hover:scale-[1.02] active:scale-95"
                    >
                        <img
                            className="h-12 w-12 rounded-full border-1 border-blue-100/80 shadow-sm 
              group-hover:border-blue-200 group-hover:shadow-md 
              transition-all duration-300"
                            src={logo}
                            alt="AIO UI Logo"
                        />
                        <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-2xl font-bold tracking-tighter
                 group-hover:from-blue-700 group-hover:to-blue-900 transition-colors duration-300">
                            AIO UI
                        </span>
                    </Link>
                    {/* Badges */}
                    <div className="hidden md:flex items-center gap-4">
                        <span className="bg-zinc-950/5 hover:bg-blue-200 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-full cursor-pointer border border-zinc-950/10 flex items-center justify-center transition-all duration-300">
                            v0.0.0
                        </span>
                        <span className="bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded-full border border-blue-950/5 flex items-center justify-center transition-all duration-300">
                            Introducing slothscript - typescript for lazy people
                        </span>
                    </div>
                </div>
                {/* Menu Desktop */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-blue-800 font-medium hover:bg-blue-100 flex justify-center items-center py-2 px-4 rounded-full transition-all duration-300">
                        Docs
                    </Link>
                    <Link to="/Components" className="hover:text-blue-800 font-medium hover:bg-blue-100 flex justify-center items-center py-2 px-4 rounded-full transition-all duration-300">
                        Components
                    </Link>
                    <Link to="/Blog" className="hover:text-blue-800 font-medium hover:bg-blue-100 flex justify-center items-center py-2 px-4 rounded-full transition-all duration-300">
                        Blog
                    </Link>
                    <Link to="/Showcase" className="hover:text-blue-800 font-medium hover:bg-blue-100 flex justify-center items-center py-2 px-4 rounded-full transition-all duration-300">
                        Showcase
                    </Link>
                </div>

                {/* Bouton pour le menu mobile */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Menu Mobile */}
            {isOpen && (
                <div className="md:hidden font-medium px-4 py-2 rounded-b-lg bg-white shadow-md">
                    <Link to="/" className="block py-2 hover:text-blue-800 hover:bg-blue-100 rounded-lg p-3 transition-all duration-300">
                        Docs
                    </Link>
                    <Link to="/Components" className="block py-2 hover:text-blue-800 hover:bg-blue-100 rounded-lg p-3 transition-all duration-300">
                        Components
                    </Link>
                    <Link to="/Blog" className="block py-2 hover:text-blue-800 hover:bg-blue-100 rounded-lg p-3 transition-all duration-300">
                        Blog
                    </Link>
                    <Link to="/Showcase" className="block py-2 hover:text-blue-800 hover:bg-blue-100 rounded-lg p-3 transition-all duration-300">
                        Showcase
                    </Link>
                </div>
            )}
        </nav>
    );
}

export default Navbar;