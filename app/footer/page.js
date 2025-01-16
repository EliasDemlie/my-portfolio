export default function Footer() {
    

    return (
        <footer className="flex-shrink-0 py-4 px-4 shadow-xl bg-gray-800 border-t-2 border-gray-600">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
                {/* Social Links */}
                <div className="flex space-x-6">
                    <a href="https://x.com/elias_dm81" className="text-cyan-400">
                        Twitter
                    </a>
                    <a href="https://github.com/eliasdm" className="text-cyan-400">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/eliasdemlie" className="text-cyan-400 ">
                        LinkedIn
                    </a>
                </div>

                {/* Copyright Notice */}
                <div className=" hidden sm:block text-center text-gray-100">
                    &copy; 2025 Elias D.
                </div>
            </div>
        </footer>
    );
}
