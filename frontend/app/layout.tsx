import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VocabStream has moved | VocabStreamは移転しました",
  description: "VocabStream is now available at ProjectFluence.",
  robots: { index: false, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

