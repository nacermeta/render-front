import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.jsx')

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['readymadeui.com',"cdn.sanity.io"],
      },
};


export default withNextIntl(nextConfig);
