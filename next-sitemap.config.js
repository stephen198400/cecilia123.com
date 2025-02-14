/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://www.cecilia123.com',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		additionalSitemaps: ['https://www.cecilia123.com/sitemap.xml'],
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
