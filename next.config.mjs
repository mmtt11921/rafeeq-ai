const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isProjectPages = process.env.GITHUB_ACTIONS === "true" && !repoName.endsWith(".github.io");
const pagesPath = isProjectPages ? `/${repoName}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: pagesPath,
  assetPrefix: pagesPath,
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
