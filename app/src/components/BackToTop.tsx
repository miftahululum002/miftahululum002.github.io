'use client'
import { useState, useEffect } from 'react'
export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    // Fungsi untuk menangani scroll
    const handleScroll = () => {
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
        setIsVisible(scrollTop > 300); // Tampilkan tombol jika scroll lebih dari 300px
    };

    // Fungsi untuk scroll ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // Animasi scroll
        });
    };

    // Tambahkan event listener saat komponen dimuat
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 w-10 h-10 bg-secondary text-white p-2 rounded-full shadow-lg hover:bg-secondary focus:outline-none hover:animate-pulse"
                >
                    ↑
                </button>
            )}
        </>
    );
}
