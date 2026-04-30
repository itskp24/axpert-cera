/**
 * seoKeywords.ts
 * Programmatic SEO keyword generator for Axpert Cera.
 * All pages should import from here — never write manual keyword lists.
 */

// ─────────────────────────────────────────────────────────────────────────────
// CORE DATA SETS
// ─────────────────────────────────────────────────────────────────────────────

export const BRAND_KEYWORDS = [
  'Axpert Cera',
  'Axpert Ceramic',
  'Axpert Cera Morbi',
  'Axpert Cera Gujarat',
  'Axpert Cera India',
  'axpertcera.com',
  'Axpert Ceramic products',
  'expert cera sanitaryware',
  'expert cera',
];

export const CORE_PRODUCTS = [
  'one piece toilet',
  'pedestal wash basin',
  'one piece basin',
  'wall hung toilet',
  'water closet',
  'EWC toilet',
  'table top basin',
  'wall mount wash basin',
  'pan and urinal',
  'wash basin',
  'ceramic toilet',
  'ceramic wash basin',
  'sanitaryware',
  'bathroom fittings',
  'ceramic products',
];

export const DESIGNER_KEYWORD_TERMS = [
  'designer sanitaryware',
  'designer one piece basin',
  'designer table top basin',
  'Vitrosa Stargold Set',
  'Polo Set',
  'Mini Polo Set',
  'Bigsterling Set',
  'Rustic Series',
  'luxury sanitaryware',
  'premium sanitaryware',
];

export const INTENT_MODIFIERS = [
  'best',
  'premium',
  'luxury',
  'top',
  'wholesale',
  'manufacturer',
  'supplier',
  'dealer',
  'distributor',
  'price',
  'factory direct',
  'bulk',
  'exporter',
  'ISO certified',
  'for builders',
  'for hotels',
  'for real estate projects',
];

export const GENERIC_LOCATION_TERMS = [
  'sanitaryware',
  'ceramic products',
  'bathroom fittings',
  'wash basin',
  'one piece toilet',
  'wall hung toilet',
  'water closet',
  'table top basin',
  'pedestal wash basin',
  'wall mount wash basin',
  'pan and urinal',
  'designer sanitaryware',
];

// ─────────────────────────────────────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

export function unique(list: string[]): string[] {
  return [...new Set(list.map((s) => s.trim()).filter(Boolean))];
}

/**
 * Generates 60-100 SEO keywords for a given city + state combination.
 * Covers: product+city, city+product, intent variants, bulk/wholesale, dealer, B2B.
 */
export function buildCityKeywords(city: string, state: string): string[] {
  const keywords: string[] = [];
  const allProducts = [...CORE_PRODUCTS, ...DESIGNER_KEYWORD_TERMS];

  for (const product of allProducts) {
    keywords.push(
      `${product} ${city}`,
      `${city} ${product}`,
      `${product} in ${city}`,
      `best ${product} in ${city}`,
      `${product} manufacturer in ${city}`,
      `${product} supplier ${city}`,
      `wholesale ${product} ${city}`,
      `premium ${product} ${city}`,
      `${product} dealer ${city}`,
      `${product} price ${city}`,
      `${product} distributor ${city}`,
      `bulk ${product} ${city}`,
      `factory direct ${product} ${city}`,
    );
  }

  for (const term of GENERIC_LOCATION_TERMS) {
    keywords.push(
      `${term} ${city}`,
      `${city} ${term}`,
      `${term} ${state}`,
      `${state} ${term}`,
    );
  }

  keywords.push(
    `sanitaryware manufacturer ${city}`,
    `sanitaryware manufacturer in ${city}`,
    `ceramic sanitaryware supplier ${city}`,
    `factory direct sanitaryware ${city}`,
    `bulk sanitaryware ${city}`,
    `ISO certified sanitaryware ${city}`,
    `sanitaryware dealer wanted ${city}`,
    `become sanitaryware dealer ${city}`,
    `sanitaryware distributorship ${city}`,
    `best sanitaryware in ${city}`,
    `best ceramic products in ${city}`,
    `best bathroom fittings in ${city}`,
    `sanitaryware for builders ${city}`,
    `sanitaryware for hotels ${city}`,
    `sanitaryware exporter ${city}`,
    `${state} sanitaryware manufacturer`,
    `sanitaryware manufacturer ${state}`,
    `${state} ceramic products manufacturer`,
    `${state} bathroom fittings supplier`,
  );

  return unique(keywords);
}

/**
 * Builds keywords for a specific product/category across all city+state combos.
 * Use in category/designer dynamic pages.
 */
export function buildProductCityKeywords(
  productName: string,
  cityStatePairs: Array<[string, string]>
): string[] {
  const keywords: string[] = [];
  for (const [city, state] of cityStatePairs) {
    keywords.push(
      `${productName} in ${city}`,
      `${productName} ${city}`,
      `${city} ${productName}`,
      `best ${productName} in ${city}`,
      `${productName} manufacturer in ${city}`,
      `${productName} supplier ${city}`,
      `${productName} price in ${city}`,
      `wholesale ${productName} ${city}`,
      `premium ${productName} ${city}`,
      `${productName} dealer ${city}`,
      `${productName} in ${state}`,
      `${productName} ${state}`,
    );
  }
  return unique(keywords);
}

// ─────────────────────────────────────────────────────────────────────────────
// CITY LISTS BY STATE
// ─────────────────────────────────────────────────────────────────────────────

export const GUJARAT_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Ahmedabad', 'Gujarat'], ['Surat', 'Gujarat'], ['Rajkot', 'Gujarat'],
  ['Vadodara', 'Gujarat'], ['Gandhinagar', 'Gujarat'], ['Bhavnagar', 'Gujarat'],
  ['Jamnagar', 'Gujarat'], ['Junagadh', 'Gujarat'], ['Anand', 'Gujarat'],
  ['Bharuch', 'Gujarat'], ['Mehsana', 'Gujarat'], ['Bhuj', 'Gujarat'],
  ['Gandhidham', 'Gujarat'], ['Navsari', 'Gujarat'], ['Wankaner', 'Gujarat'],
  ['Limbdi', 'Gujarat'], ['Dhrangadhra', 'Gujarat'], ['Halvad', 'Gujarat'],
  ['Ankleshwar', 'Gujarat'], ['Mundra', 'Gujarat'], ['Morbi', 'Gujarat'],
  ['Surendranagar', 'Gujarat'], ['Chotila', 'Gujarat'], ['Porbandar', 'Gujarat'],
  ['Valsad', 'Gujarat'], ['Vapi', 'Gujarat'], ['Gondal', 'Gujarat'],
  ['Patan', 'Gujarat'], ['Godhra', 'Gujarat'], ['Deesa', 'Gujarat'],
  ['Amreli', 'Gujarat'], ['Veraval', 'Gujarat'], ['Jetpur', 'Gujarat'],
];

export const MAHARASHTRA_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Mumbai', 'Maharashtra'], ['Pune', 'Maharashtra'], ['Nagpur', 'Maharashtra'],
  ['Nashik', 'Maharashtra'], ['Aurangabad', 'Maharashtra'], ['Thane', 'Maharashtra'],
  ['Solapur', 'Maharashtra'], ['Kolhapur', 'Maharashtra'], ['Navi Mumbai', 'Maharashtra'],
  ['Ahmednagar', 'Maharashtra'], ['Latur', 'Maharashtra'],
];

export const RAJASTHAN_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Jaipur', 'Rajasthan'], ['Jodhpur', 'Rajasthan'], ['Udaipur', 'Rajasthan'],
  ['Kota', 'Rajasthan'], ['Ajmer', 'Rajasthan'], ['Bikaner', 'Rajasthan'],
  ['Bhilwara', 'Rajasthan'], ['Alwar', 'Rajasthan'], ['Sikar', 'Rajasthan'],
];

export const NORTH_INDIA_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Delhi', 'Delhi'], ['New Delhi', 'Delhi'], ['Noida', 'Uttar Pradesh'],
  ['Gurgaon', 'Haryana'], ['Lucknow', 'Uttar Pradesh'], ['Kanpur', 'Uttar Pradesh'],
  ['Agra', 'Uttar Pradesh'], ['Varanasi', 'Uttar Pradesh'], ['Meerut', 'Uttar Pradesh'],
  ['Allahabad', 'Uttar Pradesh'], ['Chandigarh', 'Chandigarh'],
  ['Ludhiana', 'Punjab'], ['Amritsar', 'Punjab'], ['Jalandhar', 'Punjab'],
  ['Faridabad', 'Haryana'], ['Panipat', 'Haryana'], ['Ambala', 'Haryana'],
  ['Shimla', 'Himachal Pradesh'], ['Dehradun', 'Uttarakhand'], ['Haridwar', 'Uttarakhand'],
  ['Srinagar', 'Jammu and Kashmir'], ['Jammu', 'Jammu and Kashmir'],
];

export const SOUTH_INDIA_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Bangalore', 'Karnataka'], ['Bengaluru', 'Karnataka'], ['Mysore', 'Karnataka'],
  ['Hubli', 'Karnataka'], ['Mangalore', 'Karnataka'],
  ['Hyderabad', 'Telangana'], ['Warangal', 'Telangana'],
  ['Chennai', 'Tamil Nadu'], ['Coimbatore', 'Tamil Nadu'], ['Madurai', 'Tamil Nadu'],
  ['Tiruppur', 'Tamil Nadu'], ['Salem', 'Tamil Nadu'], ['Tiruchirappalli', 'Tamil Nadu'],
  ['Kochi', 'Kerala'], ['Thiruvananthapuram', 'Kerala'], ['Kozhikode', 'Kerala'],
  ['Thrissur', 'Kerala'],
  ['Visakhapatnam', 'Andhra Pradesh'], ['Vijayawada', 'Andhra Pradesh'],
  ['Tirupati', 'Andhra Pradesh'], ['Guntur', 'Andhra Pradesh'], ['Amaravati', 'Andhra Pradesh'],
  ['Panaji', 'Goa'],
];

export const EAST_INDIA_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Kolkata', 'West Bengal'], ['Howrah', 'West Bengal'], ['Durgapur', 'West Bengal'],
  ['Asansol', 'West Bengal'],
  ['Patna', 'Bihar'], ['Gaya', 'Bihar'], ['Muzaffarpur', 'Bihar'],
  ['Bhubaneswar', 'Odisha'], ['Cuttack', 'Odisha'], ['Rourkela', 'Odisha'],
  ['Ranchi', 'Jharkhand'], ['Jamshedpur', 'Jharkhand'], ['Dhanbad', 'Jharkhand'],
];

export const CENTRAL_INDIA_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Bhopal', 'Madhya Pradesh'], ['Indore', 'Madhya Pradesh'], ['Jabalpur', 'Madhya Pradesh'],
  ['Gwalior', 'Madhya Pradesh'], ['Ujjain', 'Madhya Pradesh'],
  ['Raipur', 'Chhattisgarh'], ['Bilaspur', 'Chhattisgarh'], ['Durg', 'Chhattisgarh'],
];

export const WEST_INDIA_CITY_STATE_PAIRS: Array<[string, string]> = [
  ...MAHARASHTRA_CITY_STATE_PAIRS,
  ['Panaji', 'Goa'], ['Margao', 'Goa'],
];

export const NORTHEAST_INDIA_CITY_STATE_PAIRS: Array<[string, string]> = [
  ['Guwahati', 'Assam'], ['Dibrugarh', 'Assam'], ['Silchar', 'Assam'], ['Dispur', 'Assam'],
  ['Shillong', 'Meghalaya'],
  ['Imphal', 'Manipur'],
  ['Aizawl', 'Mizoram'],
  ['Kohima', 'Nagaland'],
  ['Agartala', 'Tripura'],
  ['Gangtok', 'Sikkim'],
  ['Itanagar', 'Arunachal Pradesh'],
];

// All city-state pairs combined for full India coverage
export const ALL_INDIA_CITY_STATE_PAIRS: Array<[string, string]> = unique(
  [
    ...GUJARAT_CITY_STATE_PAIRS,
    ...MAHARASHTRA_CITY_STATE_PAIRS,
    ...RAJASTHAN_CITY_STATE_PAIRS,
    ...NORTH_INDIA_CITY_STATE_PAIRS,
    ...SOUTH_INDIA_CITY_STATE_PAIRS,
    ...EAST_INDIA_CITY_STATE_PAIRS,
    ...CENTRAL_INDIA_CITY_STATE_PAIRS,
    ...NORTHEAST_INDIA_CITY_STATE_PAIRS,
  ].map((pair) => JSON.stringify(pair))
).map((s) => JSON.parse(s) as [string, string]);

// ─────────────────────────────────────────────────────────────────────────────
// PRE-BUILT KEYWORD ARRAYS BY REGION
// ─────────────────────────────────────────────────────────────────────────────

export const GUJARAT_KEYWORDS = unique([
  ...BRAND_KEYWORDS,
  ...GUJARAT_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state)),
]);

export const MAHARASHTRA_KEYWORDS = unique(
  MAHARASHTRA_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state))
);

export const RAJASTHAN_KEYWORDS = unique(
  RAJASTHAN_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state))
);

export const NORTH_INDIA_KEYWORDS = unique(
  NORTH_INDIA_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state))
);

export const SOUTH_INDIA_KEYWORDS = unique(
  SOUTH_INDIA_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state))
);

export const EAST_INDIA_KEYWORDS = unique(
  EAST_INDIA_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state))
);

export const CENTRAL_INDIA_KEYWORDS = unique(
  CENTRAL_INDIA_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state))
);

export const NORTHEAST_INDIA_KEYWORDS = unique(
  NORTHEAST_INDIA_CITY_STATE_PAIRS.flatMap(([city, state]) => buildCityKeywords(city, state))
);

// Full India — used in homepage, about, layout
export const ALL_INDIA_KEYWORDS = unique([
  ...BRAND_KEYWORDS,
  ...GUJARAT_KEYWORDS,
  ...MAHARASHTRA_KEYWORDS,
  ...RAJASTHAN_KEYWORDS,
  ...NORTH_INDIA_KEYWORDS,
  ...SOUTH_INDIA_KEYWORDS,
  ...EAST_INDIA_KEYWORDS,
  ...CENTRAL_INDIA_KEYWORDS,
  ...NORTHEAST_INDIA_KEYWORDS,
]);

// ─────────────────────────────────────────────────────────────────────────────
// PAGE-LEVEL KEYWORD BUILDERS
// ─────────────────────────────────────────────────────────────────────────────

/** Home page — full India coverage + brand + B2B intent */
export const HOME_KEYWORDS = unique([
  ...ALL_INDIA_KEYWORDS,
  'sanitaryware manufacturer India',
  'ISO certified sanitaryware manufacturer',
  'sanitaryware exporter India',
  'sanitaryware for housing projects India',
  'sanitaryware dealer wanted India',
  'become sanitaryware dealer India',
  'bulk sanitaryware supplier India',
  'factory direct sanitaryware India',
  'hotel project sanitaryware supplier India',
  'commercial sanitaryware supplier India',
  'architectural sanitaryware India',
  'best sanitaryware brand India 2026',
]);

/** Products page — product-focused with all cities */
export const PRODUCTS_PAGE_KEYWORDS = unique([
  ...ALL_INDIA_KEYWORDS,
  'buy sanitaryware online India',
  'best one piece toilet India',
  'best pedestal wash basin India',
  'best wall hung toilet India',
  'best water closet India',
  'best table top basin India',
  'premium ceramic sanitaryware India',
  'bulk order sanitaryware India',
  'wholesale bathroom fittings India',
  'ceramic products for builders India',
  'sanitaryware for real estate projects India',
  'commercial wash basin supplier India',
]);

/** About page — company + trust signals + all cities */
export const ABOUT_PAGE_KEYWORDS = unique([
  ...ALL_INDIA_KEYWORDS,
  'about Axpert Cera',
  'Axpert Cera company profile',
  'ISO certified sanitaryware company India',
  'ISO 9001 2015 sanitaryware manufacturer',
  'Gujarat sanitaryware manufacturer',
  'Morbi ceramic manufacturer',
  'sanitaryware company founded 2019',
  'premium sanitaryware brand India',
  'trusted sanitaryware manufacturer India',
  'sanitaryware manufacturer Gujarat India',
]);

/** Catalog page — catalog + download + all cities */
export const CATALOG_PAGE_KEYWORDS = unique([
  ...ALL_INDIA_KEYWORDS,
  'Axpert Cera product catalog',
  'sanitaryware catalog PDF download',
  'sanitaryware catalog 2026',
  'ceramic products catalog India',
  'bathroom fittings catalog PDF',
  'wholesale sanitaryware catalog',
  'dealer price catalog sanitaryware',
  'sanitaryware catalog for builders',
  'sanitaryware catalog for hotels',
  'premium sanitaryware catalog India',
  'export quality sanitaryware catalog',
]);

/** Category dynamic page — call this with the category name */
export function buildCategoryPageKeywords(categoryName: string): string[] {
  return unique([
    ...BRAND_KEYWORDS,
    ...buildProductCityKeywords(categoryName, ALL_INDIA_CITY_STATE_PAIRS),
    `${categoryName} manufacturer India`,
    `${categoryName} supplier India`,
    `wholesale ${categoryName} India`,
    `bulk ${categoryName} India`,
    `premium ${categoryName} India`,
    `ISO certified ${categoryName} India`,
    `best ${categoryName} India`,
    `${categoryName} for hotels`,
    `${categoryName} for builders`,
    `factory direct ${categoryName}`,
    `${categoryName} exporter India`,
  ]);
}

/** Designer dynamic page — call this with the designer collection name */
export function buildDesignerPageKeywords(collectionName: string): string[] {
  return unique([
    ...BRAND_KEYWORDS,
    ...buildProductCityKeywords(collectionName, ALL_INDIA_CITY_STATE_PAIRS),
    `${collectionName} designer sanitaryware`,
    `${collectionName} luxury sanitaryware`,
    `${collectionName} premium collection`,
    `${collectionName} India`,
    `luxury designer sanitaryware India`,
    `premium ceramic designer collection India`,
    `Vitrosa collection India`,
    `exclusive sanitaryware collection India`,
    `designer sanitaryware for hotels`,
    `luxury bathroom fittings India`,
  ]);
}
