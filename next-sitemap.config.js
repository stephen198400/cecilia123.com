/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://cecilia123.com',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
	},
	exclude: ['/adus'],
	changefreq: 'weekly',
	priority: 0.7,
	sitemapSize: 5000,
};
