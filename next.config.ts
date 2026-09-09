import type { NextConfig } from "next";

const config: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          has: [{ type: "host", value: "(www\\.)?casacross\\.org" }],
          destination: "/home",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default config;
