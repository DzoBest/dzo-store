import { Images } from "lucide-react";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roxecqrdjnsfnrptjnxi.supabase.co",
        pathname: "**",
      },
    ],
  },
};


export default nextConfig;
