import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Texte de copyright */}
                <p className="text-sm">
                    © {new Date().getFullYear()} VotreEntreprise. Tous droits réservés.
                </p>

                {/* Liens */}
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <Link to="/about" className="hover:text-blue-500">
                        À propos
                    </Link>
                    <Link to="/contact" className="hover:text-blue-500">
                        Contact
                    </Link>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;