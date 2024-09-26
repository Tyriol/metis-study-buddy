'use client';
import "./globals.css";
import Header from "@/app/components/Header/Header.jsx";
import Footer from "@/app/components/Footer/Footer.jsx";
import signOut from "@/helpers/signout.js";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header>
          <button onClick={signOut}>Sign Out</button>
        </Header>

      {children}<Footer /></body>
    </html>
  );
}
