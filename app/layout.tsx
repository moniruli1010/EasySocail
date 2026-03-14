import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EasySocial",
  description: "SaaS social media scheduler for agencies and creators"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
