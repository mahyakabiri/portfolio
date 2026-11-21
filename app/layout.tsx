import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display-next", display: "swap", weight: ["500", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body-next", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono-next", display: "swap", weight: ["500", "600", "700"], preload: false });

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.roles[0]}`,
  description: `Portfolio of ${profile.name}, ${profile.roles[0]}.`,
  openGraph: { title: profile.name, description: profile.roles[0], type: "website" },
};

export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0c1015" },
    { media: "(prefers-color-scheme: light)", color: "#f5f6f8" },
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
