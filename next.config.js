/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs');
const headers = [
  {
    key: 'Cache-Control',
    value: 'max-age=3600',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
];
const config = {
  reactStrictMode: true,
  basePath: '/academia',
  async headers() {
    return [
      {
        source: '/', // root
        headers,
      },
      {
        source: '/(.*)', // all pages
        headers,
      },
    ];
  },
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

const sentryWebpackPluginOptions = {
  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

const enableSentry =
  process.env.APP_ENV === 'dev' ||
  process.env.APP_ENV === 'staging' ||
  process.env.APP_ENV === 'production';
module.exports = enableSentry
  ? withSentryConfig(config, sentryWebpackPluginOptions)
  : config;
