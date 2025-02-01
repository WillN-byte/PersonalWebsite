import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Disables image optimization (required for GitHub Pages)
  },
  basePath: isProd ? "/PersonalWebsite" : "", // Replace <repository-name> with your repo name
  assetPrefix: isProd ? "/PersonalWebsite" : "", // Ensures assets are loaded from the correct path
};

export default nextConfig;
