import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axpert Cera | Premium Sanitaryware & Luxury Bathroom Collections",
  description: "Discover Axpert Cera's premium sanitaryware collections — modern washbasins, water closets, bathtubs, and luxury faucets. Elevate your bathroom sanctuary.",
  keywords: "sanitaryware, washbasin, toilet, bathtub, faucet, premium bathroom, luxury ceramic, Axpert Cera",
  openGraph: {
    title: "Axpert Cera | Premium Sanitaryware",
    description: "Elevate your sanctuary with minimalist design and unparalleled functionality.",
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
