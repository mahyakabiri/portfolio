import type { NextConfig } from "next";

// Set by the GitHub Pages workflow (e.g. "/prtfolio"); empty for a root domain or local dev.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
};
export default nextConfig;
