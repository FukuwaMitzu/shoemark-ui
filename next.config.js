/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async function(){
    return [{
      source: "/",
      destination:"/dashboard",
      permanent: true
    }]
  }
}

module.exports = nextConfig
