/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['192.168.31.235', 'post-card-api.atiar.info', '192.168.0.103', 'gifty-api.non-logic.com', 'http://next.genieinfo.tech/'],
  },
  // images: {
  //   domains: ['192.168.31.235', 'post-card-api.atiar.info', '192.168.0.103'],
  // },
}

module.exports = nextConfig
