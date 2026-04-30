import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const BASE_URL = "https://www.axpertcera.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Sanitaryware Manufacturer & Supplier in India | Wash Basin, One Piece Toilet, Wall Hung Toilet | Axpert Cera',
    template: "%s | Axpert Cera",
  },
  description:
    "Axpert Cera is a world-class, ISO-certified sanitaryware manufacturer, crafting luxury ceramic products including One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets, and exclusive Designer Collections. Serving dealers and buyers with premium quality across Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, SurendraNagar, and pan-India.",
  keywords: [
    // ── Existing brand + product keywords ──────────────────────────────────
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
    "Axpert Ceramic Manufacturer",
    "Sanitaryware Supplier Ahmedabad",
    "One Piece Toilet Mumbai",
    "Ceramic Wash Basin Surat",
    "Wall Hung WC Delhi",
    "Water Closet Price Bangalore",
    "Sanitaryware Dealer Pune",
    "Vitreous China Products India",
    "Counter Top Wash Basin Hyderabad",
    "Sanitaryware Exporter Gujarat",
    "Designer Bathroom Fittings India",
    "EWC Toilet Manufacturer",
    "Premium Ceramic Products Vadodara",
    "Luxury Sanitaryware Chennai",
    "Bathroom Products Kolkata",
    "Ceramic Industry India",

    // ── State Capitals (All 28 States – Compulsory) ────────────────────────
    "sanitaryware manufacturer Lucknow",        // UP capital
    "ceramic products Bhopal",                  // MP capital
    "bathroom fittings Jaipur",                 // Rajasthan capital
    "sanitaryware Patna",                       // Bihar capital
    "wash basin Raipur",                        // Chhattisgarh capital
    "one piece toilet Ranchi",                  // Jharkhand capital
    "sanitaryware Bhubaneswar",                 // Odisha capital
    "bathroom fittings Thiruvananthapuram",     // Kerala capital
    "wash basin Chennai",                       // Tamil Nadu capital
    "sanitaryware Bangalore",                   // Karnataka capital
    "ceramic products Hyderabad",               // Telangana capital
    "bathroom fittings Amaravati",              // AP capital
    "sanitaryware Panaji",                      // Goa capital
    "wash basin Shimla",                        // HP capital
    "bathroom fittings Dehradun",               // Uttarakhand capital
    "sanitaryware Chandigarh",                  // Punjab/Haryana capital
    "ceramic products Srinagar",                // J&K capital
    "sanitaryware Jammu",                       // J&K winter capital
    "wash basin Shillong",                      // Meghalaya capital
    "sanitaryware Imphal",                      // Manipur capital
    "bathroom fittings Aizawl",                 // Mizoram capital
    "ceramic products Kohima",                  // Nagaland capital
    "sanitaryware Agartala",                    // Tripura capital
    "wash basin Gangtok",                       // Sikkim capital
    "bathroom fittings Itanagar",               // Arunachal Pradesh capital
    "sanitaryware Dispur",                      // Assam capital
    "ceramic products Guwahati",                // Assam major city

    // ── UT Capitals ─────────────────────────────────────────────────────────
    "sanitaryware Puducherry",
    "bathroom fittings Port Blair",
    "ceramic products Daman",
    "sanitaryware Silvassa",
    "wash basin Kavaratti",

    // ── Gujarat – Comprehensive Tier-2/3 ────────────────────────────────────
    "sanitaryware Bhavnagar",
    "ceramic products Jamnagar",
    "wash basin Junagadh",
    "bathroom fittings Anand",
    "sanitaryware Bharuch",
    "ceramic products Mehsana",
    "sanitaryware Bhuj",
    "wash basin Gandhidham",
    "bathroom fittings Navsari",
    "sanitaryware Wankaner",
    "ceramic products Limbdi",
    "wash basin Dhrangadhra",
    "sanitaryware Halvad",
    "bathroom fittings Ankleshwar",
    "ceramic products Mundra",

    // ── North India – Key Cities ─────────────────────────────────────────────
    "sanitaryware Noida",
    "ceramic products Gurgaon",
    "wash basin Faridabad",
    "bathroom fittings Agra",
    "sanitaryware Varanasi",
    "ceramic products Kanpur",
    "wash basin Meerut",
    "sanitaryware Prayagraj",
    "bathroom fittings Ludhiana",
    "ceramic products Amritsar",
    "sanitaryware Jodhpur",
    "wash basin Udaipur",
    "bathroom fittings Kota",

    // ── South India – Key Cities ─────────────────────────────────────────────
    "sanitaryware Coimbatore",
    "ceramic products Kochi",
    "wash basin Kozhikode",
    "bathroom fittings Mysore",
    "sanitaryware Visakhapatnam",
    "ceramic products Vijayawada",
    "wash basin Tirupati",
    "sanitaryware Thrissur",
    "bathroom fittings Madurai",

    // ── East India – Key Cities ──────────────────────────────────────────────
    "sanitaryware Jamshedpur",
    "ceramic products Bhubaneswar",
    "wash basin Cuttack",
    "bathroom fittings Siliguri",
    "sanitaryware Durbhanga",
    "ceramic products Bokaro",

    // ── B2B Buyer-Intent Keywords (from seo.md recommendations) ─────────────
    "sanitaryware dealer wanted India",
    "sanitaryware distributorship India",
    "one piece toilet factory direct India",
    "bulk sanitaryware order India",
    "sanitaryware exporter India",
    "B2B sanitaryware supplier India",
    "wholesale ceramic manufacturer India",
    "sanitaryware manufacturer for builders India",
    "bulk wash basin supplier India",
    "one piece toilet wholesale India",
    "sanitaryware for hotel projects India",
    "commercial bathroom fittings supplier India",
    "ISO certified ceramic manufacturer India",
    "sanitaryware manufacturer since 2019",
    "pan India sanitaryware supply",
    "factory direct sanitaryware Gujarat",
    "dealer pricing sanitaryware India",
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
    title: "Axpert Cera | Premium Ceramic Sanitaryware Manufacturer India",
    description:
      "Discover Axpert Cera's premium range of luxury, ISO-certified ceramic sanitaryware. We masterfully craft One Piece Toilets, Pedestal Basins, Wall Hung Toilets, and exclusive Designer Collections. Supplying across Morbi, Ahmedabad, Surat, and all over India.",
    images: [
      {
        url: "/hero_bathroom.png",
        width: 1200,
        height: 630,
        alt: "Axpert Cera Luxury Sanitaryware Products - Ceramic Hub Morbi, Rajkot, Ahmedabad, Vadodara, Surat, Gujarat",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axpert Cera | Premium Sanitaryware Manufacturer",
    description:
      "Explore Axpert Cera's luxury ceramic range: One Piece Toilets, Wall Hung WCs, & Designer Basins. Premium quality from Morbi, Gujarat for the Indian and Global markets.",
    images: ["/hero_bathroom.png"],
    creator: "@axpertcera",
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  category: "Manufacturing",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1A2744" },
  ],
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
          "Axpert Cera is a world-class, ISO-certified sanitaryware manufacturer, offering an exquisite, premium range of luxury ceramic products including One Piece Toilets, Pedestal Wash Basins, Wall Hung Toilets, Water Closets, and exclusive Designer Collections.",
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
        sameAs: [
          "https://www.indiamart.com/axpert-cera/"
        ],
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
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Axpert Cera",
        description: "Premium Sanitaryware Manufacturer in India",
        potentialAction: {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${BASE_URL}/products?q={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
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
          "World-class ISO-certified manufacturer of luxury sanitaryware. We craft premium ceramic products — One Piece Toilets, Wash Basins, Wall Hung Toilets, and Designer Collections — supplying dealers across Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, Chotila, SurendraNagar, and throughout India with uncompromising quality and elegance.",
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
          "Experience luxury with Axpert Cera, India's premium sanitaryware manufacturer. Explore our exquisite range of One Piece Toilets, Wash Basins, Wall Hung Toilets, and Designer Collections. Proudly serving Morbi, Rajkot, Ahmedabad, Gandhinagar, Surat, Vadodara, and pan-India.",
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
      // ── NEW: Manufacturer Schema ──────────────────────────────────────────
      {
        "@type": "Manufacturer",
        "@id": `${BASE_URL}/#manufacturer`,
        name: "Axpert Cera",
        legalName: "Axpert Ceramic",
        url: BASE_URL,
        foundingDate: "2019",
        description: "ISO 9001:2015 certified sanitaryware manufacturer based in Gujarat, India. Producing premium One Piece Toilets, Wash Basins, Wall Hung Toilets, Water Closets, and Designer Collections. Supplying dealers and builders across all 28 Indian states including Gujarat, Maharashtra, Rajasthan, Uttar Pradesh, Karnataka, Tamil Nadu, Telangana, Kerala, West Bengal, Bihar, Odisha, Madhya Pradesh, Chhattisgarh, Punjab, Haryana, Delhi, Himachal Pradesh, Uttarakhand, Jharkhand, Andhra Pradesh, Goa, Assam, Meghalaya, Manipur, Mizoram, Nagaland, Tripura, Sikkim, and Arunachal Pradesh.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Gugliyana, Near Gugliyana Bus Stop, Than Chotila Road, Than",
          addressLocality: "SurendraNagar",
          addressRegion: "Gujarat",
          postalCode: "363530",
          addressCountry: "IN",
        },
        telephone: "+91-94293-39212",
        email: "info@axpertcera.com",
        areaServed: [
          { "@type": "State", name: "Gujarat", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Maharashtra", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Rajasthan", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Uttar Pradesh", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Madhya Pradesh", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Karnataka", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Tamil Nadu", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Telangana", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Andhra Pradesh", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Kerala", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "West Bengal", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Bihar", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Odisha", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Chhattisgarh", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Jharkhand", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Punjab", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Haryana", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Delhi", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Himachal Pradesh", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Uttarakhand", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Goa", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Assam", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Meghalaya", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Manipur", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Mizoram", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Nagaland", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Tripura", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Sikkim", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Arunachal Pradesh", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "State", name: "Jammu and Kashmir", containedInPlace: { "@type": "Country", name: "India" } },
          { "@type": "Country", name: "India" },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Axpert Cera Sanitaryware Products 2026",
          url: `${BASE_URL}/catalog`,
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "One Piece Toilet", description: "Premium vitreous china one piece toilets with dual-flush" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pedestal Wash Basin", description: "Classic and designer pedestal wash basins" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Wall Hung Toilet", description: "Space-saving wall hung WC for modern bathrooms" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Table Top Basin", description: "Luxury counter-top ceramic basins" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Water Closet EWC", description: "S-Trap and P-Trap EWC water closets" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Wall Mount Wash Basin", description: "Space-saving wall mounted ceramic basins" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Designer Collection", description: "Exclusive Vitrosa designer sanitaryware" } },
          ],
        },
      },
      // ── NEW: Service Schema for B2B Supply ───────────────────────────────
      {
        "@type": "Service",
        "@id": `${BASE_URL}/#service`,
        name: "Sanitaryware Bulk Supply & Dealer Distribution",
        provider: { "@id": `${BASE_URL}/#organization` },
        description: "Factory-direct bulk sanitaryware supply for dealers, builders, contractors, architects, hotel projects, and real estate developers across all Indian states. Offering competitive wholesale pricing, fast dispatch from Gujarat, and full technical support.",
        areaServed: { "@type": "Country", name: "India" },
        serviceType: "Sanitaryware Manufacturing and Distribution",
        offers: {
          "@type": "Offer",
          description: "Wholesale dealer pricing for bulk sanitaryware orders across India",
          availability: "https://schema.org/InStock",
          priceCurrency: "INR",
        },
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
