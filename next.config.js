/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	reactStrictMode: true,
	images: {
		loader: 'akamai',
		path: '.',
	},
	trailingSlash: true,
	assetPrefix: isProd ? "https://deployment-on-spheron-3d5319.spheron.app/" : "",
};

module.exports = nextConfig;
