import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axpert Cera | Top Premium Sanitaryware & Ceramic Products",
  description: "Discover Axpert Cera's premium sanitaryware, luxury ceramic products, modern washbasins, water closets, bathtubs, and bathroom fittings. Elevate your bathroom with top cera products.",
  keywords: "cera, ceramic products, sanitaryware, best cera brand, premium bathroom, washbasin, toilet, bathtub, luxury ceramic, Axpert Cera, top cera products, bathroom fittings",
  openGraph: {
    title: "Axpert Cera | Top Premium Sanitaryware & Ceramic Products",
    description: "Axpert Cera offers the best in premium sanitaryware, luxury ceramic products, modern washbasins, water closets, and bathroom fittings.",
    type: "website",
    url: "https://axpertcera.com",
    images: [{ url: "/hero_bathroom.png" }]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased text-text-dark bg-white">
        {children}
      </body>
    </html>
  );
}
