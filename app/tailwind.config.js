/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        container: {
            center: true,
            padding: "16px",
        },
        extend: {
            colors: {
                primary: "#3b82f6",
                secondary: "#6b7280",
                // dark: "#0f172a",
                dark: "#1f2937",
            },
            screens: {
                "2xl": "1320px",
            },
        },
    },
    plugins: [],
};
