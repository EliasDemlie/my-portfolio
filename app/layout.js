import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata = {
  title: "Elias Demlie | Full Stack Software Developer",
  description:
    "Full Stack Developer based in Addis Ababa, Ethiopia with 2+ years of experience building and deploying web and mobile applications with TypeScript, React, Node.js, NestJS, PostgreSQL, and Flutter.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="flex min-h-screen flex-col overflow-x-clip bg-slate-950 font-sans text-slate-200 antialiased">
        <Header />
        <main className="flex-grow overflow-x-clip">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
