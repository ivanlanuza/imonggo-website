/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/login",
        destination: "https://secure.imonggo.com/login",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
