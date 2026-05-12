import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Career Launchpad | Unlocking Your Potential",
  description:
    "Empowering underprivileged students with the skills and opportunities to launch successful careers.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-brand-dark-blue text-white`}>
        <Navbar />
        <main>
          <PageTransition>{children}</PageTransition>
        </main>
        {modal}
        <Footer />
      </body>
    </html>
  );
}
