function Footer() {
    return (
        <footer className="px-7 bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                {/* Texte de copyright */}
                <p className="text-sm">
                    © {new Date().getFullYear()} Design by 2MJ-DEV. Tous droits réservés.
                </p>

                {/* Liens */}
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="/about" className="hover:text-blue-500 transition-all duration-300">
                        About us
                    </a>
                    <a href="/contact" className="hover:text-blue-500 transition-all duration-300">
                        Contact
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-all duration-300"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;