import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "flowsync — move your AI coding setup between machines and repos",
  description:
    "flowsync scans your Claude Code, Codex and Cursor configuration and moves it to any machine or repo with one command. Secrets are excluded by default.",
  openGraph: {
    title: "flowsync — move your AI coding setup between machines and repos",
    description:
      "Scan, push and pull your AI coding configuration across machines. Secrets are excluded by default.",
    siteName: "flowsync",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
