import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import SessionProvider from "@/components/SessionProvider";
import { getServerSession } from "next-auth";
import authOptions from "@/auth";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JRUI",
  description: "Personal devloper resource and UI library",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  openGraph: {
    type: "website",
    title: "Jrui | Developer Rescource",
    description:
      "Personal devloper resource and UI library developed by Jordan Ready",
  },
  metadataBase: new URL("https://jrui.vercel.app/"),
  manifest: "/site.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
        <GoogleTagManager gtmId="GTM-MLTHWR9B" />
      </html>
    </SessionProvider>
  );
}
