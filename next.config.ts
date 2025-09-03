import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // disables Image Optimization for static export
  },
  output: "export",  // 🔹 enable static export
};

export default nextConfig;
