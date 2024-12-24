'use client'
import { useState, useEffect } from 'react';
import { changeLanguage } from '../helpers/lang';

interface LanguageSwitcherProps {
    mobileMenuOpen: boolean;
}

export default function LanguageSwitcher({ mobileMenuOpen }: LanguageSwitcherProps) {
    const lang = localStorage.getItem('lang') || 'en';
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const toggleLanguage = () => {
        const newLanguage = selectedLanguage === 'id' ? 'en' : 'id';
        setSelectedLanguage(newLanguage);
        changeLanguage(newLanguage);
    };

    useEffect(() => {
        setSelectedLanguage(lang);
    }, [lang]);

    return (
        <div className={`flex items-center justify-center  ${mobileMenuOpen ? 'w-full bg-gray-700' : ''}`}>
            <div className={`mx-4 flex items-center rounded-full p-1 ${mobileMenuOpen ? 'w-28 justify-center' : 'bg-gray-700 w-30'}`}>
                <div
                    className="relative w-20 h-8 bg-gray-700 rounded-full flex items-center cursor-pointer border border-gray-500"
                    onClick={toggleLanguage}
                >
                    <div className="w-1/2 flex justify-center">
                        <div
                            className={`rounded-full w-8 h-6 ${selectedLanguage === 'en' ? 'bg-gray-700' : 'bg-gray-500'
                                }`}
                        >
                            <img
                                src="/flag/id.png"
                                alt="Indonesia"
                                className="flex w-4 h-4 rounded-full justify-center my-1 mx-auto"
                            />
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center">
                        <div
                            className={`rounded-full w-8 h-6 ${selectedLanguage === 'en' ? 'bg-gray-500' : 'bg-gray-700'
                                }`}
                        >
                            <img
                                src="/flag/gb.png"
                                alt="English"
                                className="flex w-4 h-4 rounded-full justify-center my-1 mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

