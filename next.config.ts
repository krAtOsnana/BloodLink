import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript:{
    ignoreBuildErrors: true
  },
  eslint:{
    ignoreDuringBuilds: true
  },
  env: {
    NEXT_PUBLIC_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT,
    NEXT_PUBLIC_PROJECT_ID: process.env.NEXT_PUBLIC_PROJECT_ID,
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    NEXT_PUBLIC_DATABASE_ID: process.env.NEXT_PUBLIC_DATABASE_ID,
    NEXT_PUBLIC_DONOR_COLLECTION_ID: process.env.NEXT_PUBLIC_DONOR_COLLECTION_ID,
    NEXT_PUBLIC_RECIPIENT_COLLECTION_ID: process.env.NEXT_PUBLIC_RECIPIENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: process.env.NEXT_PUBLIC_BUCKET_ID,
  },

};

export default nextConfig;
