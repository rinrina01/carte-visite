import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ligne Chic",
  description: "Agence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${interSans.variable} antialiased w-screen h-screen`}
      >
        {children}
      </body>
    </html>
  );
}