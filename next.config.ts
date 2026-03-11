import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output standalone for easy deployment
  // output: "standalone",

  images: {
    // Allow local images from public/ - no external domains needed
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
