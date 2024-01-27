/** @type {import('next').NextConfig} */
const nextConfig = {}
module.exports = {
    webpack: (config) => {
       
            config.resolve.fallback.fs = false;
            config.target = "node";
            output: 'export';
      
        return config;
    },
    module: {
        rules: [
          {
            test: /\.node$/,
            loader: "node-loader",
          },
        ],
      },
}
module.exports = nextConfig

