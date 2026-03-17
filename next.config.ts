import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  turbopack: {
    root: path.join(__dirname, "."),
  },
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  async redirects() {
    return [
      {
        source: "/:section(blog|components)/writing-effect-inspired-by-apple",
        destination: "/:section/apple-hello-effect",
        permanent: true,
      },
      {
        source: "/:section(blog|components)/work-experience-component",
        destination: "/:section/work-experience",
        permanent: true,
      },
      {
        source: "/:section(blog|components)/theme-switcher-component",
        destination: "/:section/theme-switcher",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/:section(blog|components)/:slug.mdx",
        destination: "/blog.mdx/:slug",
      },
      {
        source: "/:section(blog|components)/:slug",
        destination: "/blog.mdx/:slug",
        has: [
          {
            type: "header",
            key: "accept",
            value: "(?<accept>.*text/markdown.*)",
          },
        ],
      },
      {
        source: "/rss",
        destination: "/blog/rss",
      },
      {
        source: "/registry/rss",
        destination: "/components/rss",
      },
    ]
  },
}

export default nextConfig
