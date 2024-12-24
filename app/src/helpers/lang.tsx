import i18n from 'i18next';
/**
 * Fungsi untuk menerjemahkan teks.
 * @param key - Kunci terjemahan.
 * @param options - Opsi tambahan (misal, variabel dinamis).
 * @returns Hasil terjemahan.
 */
export const translate = (key: string, options?: Record<string, unknown>): string => {
    return i18n.t(key, options);
};

/**
 * Fungsi untuk mengganti bahasa.
 * @param lang - Kode bahasa (misal: 'en', 'id').
 */
export const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
};
