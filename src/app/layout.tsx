import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emre Atilla — Mobile Developer",
  description:
    "Emre Atilla, deneyimli bir React Native ve Mobil Uygulama Geliştiricisi. Hey Teknoloji'de Mobile Developer olarak çalışıyor. Modern, performanslı ve kullanıcı odaklı mobil uygulamalar geliştiriyor.",
  keywords: [
    "Emre Atilla",
    "React Native Developer",
    "Mobile Developer",
    "Mobil Uygulama Geliştirici",
    "iOS Developer",
    "Android Developer",
    "Hey Teknoloji",
    "TypeScript",
  ],
  authors: [{ name: "Emre Atilla" }],
  creator: "Emre Atilla",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://emreatill.com.tr",
    siteName: "Emre Atilla",
    title: "Emre Atilla — Mobile Developer",
    description:
      "React Native ve Mobil Uygulama Geliştirme alanında uzmanlaşmış yazılım geliştirici.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emre Atilla — Mobile Developer",
    description:
      "React Native ve Mobil Uygulama Geliştirme alanında uzmanlaşmış yazılım geliştirici.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://emreatill.com.tr",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080b14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
