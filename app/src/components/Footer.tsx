'use client'
interface FooterProps {
    appname: string;
}
import { translate } from '../helpers/lang';
import data from "../data/json/data.json";
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
                            {translate('about_me')}
                        </a>
                        <a
                            href="#educations"
                            className="hover:text-white transition duration-200"
                        >
                            {translate('education')}
                        </a>
                        <a
                            href="#contact"
                            className="hover:text-white transition duration-200"
                        >
                            {translate('contact_me')}
                        </a>
                    </div>

                    {/* Sosial Media */}
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a
                            href={data.contact.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href={data.contact.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>

                <div className="text-center mt-6 text-sm text-gray-500">
                    &copy; 2022 - {new Date().getFullYear()} {appname}. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};
