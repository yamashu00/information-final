import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages の場合は '/information-final' が必要ですが、
  // Vercel のルートドメインにデプロイする場合は空欄 ('') にする必要があります。
  // 環境変数によって自動で切り替わるようにします。
  basePath: process.env.GITHUB_ACTIONS === 'true' ? '/information-final' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
