/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // ปิดการตรวจสอบ TypeScript ตอน build
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig