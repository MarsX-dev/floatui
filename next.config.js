/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // trailingSlash: true,
  experimental: {
    appDir: true,
  },
  // webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  env: {
    DB_URI: process.env.DB_URI,
    URL: process.env.URL,

    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MG_SENDER_ID: process.env.MG_SENDER_ID,
    APP_ID: process.env.APP_ID,
    URL: process.env.URL,

    ANALYTICS_KEY: process.env.ANALYTICS_KEY,

    GA_ID: process.env.GA_ID,
    GOOGLE_SITE_VERIFICATION: process.env.GOOGLE_SITE_VERIFICATION,

    CONVERTKIT_API_URL: process.env.CONVERTKIT_API_URL,
    CONVERTKIT_API_KEY: process.env.CONVERTKIT_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "api.uifaces.co",
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
