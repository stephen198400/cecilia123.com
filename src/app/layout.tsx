import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Cecilia Home - Professional Architectural Design Services',
	description:
		'Professional architectural design and structural engineering services in California. Specializing in fire restoration, structural engineering, and permit services.',
	manifest: '/site.webmanifest',
	icons: {
		icon: [
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
		],
		apple: [
			{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{
				rel: 'mask-icon',
				url: '/safari-pinned-tab.svg',
				color: '#1E40AF',
			},
		],
	},
	themeColor: '#1E40AF',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<Script id="google-tag-manager" strategy="afterInteractive">
					{`
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-M4PN2ZCT');
					`}
				</Script>
				<Script
					src="https://www.googletagmanager.com/gtag/js?id=AW-16858007389"
					strategy="afterInteractive"
				/>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'AW-16858007389');
					`}
				</Script>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-M4PN2ZCT"
						height="0"
						width="0"
						style={{ display: 'none', visibility: 'hidden' }}
					></iframe>
				</noscript>
				{children}
			</body>
		</html>
	);
}
