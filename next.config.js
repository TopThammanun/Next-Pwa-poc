/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: false,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
    runtimeCaching: [
      {
        urlPattern: /https:\/\/top-backend.vercel.app/,
        handler: 'NetworkOnly',
      },
    ],
  }
});

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA(nextConfig);
