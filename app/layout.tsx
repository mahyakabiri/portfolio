import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/profile";
import "./globals.css";

// Fonts are self-hosted from npm packages so builds never depend on a network fetch.
const display = localFont({ src: "../node_modules/@fontsource-variable/sora/files/sora-latin-wght-normal.woff2", weight: "100 800", variable: "--font-display-next", display: "swap" });
const body = localFont({ src: "../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2", weight: "100 900", variable: "--font-body-next", display: "swap" });
const mono = localFont({ src: "../node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2", weight: "100 800", variable: "--font-mono-next", display: "swap", preload: false });

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.roles[0]}`,
  description: `Portfolio of ${profile.name}, ${profile.roles[0]}.`,
  openGraph: { title: profile.name, description: profile.roles[0], type: "website" },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0f24" },
    { media: "(prefers-color-scheme: light)", color: "#f3f5f9" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <head>
        {/* Apply the saved theme before paint to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem("theme");if(t)document.documentElement.dataset.theme=t}catch(e){}` }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
