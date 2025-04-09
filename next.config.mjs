import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: 'cdn.sanity.io'
      },
      {
        protocol: "https",
        hostname: 'img.freepik.com'
      },
      
    ],
  },
};

export default withNextVideo(nextConfig);