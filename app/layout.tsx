import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rafeeq.ai"),
  title: "رفيق AI | التوأم الرقمي الذكي لضيوف الرحمن",
  description:
    "منصة توأم رقمي ذكية لرفع جاهزية ضيوف الرحمن والتنبؤ بالمخاطر وتسريع الاستجابة للطوارئ.",
  keywords: ["رفيق AI", "الحج", "العمرة", "التوأم الرقمي", "الذكاء الاصطناعي", "رؤية 2030"],
  openGraph: {
    title: "رفيق AI",
    description: "التوأم الرقمي الذكي لضيوف الرحمن",
    images: ["/rafeeq-brand.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
