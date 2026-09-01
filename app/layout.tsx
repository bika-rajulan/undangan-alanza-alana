import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tasyakuran Khitanan Alanza & Aqiqah Alana",
  description:
    "Undangan digital Tasyakuran Khitanan Alanza & Aqiqah Alana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
