/** @type {import('next').NextConfig} */
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add MonacoWebpackPlugin only during client-side build
        if (!isServer) {
          config.plugins.push(
            new HtmlWebpackPlugin({
              template: path.join(__dirname, "src/index.html"), // index html file
            }),
            new MonacoWebpackPlugin({
              // Options for the plugin
              languages: ['json'], // Add the languages you want to support
            })
          );
        }
    
        return config;
      },
};


export default nextConfig;
