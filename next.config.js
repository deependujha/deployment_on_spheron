/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'akamai',
		path: '.',
	},
	trailingSlash: true,
	assetPrefix: isProd ? "https://www.drift-dao.com" : "http://localhost:3000/",
};

module.exports = nextConfig;
