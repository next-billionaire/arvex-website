import { Helmet } from "react-helmet-async";

const SITE_URL = "https://arvextech.in";
const SITE_NAME = "Arvex Technologies";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;

const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  image: DEFAULT_OG_IMAGE,
  telephone: "+91 8520003931",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vijayawada",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  areaServed: ["Vijayawada", "Andhra Pradesh", "India"],
  founder: {
    "@type": "Person",
    name: "Anvesh",
    jobTitle: "Founder",
  },
};

export default function SeoHead({
  title,
  description,
  path,
  canonicalPath,
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  schema = [],
}) {
  const fullPath = canonicalPath || path;
  const canonical = `${SITE_URL}${fullPath}`;

  // Fall back to a baseline entity schema if the page doesn't pass its own
  const schemaBlocks = schema.length > 0 ? schema : [defaultSchema];

  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />

      {/* Local / geo signals */}
      <meta name="geo.region" content="IN-AP" />
      <meta name="geo.placename" content="Vijayawada" />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured data */}
      {schemaBlocks.map((entry, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}