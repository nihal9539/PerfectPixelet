import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"


import { ClerkProvider} from "@clerk/nextjs";

const IBMPLEX = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "PerfectPixelate - AI-Powered Image Generator",
  description: "Generate and transform images effortlessly with PerfectPixelate. Use our AI-powered tools for outpainting, color replacement, and more.",
  keywords: "AI image generator, outpainting, color replacement, image editing, PerfectPixelate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn("font-IBMPLEX antialiased", IBMPLEX.variable)}>
          {children}
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
