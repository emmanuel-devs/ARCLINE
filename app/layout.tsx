import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCLINE — From Concept to Better Living",
  description: "Architecture and design for better living. Explore our services, selected projects, and thoughtful approach to the built environment.",
  metadataBase: new URL("https://arcline.studio"),
  openGraph: {
    title: "ARCLINE — Architecture for the way we feel",
    description: "From concept to better living.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}