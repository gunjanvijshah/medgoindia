import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Medgoindia",
  description: "Medical Tourism",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        <main className="bg-gray-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
