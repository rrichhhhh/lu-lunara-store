import "./globals.css";

export const metadata = {
  title: "LU LUNARA",
  description: "Luxury Watches and Leather Collections",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
