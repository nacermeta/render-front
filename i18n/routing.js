export const routing = {
    /**
     * List of supported locales
     */
    locales: ['en', 'ar'], // Add all the locales you support
  
    /**
     * Default locale
     */
    defaultLocale: 'en',
  
    /**
     * A utility to check if a locale is supported
     */
    isSupportedLocale(locale) {
      return this.locales.includes(locale);
    },
  };
  