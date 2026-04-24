import { Helmet } from "react-helmet-async";

const SITE_URL = "https://arvextech.in";

export default function SeoHead({ title, description, path, canonicalPath, schema = [] }) {
  const fullPath = canonicalPath || path;
  const canonical = `${SITE_URL}${fullPath}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta property="og:type" content="website" />
      {schema.map((entry, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(entry)}
        </script>
      ))}
    </Helmet>
  );
}
