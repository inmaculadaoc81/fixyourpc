import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old WordPress placeholder/draft pages that never had real content.
      { source: "/inicio", destination: "/", permanent: true },
      { source: "/plantilaa-inicio", destination: "/", permanent: true },
      { source: "/baner-publicitari", destination: "/", permanent: true },
      // The site is now a single page: old section pages become anchors.
      { source: "/tarifas", destination: "/#contacto", permanent: true },
      { source: "/contacto", destination: "/#contacto", permanent: true },
      { source: "/blog", destination: "/#problemas", permanent: true },
    ];
  },
};

export default nextConfig;
