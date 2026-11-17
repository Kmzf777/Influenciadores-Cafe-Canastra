import type { NextConfig } from "next";

// Site estático (next build gera a pasta out/): a Vercel serve direto, sem servidor.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
