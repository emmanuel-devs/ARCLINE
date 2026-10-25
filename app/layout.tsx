import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARCLINE — Architecture for the way we feel",
  description: "A considered architecture studio shaping spaces, rituals, and the way we live.",
  metadataBase: new URL("https://arcline.studio"),
  openGraph: {
    title: "ARCLINE — Architecture for the way we feel",
    description: "Spaces made to move you.",
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