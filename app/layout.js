import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Codesavvy",
  description: "A code learning Plaform to learn and practice code and collaborate with outstanding millions of users",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Navbar/>
        {children}
        <Footer/>
      </body>
        </AuthProvider>
    </html>
  );
}
