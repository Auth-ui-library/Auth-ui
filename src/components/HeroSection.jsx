import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <main className="relative z-20">
            
            <section
                className="h-max lg:w-[85vw] pt-0 mx-auto p-5 lg:p-0 grid gap-5 items-center relative top-3 lg:top-28 mb-12 lg:mb-52"
            >
                <div className="flex flex-col items-center mt-20">
                    <div>
                        <a
                            href=""
                            className="flex w-max items-center gap-2 mb-3 p-1 px-4 bg-blue-600/5 dark:hover:bg-blue-600/10 rounded-full border border-zinc-950/5 dark:border-white/5 hover:border-blue-600/40 group duration-300"
                        >
                            <div className="">🚀</div>
                            <span className="text-sm">Get started free</span>
                            <ion-icon
                                name="arrow-forward-outline"
                                className="group-hover:translate-x-0.5 duration-300"
                            ></ion-icon>
                        </a>
                    </div>
                    <h1
                        id="hero-title"
                        className="text-4xl lg:text-7xl text-center font-semibold bg-gradient-to-bl from-zinc-800 lg:leading-20 to-zinc-950 text-balance dark:from-blue-100 dark:to-blue-50 bg-clip-text text-transparent"
                    >
                        Bibliothèque de Composants <br/>
                        d&apos;Authentification React
                    </h1>
                    <p
                        className="mt-4 text-zinc-500 lg:w-[50vw] text-center mx-auto lg:text-balance"
                    >
                        Découvrez notre collection de composants prêts à l&apos;emploi pour intégrer facilement des flux d&apos;authentification sécurisés dans vos projets. Conçus pour les développeurs, par des développeurs.
                    </p>

                    <div
                        className="flex flex-col w-[80vw] lg:w-full lg:flex-row items-center gap-5 mt-10 justify-center"
                    >
                        <Link
                            to="/"
                            className="p-3 lg:p-2 text-semibold bg-blue-600 font-light hover:bg-blue-500 ring-1 ring-white/10 text-white rounded-lg hover:shadow-blue-600/70 w-full lg:w-max lg:px-10 border border-zinc-950/5 flex justify-center duration-500 active:scale-90 shadow-xl lg:shadow-2xl shadow-blue-600/10 lg:shadow-blue-600/30"
                        >
                            Get started free
                        </Link>

                        <Link
                            to="#"
                            className="p-3 lg:p-2 border border-zinc-950/5 flex items-center justify-center lg:px-10 hover:bg-zinc-950/5 rounded-lg active:scale-90 text-semibold duration-300 w-full lg:w-max font-light"
                        >
                            Documentation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HeroSection;