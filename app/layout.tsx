import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "PFAT Laundry Shop",
    description: "Welcome to PFAT Laundry",
    authors: [{name: "Osasere Ikponmwosa"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
