/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.geojson$/,
      loader: "json5-loader",
    });

    return config;
  },
};

module.exports = nextConfig;
