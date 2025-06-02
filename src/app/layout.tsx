import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sankalp Singh - AI Developer & Full Stack Engineer",
  description: "Building AI-powered web applications and tools. Experienced in Node.js, Next.js, Python, and modern web technologies. Creator of xautodm.com and tokgency.com.",
  keywords: ["AI Developer", "Full Stack Developer", "Next.js", "Node.js", "Python", "Web Development", "AI Tools", "Software Engineer"],
  authors: [{ name: "Sankalp Singh" }],
  creator: "Sankalp Singh",
  publisher: "Sankalp Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sankalpsingh.tech/",
    title: "Sankalp Singh - AI Developer & Full Stack Engineer",
    description: "Building AI-powered web applications and tools. Experienced in Node.js, Next.js, Python, and modern web technologies.",
    siteName: "Sankalp Singh Portfolio",
    images: [
      {
        url: "/image1.jpeg",
        width: 1200,
        height: 630,
        alt: "Sankalp Singh - AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sankalp Singh - AI Developer & Full Stack Engineer",
    description: "Building AI-powered web applications and tools. Creator of xautodm.com and tokgency.com.",
    images: ["/image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
