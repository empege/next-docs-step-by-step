/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add a rule to handle mp3 or wav files
    config.module.rules.push({
      test: /\.(mp3|wav)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media/',
          publicPath: '/_next/static/media/',
          esModule: false,
        },
      },
    });

    return config;
  },
};

module.exports = nextConfig;