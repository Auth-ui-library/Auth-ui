import { Link } from 'react-router-dom';
import logo from '../assets/img-1.PNG'; // Import de l'image locale

function Navbar() {
    return (
        <nav className="h-16 border border-zinc-950/5 backdrop-blur-md bg-white p-4 shadow-md fixed w-full z-10">
            <div className="flex items-center justify-between h-full">
                {/* Logo principal */}
                <Link
                    to="/"
                    className="flex items-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-full transition-all"
                    aria-label="Retour à l'accueil"
                >
                    <img
                        src={logo}
                        alt="Logo de l'entreprise"
                        className="h-10 w-10 shadow-md border border-zinc-950/5 rounded-full object-cover hover:scale-105 transition-transform duration-200"
                        width={40}
                        height={40}
                    />
                </Link>

                {/* Deuxième logo ou icône */}
                <Link
                    to="#" // Exemple de route vers une autre page
                    className="flex items-center cursor-pointer"
                    aria-label="À propos"
                >
                    <img
                        src="https://img.icons8.com/?size=100&id=fqiiHnc6DMUi&format=png&color=000000"
                        alt="Icône de navigation"
                        className="h-7 w-7"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;