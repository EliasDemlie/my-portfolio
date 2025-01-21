export default function Footer() {
    

    return (
        <footer className="flex-shrink-0 py-4 px-4 shadow-xl bg-gray-800 border-t-2 border-gray-600">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
                {/* Social Links */}
                <div className="flex space-x-14">
                    <a
                        href="https://github.com/eliasdm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 border border-cyan-600 rounded-full hover:border-cyan-300 p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.18c-3.34.72-4.04-1.61-4.04-1.61-.54-1.39-1.32-1.76-1.32-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.24 1.83 1.24 1.06 1.82 2.79 1.3 3.47.99.11-.77.42-1.3.77-1.6-2.66-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.41 1.23-3.26-.12-.3-.53-1.51.12-3.14 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.63.24 2.84.12 3.14.76.85 1.23 1.94 1.23 3.26 0 4.63-2.82 5.66-5.5 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                    </a>
                    {/* linkedIn */}
                    <a
                        href="https://linkedin.com/in/eliasdemlie"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 border border-cyan-600 rounded-full hover:border-cyan-300 p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6 rounded-full"
                            viewBox="0 0 448 512"
                        >
                            <path d="M100.28 448H7.4V165.41h92.88zm-46.44-317a53.91 53.91 0 1 1 53.91-53.91 53.9 53.9 0 0 1-53.91 53.9zm384.32 317h-92.68V302.4c0-34.7-12.47-58.35-43.52-58.35-23.74 0-37.88 16-44.1 31.42-2.27 5.54-2.84 13.26-2.84 21v151.5h-92.68s1.25-246.06 0-271.59h92.68v38.47c12.33-19 34.4-46.07 83.58-46.07 61 0 106.72 39.76 106.72 125.17z" />
                        </svg>
                    </a>
                    {/* twitter */}
                    <a
                        href="https://twitter.com/elias_dm81"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 border border-cyan-600 rounded-full hover:border-cyan-300 p-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                        >
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.89-2.36 8.49 8.49 0 01-2.72 1.04 4.25 4.25 0 00-7.23 3.87A12.07 12.07 0 013 5.25a4.25 4.25 0 001.32 5.67 4.18 4.18 0 01-1.92-.53v.05a4.26 4.26 0 003.41 4.17 4.18 4.18 0 01-1.92.07 4.26 4.26 0 003.98 2.96 8.53 8.53 0 01-5.3 1.83c-.34 0-.67-.02-1-.06a12.06 12.06 0 006.52 1.91c7.84 0 12.13-6.5 12.13-12.14v-.55A8.69 8.69 0 0024 4.56a8.46 8.46 0 01-2.54.7z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright Notice */}
                <div className=" hidden sm:block text-center font-bold text-gray-100">
                    &copy; <span className="hover:text-teal-400 " >2025</span>  Elias D.
                </div>
            </div>
        </footer>
    );
}
