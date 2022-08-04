/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  basePath: '/academia',
  async redirects() {
    return [
      {
        source: '/academia/courses',
        destination: '/academia',
        permanent: false,
        basePath: false,
      },
    ];
  },
};
