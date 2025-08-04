import "./globals.css";
import { Header } from "./header/page"; 
import  Footer  from "./footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        //className={` dark ${geistSans.variable} ${geistMono.variable} antialiased`}
       className="flex flex-col min-h-screen" 
      >
        <Header /> 
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
