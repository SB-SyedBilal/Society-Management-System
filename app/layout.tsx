import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Sidebar } from "@/components/dashboard/sidebar";
import { TopBar } from "@/components/dashboard/top-bar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUCHS Operations Hub",
  description: "Advanced Society Management Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-muted/10 antialiased`}
      >
        <div className="relative flex min-h-screen w-full bg-linear-to-br from-white via-white to-slate-50">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col md:pl-72">
            <TopBar />
            <main className="flex-1 px-6 py-8">
              <div className="mx-auto max-w-6xl space-y-6">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
