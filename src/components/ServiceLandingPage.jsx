import { Link, useParams } from "react-router-dom";
import SeoHead from "./SeoHead";
import { servicePages } from "../data/servicePages";
import { locations } from "../data/locations";

const SITE_URL = "https://arvextech.in";

function toTitleCase(input) {
  if (!input) return "";
  return input
    .split(" ")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : w))
    .join(" ");
}

export default function ServiceLandingPage() {
  const { serviceId, cityId } = useParams();
  
  // Find data based on URL parameters
  const service = servicePages.find((item) => item.slug === serviceId);
  const city = cityId ? locations.find((item) => item.id === cityId) : null;

  if (!service) return null;

  const serviceLabel = toTitleCase(service.keyword);

  // SEO: Dynamic Titles
  const title = city
    ? `${serviceLabel} in ${city.city} | Arvex Technologies`
    : service.title;

  // SEO: CTA-driven Meta Description
  const description = city
    ? `Looking for ${serviceLabel} in ${city.city}? Arvex Technologies provides top-rated web and AI solutions in ${city.region}. Get your free quote today!`
    : service.metaDescription;

  // SEO: Self-referencing Canonical (CRITICAL FIX)
  const currentPath = city
    ? `/services/${service.slug}/${city.id}`
    : `/services/${service.slug}`;
  
  // This tells Google each page is unique and should be indexed separately
  const canonicalPath = currentPath;

  // Internal Linking: Show more cities for better crawlability
  const serviceAreas = locations
    .filter((item) => item.priorityServices.includes(service.slug))
    .slice(0, 12); // Increased to 12 for better SEO link juice

  // JSON-LD FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `How long does ${service.keyword} take in ${city ? city.city : 'my area'}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most projects launch in 2-6 weeks depending on the complexity and client feedback cycles.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer local support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes, Arvex Technologies provides dedicated support for ${serviceLabel} to businesses ${city ? `in ${city.city}` : 'globally'}.`,
        },
      },
    ],
  };

  // JSON-LD Local Business Schema
  const localBusinessSchema = city
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `Arvex Technologies - ${city.city}`,
        url: `${SITE_URL}${currentPath}`,
        telephone: "+91 8520003931",
        address: {
          "@type": "PostalAddress",
          addressLocality: city.city,
          addressRegion: city.region,
          addressCountry: city.country,
        },
      }
    : null;

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        path={currentPath}
        canonicalPath={canonicalPath}
        schema={localBusinessSchema ? [faqSchema, localBusinessSchema] : [faqSchema]}
      />

      <main className="pt-28 pb-20 bg-slate-50">
        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Expert {service.keyword}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {city ? `${serviceLabel} in ${city.city}` : service.h1}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-4xl">
            Arvex Technologies delivers conversion-driven {service.keyword}
            {city ? ` specifically for businesses in ${city.city}, ${city.region}` : ""}. 
            We combine high-end design with AI automation to scale your brand.
          </p>
          <div className="mt-8">
            <a 
              href="mailto:contact@arvextech.in" 
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Get a Free Quote
            </a>
          </div>
        </section>

        {/* SERVICE AREAS / INTERNAL LINKS */}
        <section className="max-w-6xl mx-auto px-6 mt-20">
          <hr className="border-slate-200 mb-12" />
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Other Areas We Serve for {serviceLabel}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((item) => (
              <Link
                key={item.id}
                to={`/services/${service.slug}/${item.id}`}
                className="bg-white border border-slate-200 rounded-lg p-3 hover:shadow-md transition text-center"
              >
                <p className="text-sm font-medium text-slate-700">{city ? '' : 'Our '} {item.city} Office</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
