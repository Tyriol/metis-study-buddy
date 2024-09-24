import "./globals.css";

export const metadata = {
  title: "METIS",
  description: "Study in style",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
