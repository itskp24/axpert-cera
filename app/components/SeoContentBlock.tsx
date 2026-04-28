import React from 'react';

interface SeoContentBlockProps {
  pageType: 'home' | 'about' | 'catalog' | 'products' | 'category' | 'designer';
  dynamicName?: string;
  dynamicCity?: string;
}

export default function SeoContentBlock({ pageType, dynamicName, dynamicCity }: SeoContentBlockProps) {
  let content = null;

  switch (pageType) {
    case 'home':
      content = (
        <>
          <h2 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Leading Sanitaryware Manufacturer and Supplier in India</h2>
          <p className="mb-4">
            Welcome to Axpert Cera, India's premier manufacturer and supplier of world-class ceramic sanitaryware. With a steadfast commitment to quality, innovation, and design, we have established ourselves as a trusted name in the sanitaryware industry. Our state-of-the-art manufacturing facility in Morbi, Gujarat, produces an extensive range of premium bathroom solutions, including elegant One Piece Toilets, space-saving Wall Hung Toilets, versatile Pedestal Wash Basins, and sophisticated Designer Collections. Every product that leaves our facility is crafted with precision, utilizing the finest raw materials and advanced European technology to ensure unmatched durability, brilliant finish, and superior functionality.
          </p>
          <p className="mb-4">
            As an ISO 9001:2015 certified company, Axpert Cera strictly adheres to international quality standards. We understand that modern bathrooms are not just functional spaces but personal sanctuaries. Therefore, our dedicated Research and Development team constantly innovates to bring you designs that seamlessly blend ergonomics with aesthetics. Whether you are an architect designing a luxury hotel, a builder developing a premium residential complex, or a homeowner renovating your personal space, our diverse catalog of over 125 meticulously crafted ceramic pieces offers the perfect solution to elevate your interiors.
          </p>
          <p className="mb-0">
            Our extensive distribution network ensures that Axpert Cera's premium sanitaryware is readily available across major Indian cities, including Ahmedabad, Rajkot, Surat, Vadodara, Mumbai, Pune, Delhi, Bangalore, Hyderabad, and Chennai. We take pride in our exceptional customer service, offering prompt delivery, comprehensive technical support, and competitive pricing for bulk orders and dealer inquiries. Explore our website to discover how Axpert Cera can transform your bathroom into a masterpiece of modern luxury and unparalleled comfort.
          </p>
        </>
      );
      break;
    case 'about':
      content = (
        <>
          <h2 className="text-[20px] font-serif text-[#1A1A1A] mb-4">About Axpert Cera: Crafting Excellence in Ceramic Sanitaryware</h2>
          <p className="mb-4">
            Established in 2019, Axpert Cera has rapidly grown to become a leading force in the Indian ceramic and sanitaryware industry. Our journey began with a simple yet profound vision: to provide high-quality, aesthetically pleasing, and durable bathroom fixtures at competitive prices. Located in the heart of India's ceramic hub—Morbi, Gujarat—we leverage generational expertise combined with modern manufacturing techniques to deliver products that meet rigorous global standards. From premium vitreous china to advanced glazing technologies, our commitment to excellence is reflected in every piece we produce.
          </p>
          <p className="mb-4">
            Our expansive product portfolio is a testament to our versatility and dedication to customer satisfaction. We specialize in manufacturing a wide array of sanitaryware, including highly efficient One Piece Toilets, ergonomic Wall Hung Toilets, elegant Pedestal Wash Basins, and chic Table Top Basins. Furthermore, our exclusive Artisan and Designer Collections offer unique, bespoke designs for those looking to add a touch of distinctive luxury to their spaces. Each collection is thoughtfully curated to cater to diverse tastes, ensuring that Axpert Cera has the perfect fit for both contemporary and traditional bathroom interiors.
          </p>
          <p className="mb-0">
            At Axpert Cera, we believe that our success is intertwined with the success of our partners and the satisfaction of our end-users. We actively collaborate with a robust network of dealers, distributors, architects, and interior designers across major metropolitan areas such as Mumbai, Delhi, Bangalore, Pune, and Hyderabad. Our holistic approach to business encompasses not only manufacturing superior products but also ensuring reliable logistics, transparent communication, and unwavering post-sales support. We invite you to experience the Axpert Cera difference—where every drop of water meets unparalleled ceramic artistry.
          </p>
        </>
      );
      break;
    case 'catalog':
      content = (
        <>
          <h2 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Download the Comprehensive Axpert Cera Product Catalog</h2>
          <p className="mb-4">
            Access the complete range of Axpert Cera's premium sanitaryware by downloading our high-resolution product catalog. Our meticulously compiled catalog serves as an essential resource for dealers, architects, interior designers, and homeowners seeking top-tier bathroom solutions. Inside, you will find detailed technical specifications, dimensional drawings, and vibrant, high-definition imagery for our entire product lineup. Whether you are specifying fixtures for a large-scale commercial project or selecting the perfect wash basin for a residential renovation, our catalog provides all the necessary information to make an informed decision.
          </p>
          <p className="mb-4">
            The Axpert Cera catalog covers our extensive selection of over 125 ceramic masterpieces. Explore our flagship categories, including our highly acclaimed One Piece Toilets that offer seamless design and easy maintenance, and our Wall Hung Toilets that maximize floor space while providing a sleek, modern look. Dive into our diverse wash basin collections, featuring elegant Pedestal Basins, contemporary Table Top Basins, and space-saving Wall Mount options. Additionally, the catalog highlights our exclusive Designer Collections, showcasing intricate patterns, unique finishes, and luxurious aesthetics designed to become the focal point of any high-end bathroom.
          </p>
          <p className="mb-0">
            We understand the importance of immediate access to product information in today's fast-paced construction and design industries. Therefore, our catalog is available for instant digital download, perfectly optimized for viewing on both desktop and mobile devices. For our network of dealers and distributors in cities like Mumbai, Delhi, Bangalore, Ahmedabad, and Chennai, the catalog also includes essential details regarding packaging, shipping, and bulk ordering processes. If you require physical copies of our catalog or have specific inquiries regarding custom orders and pricing lists, please do not hesitate to contact our dedicated sales team via WhatsApp or email.
          </p>
        </>
      );
      break;
    case 'products':
      content = (
        <>
          <h2 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Explore Our Premium Ceramic Sanitaryware Collections</h2>
          <p className="mb-4">
            Discover the pinnacle of bathroom luxury with Axpert Cera's comprehensive products hub. As a leading manufacturer based in Morbi, Gujarat, we take immense pride in offering a diverse and expansive portfolio of premium ceramic sanitaryware. Our product range is thoughtfully engineered to meet the highest standards of hygiene, durability, and water efficiency, while simultaneously pushing the boundaries of contemporary design. From residential homes to luxury hotels and commercial complexes, our sanitaryware solutions are trusted by professionals and homeowners across India for their uncompromising quality and flawless finish.
          </p>
          <p className="mb-4">
            Navigate through our expertly categorized collections to find the perfect fixtures for your specific requirements. Our renowned One Piece Toilet range offers an integrated, sleek design that eliminates hidden crevices, making cleaning effortless and ensuring superior hygiene. For a minimalist and spacious aesthetic, our Wall Hung Toilets provide a floating effect, supported by robust concealed cisterns. Complement your toilet selection with our stunning array of wash basins. Choose from classic Pedestal Wash Basins, elegant Table Top Basins that sit beautifully on vanity counters, or practical Wall Mount Basins ideal for compact spaces.
          </p>
          <p className="mb-0">
            Beyond our classic series, Axpert Cera invites you to explore our Signature Artisan Pieces—a curated selection of designer sanitaryware that serves as true functional art. These exclusive pieces feature unique glazes, sophisticated metallic accents like our Vitrosa Stargold series, and avant-garde shapes that elevate any bathroom into a luxurious retreat. We are committed to maintaining a robust supply chain, ensuring that our entire product line is readily available to our valued dealers and customers in Surat, Rajkot, Ahmedabad, Mumbai, Pune, Delhi, Bangalore, and all other major regions across India.
          </p>
        </>
      );
      break;
    case 'category':
      content = (
        <>
          <h2 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Premium {dynamicName} Solutions by Axpert Cera</h2>
          <p className="mb-4">
            Enhance your bathroom interiors with Axpert Cera's premium range of {dynamicName}. As an ISO-certified sanitaryware manufacturer, we ensure that every product in our {dynamicName} collection is crafted using high-grade vitreous china, guaranteeing exceptional strength, low water absorption, and a pristine, long-lasting glaze. Our {dynamicName} series is designed with a perfect balance of ergonomic comfort and contemporary aesthetics, making it an ideal choice for modern homes, luxury apartments, and premium commercial spaces. The smooth, non-porous surface not only provides a brilliant shine but also resists stains and facilitates effortless cleaning, ensuring optimal hygiene at all times.
          </p>
          <p className="mb-4">
            Our engineering team at Axpert Cera has meticulously designed the {dynamicName} collection to incorporate the latest advancements in sanitaryware technology. Whether it's optimizing water flow for efficient flushing or designing space-saving profiles without compromising on usability, our focus remains on delivering superior performance. The {dynamicName} collection undergoes rigorous quality control checks at our advanced manufacturing facility in Morbi, Gujarat, ensuring that each piece meets stringent international standards before it reaches your doorstep. Available in various sizes and sleek designs, this collection offers unparalleled versatility to suit diverse architectural requirements.
          </p>
          <p className="mb-0">
            Axpert Cera is proud to be a trusted supplier of the {dynamicName} series across India. We boast a strong distribution network that guarantees timely delivery and robust after-sales support in major metropolitan areas, including {dynamicCity || 'Mumbai, Delhi, and Bangalore'}, as well as regional hubs like Ahmedabad, Surat, and Rajkot. We work closely with our network of authorized dealers, providing them with comprehensive technical specifications and competitive pricing. Whether you are undertaking a single bathroom renovation or managing a large-scale construction project, our {dynamicName} collection offers the perfect blend of luxury, reliability, and value.
          </p>
        </>
      );
      break;
    case 'designer':
      content = (
        <>
          <h2 className="text-[20px] font-serif text-[#1A1A1A] mb-4">Luxury {dynamicName} - The Artisan Collection</h2>
          <p className="mb-4">
            Step into the realm of bespoke luxury with the {dynamicName} from Axpert Cera's exclusive Artisan Collection. This signature series represents the pinnacle of ceramic craftsmanship, where everyday bathroom fixtures are transformed into extraordinary pieces of functional art. The {dynamicName} is meticulously handcrafted by our master artisans in Morbi, utilizing advanced glazing techniques and premium raw materials to achieve unique textures, vibrant colors, and stunning visual effects. Designed for those who refuse to compromise on aesthetics, this collection adds a distinct touch of sophistication and grandeur to high-end residential and commercial interiors.
          </p>
          <p className="mb-4">
            The {dynamicName} is more than just a visual masterpiece; it is built on Axpert Cera's foundation of uncompromising quality and durability. Despite its delicate and intricate appearance, the underlying vitreous china core provides exceptional robustness, ensuring resistance to scratches, fading, and daily wear. The specialized artisan glaze is highly resilient and easy to maintain, preserving the collection's luxurious sheen for years to come. Whether you are aiming for a minimalist contemporary look or a lavish, opulent ambiance, the {dynamicName} offers unparalleled design flexibility, allowing architects and interior designers to bring their most ambitious visions to life.
          </p>
          <p className="mb-0">
            As a premier sanitaryware manufacturer, Axpert Cera is dedicated to making the exclusive {dynamicName} accessible to discerning clients across India. We have established dedicated supply channels to serve luxury markets in key cities such as {dynamicCity || 'Mumbai, Pune, Bangalore, and Hyderabad'}, alongside our strong presence in Gujarat's metropolitan centers. We offer personalized consultation and support for bulk orders, ensuring that premium projects receive the attention and reliable delivery they demand. Elevate your next design project with the breathtaking elegance and superior engineering of the {dynamicName}.
          </p>
        </>
      );
      break;
  }

  return (
    <section className="bg-white py-12 md:py-16 border-t border-[#EBEBEB]">
      <div className="max-w-[1280px] mx-auto px-5 md:px-10">
        <div className="prose max-w-none text-[14px] text-[#666] leading-relaxed font-sans text-justify md:text-left">
          {content}
        </div>
      </div>
    </section>
  );
}
