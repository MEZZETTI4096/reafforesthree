/** @type {import('next').NextConfig} */
// NEXT_EXPORT=1 ativa o modo export estático para GitHub Pages
// (output: 'export' + basePath da subpasta do Pages).
const isPagesExport = process.env.NEXT_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  ...(isPagesExport
    ? {
        output: "export",
        basePath: "/reafforesthree",
        images: { unoptimized: true },
      }
    : {}),
};

export default nextConfig;
