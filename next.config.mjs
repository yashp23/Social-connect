/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com',
      'www.livemint.com',
      'images.hindustantimes.com',
      'cdn.wionews.com',
      'c.ndtvimg.com',
      'static.toiimg.com',
      'img.etimg.com',
      'resize.indiatvnews.com',
      'img.republicworld.com',
      'cdn.dnaindia.com',
      'images.herzindagi.info',
      'www.livemint.com',
      'images.firstpost.com',
      'images.news18.com',
      'i.ytimg.com',
      'english.cdn.zeenews.com',
      'images.moneycontrol.com',
    'bl-i.thgim.com','www.aljazeera.com','www.aljazeera.com'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb'
    }
  }
};

export default nextConfig;
