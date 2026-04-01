import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const BASE_URL = "https://www.axpertcera.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Axpert Cera | Premium Sanitaryware Manufacturer in Morbi, Gujarat",
    template: "%s | Axpert Cera",
  },
  description:
    "Axpert Cera is a leading ISO-certified sanitaryware manufacturer based in Gujarat, India. We supply premium ceramic products - One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets, Table Top Basins, Pan & Urinal, and Designer Collections - to dealers and buyers across Gujarat and all India. Serving Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, SurendraNagar and pan-India.",
  keywords: [
    "Axpert Cera",
    "Axpert Ceramic",
    "Axpert Cera Morbi",
    "one piece toilet",
    "pedestal wash basin",
    "wall hung toilet",
    "water closet",
    "table top basin",
    "wall mount wash basin",
    "pan and urinal",
    "designer sanitaryware collection",
    "wash basin",
    "EWC toilet",
    "sanitaryware manufacturer Morbi",
    "ceramic products Morbi",
    "one piece toilet Morbi",
    "wash basin Morbi",
    "sanitaryware Rajkot",
    "wash basin Rajkot",
    "bathroom products Rajkot",
    "ceramic products Ahmedabad",
    "sanitaryware Ahmedabad",
    "wash basin Ahmedabad",
    "toilet manufacturer Ahmedabad",
    "sanitaryware Gandhinagar",
    "ceramic products Gandhinagar",
    "sanitaryware Surat",
    "bathroom fittings Surat",
    "sanitaryware Vadodara",
    "ceramic products Vadodara",
    "bathroom fittings Chotila",
    "sanitaryware SurendraNagar",
    "sanitaryware manufacturer Gujarat",
    "ISO certified sanitaryware Gujarat",
    "bathroom fittings Gujarat",
    "sanitaryware manufacturer India",
    "premium ceramic bathroom products India",
    "ceramic sanitaryware supplier India",
  ],
  authors: [{ name: "Axpert Cera", url: BASE_URL }],
  creator: "Axpert Cera",
  publisher: "Axpert Cera",
  verification: {
    google: "UaNwzvZj79a7-Tw8aYw7pNTI0SQ0sRXPmB13BVTSdS0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Axpert Cera",
    title: "Axpert Cera | Premium Sanitaryware Manufacturer in Morbi, Gujarat",
    description:
      "Explore Axpert Cera's wide range of ISO-certified ceramic sanitaryware - One Piece Toilets, Pedestal Basins, Wall Hung Toilets, Water Closets, and Designer Collections. Manufacturer based in Gujarat, India.",
    images: [
      {
        url: "/hero_bathroom.png",
        width: 1200,
        height: 630,
        alt: "Axpert Cera Premium Sanitaryware Products - Manufacturer in Morbi Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axpert Cera | Premium Sanitaryware Manufacturer in Morbi, Gujarat",
    description:
      "Explore Axpert Cera's premium ceramic sanitaryware - One Piece Toilets, Pedestal Basins, Wall Hung Toilets, Water Closets & Designer Collections. Based in Gujarat, India.",
    images: ["/hero_bathroom.png"],
    creator: "@axpertcera",
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  category: "Manufacturing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Axpert Cera",
        legalName: "Axpert Ceramic",
        url: BASE_URL,
        logo: {
          "@type": "ImageObject",
          url: `${BASE_URL}/favicon.png`,
          contentUrl: `${BASE_URL}/favicon.png`,
        },
        foundingDate: "2019",
        description:
          "Axpert Cera is a leading ISO-certified sanitaryware manufacturer based in Gujarat, India, offering premium ceramic products including One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets and Designer Collections.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gugliyana, Near Gugliyana Bus Stop, Than Chotila Road, Than",
          addressLocality: "SurendraNagar",
          addressRegion: "Gujarat",
          postalCode: "363530",
          addressCountry: "IN",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-94293-39212",
            contactType: "sales",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi", "Gujarati"],
          },
        ],
        email: "info@axpertcera.com",
        sameAs: [],
        areaServed: {
          "@type": "GeoCircle",
          geoMidpoint: {
            "@type": "GeoCoordinates",
            latitude: 22.8302,
            longitude: 71.1332,
          },
          geoRadius: "200000",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        name: "Axpert Cera",
        image: `${BASE_URL}/hero_bathroom.png`,
        url: BASE_URL,
        telephone: "+91-94293-39212",
        email: "info@axpertcera.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gugliyana, Near Gugliyana Bus Stop, Than Chotila Road, Than",
          addressLocality: "SurendraNagar",
          addressRegion: "Gujarat",
          postalCode: "363530",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.8302,
          longitude: 71.1332,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            opens: "09:00",
            closes: "18:00",
          },
        ],
        priceRange: "₹₹",
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, Bank Transfer",
        description:
          "Leading ISO-certified sanitaryware manufacturer in Gujarat, India. We supply premium ceramic products - One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets, Table Top Basins, Designer Collections - to dealers across Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, SurendraNagar and pan-India.",
        keywords:
          "sanitaryware manufacturer Morbi, ceramic products Rajkot, wash basin Morbi, one piece toilet Gujarat, sanitaryware Ahmedabad, ceramic products Ahmedabad, sanitaryware Gandhinagar, bathroom fittings Surat, sanitaryware Vadodara, bathroom fittings Chotila, sanitaryware manufacturer Gujarat, ISO certified sanitaryware India, sanitaryware supplier India",
        hasMap: "https://maps.google.com",
        servesCuisine: [],
        additionalType: "http://www.productontology.org/id/Sanitary_ware",
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Axpert Cera",
        description:
          "Premium sanitaryware manufacturer in Gujarat, India - One Piece Toilets, Wash Basins, Wall Hung Toilets, Water Closets, Designer Collections. Serving Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara and all India.",
        publisher: {
          "@id": `${BASE_URL}/#organization`,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: `${BASE_URL}/?q={search_term_string}`,
          },
          "query-input": "required name=search_term_string",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "ItemList",
        "@id": `${BASE_URL}/#productcategories`,
        name: "Axpert Cera Product Categories",
        description: "Complete range of sanitaryware products by Axpert Cera",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "One Piece Toilet",
            url: `${BASE_URL}/#collections`,
            description: "Premium one piece toilets manufactured in Morbi, Gujarat",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Pedestal Wash Basin",
            url: `${BASE_URL}/#collections`,
            description: "High-quality pedestal wash basins - Polo, Sophia, Stargold and more",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "One Piece Basin",
            url: `${BASE_URL}/#collections`,
            description: "Elegant one piece wash basins - Damru, Glass, Capsule designs",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Wall Hung Toilet",
            url: `${BASE_URL}/#collections`,
            description: "Modern wall hung toilets - Globus and Oscar designs",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Water Closet",
            url: `${BASE_URL}/#collections`,
            description: "EWC water closets - Floor Mount, Square EWC, Anglo, and Concealed options",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Table Top Basin",
            url: `${BASE_URL}/#collections`,
            description: "Stylish table top basins - Harrier, Tissot, Venito, Tork and more",
          },
          {
            "@type": "ListItem",
            position: 7,
            name: "Wall Mount Wash Basin",
            url: `${BASE_URL}/#collections`,
            description: "Space-saving wall mount wash basins in multiple sizes",
          },
          {
            "@type": "ListItem",
            position: 8,
            name: "Pan & Urinal",
            url: `${BASE_URL}/#collections`,
            description: "Orissa pans, urinals, sinks - complete sanitation range",
          },
          {
            "@type": "ListItem",
            position: 9,
            name: "Designer Collection",
            url: `${BASE_URL}/#products`,
            description: "Exclusive designer sanitaryware - Vitrosa Stargold, Polo, and premium basins",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-text-dark bg-white">
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-1SRVE3786Z" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-1SRVE3786Z');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
