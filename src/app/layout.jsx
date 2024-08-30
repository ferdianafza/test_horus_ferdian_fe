import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Gabarito } from "next/font/google";

const gabarito = Gabarito({ subsets: ["latin"] });


export const metadata = {
  title: "Test Horus Voucher FE",
  description: "Test Horus Voucher FE",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gabarito.className}`} suppressHydrationWarning={true} >
        <Navbar />
        {children}
        </body>
    </html>
  );
}
