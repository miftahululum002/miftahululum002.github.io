'use client'
interface FooterProps {
    appname: string;
}

export default function Footer({ appname }: FooterProps) {
    return (
        <footer className="bg-dark text-gray-300 py-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-lg font-bold text-white">{appname}</h1>
                    </div>

                    <div className="flex space-x-6">
                        <a
                            href="#about"
                            className="hover:text-white transition duration-200"
                        >
                            About Us
                        </a>
                        <a
                            href="#services"
                            className="hover:text-white transition duration-200"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-white transition duration-200"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Sosial Media */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.351C0 23.408.592 24 1.325 24h11.495V14.708h-3.14v-3.62h3.14V8.287c0-3.112 1.896-4.806 4.664-4.806 1.324 0 2.464.099 2.795.144v3.24h-1.918c-1.505 0-1.796.715-1.796 1.764v2.314h3.588l-.467 3.62h-3.121V24h6.116C23.407 24 24 23.408 24 22.676V1.324C24 .592 23.408 0 22.675 0z" />
                            </svg>
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.918 4.918 0 00-8.379 4.482A13.957 13.957 0 011.671 3.149 4.917 4.917 0 003.195 9.723a4.902 4.902 0 01-2.229-.616v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.085 4.92 4.92 0 004.6 3.419A9.868 9.868 0 010 21.543a13.945 13.945 0 007.548 2.212c9.056 0 14.01-7.513 14.01-14.01 0-.213-.005-.426-.015-.637A10.012 10.012 0 0024 4.557z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-500">
                    &copy; {new Date().getFullYear()} {appname}. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
