import {NextIntlClientProvider} from 'next-intl';
import {getTranslations, getMessages} from 'next-intl/server';
import { Poppins , Cairo} from 'next/font/google';
import NavBar from './Sections/NavBar';
import Footer from './Sections/Footer';
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
});
// Load Cairo font
const cairo = Cairo({
  subsets: ['latin', 'arabic'], // Include Arabic subset for Cairo
  weight: ['400', '600', '700'],
  display: 'swap',
});
// Function to dynamically generate metadata
export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'}); // Load translations for Metadata namespace
  
  return {
    title: t('title'), // Localized title
    description: t('description'), // Localized description
    icons: {
      icon: '../favicon.ico', // Locale-specific icons if necessary
    }
  };
}

// Root Layout Component
export default async function RootLayout({children, params}) {
  const {locale} = params; // Extract locale from the route parameters
  const messages = await getMessages(locale); // Fetch locale-specific messages

  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} className={locale === 'ar' ? 'rtl' : ''}>
      <body className={`${poppins.className} ${locale === 'ar' ? cairo.className : ''}`}>
          <NavBar /> {/* Navigation Bar */}
          <main>{children}</main> {/* Page content */}
          <Footer /> {/* Footer */}
        </body>
      </html>
    </ NextIntlClientProvider>
  );
}
