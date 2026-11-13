import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

const plex = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const description =
  "ابتدار شركة سعودية ريادية تمكّن المؤسسات والقطاعات التقليدية من دخول العالم الرقمي عبر منظومات ذكية ومتكاملة تجمع بين التقنية والإدارة والاستدامة.";

export const metadata: Metadata = {
  title: "ابتدار | حلول تقنية وتحول رقمي",
  description,
  openGraph: {
    title: "ابتدار | حلول تقنية وتحول رقمي",
    description,
    locale: "ar_SA",
    type: "website",
    images: ["/logo.png"],
  },
};

export const viewport: Viewport = { themeColor: "#12293B" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={plex.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
