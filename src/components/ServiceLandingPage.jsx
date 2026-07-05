import { Link, useParams } from "react-router-dom";
import SeoHead from "./SeoHead";
import { servicePages } from "../data/servicePages";
import { locations } from "../data/locations";

const SITE_URL = "https://arvextech.in";
const SITE_NAME = "Arvex Technologies";

// Fill these in once — used across every service/city page for E-E-A-T signals.
const FOUNDER = {
  name: "Anvesh kumar", // add last name
  role: "Founder and CEO , Arvex Technologies",
  bio: "Anvesh alias Satya Anvesh Kumar founded Arvex Technologies in Vijayawada after building hands-on experience with AI voice agents, full-stack development (Next.js), and AI automation frameworks like LangChain and CrewAI. Arvex was started to bring the same enterprise-grade software, ERP systems, and AI automation available to large companies to growing businesses across Andhra Pradesh.",
  image: `${SITE_URL}/founder-anvesh.jpg`,
  linkedin: "www.linkedin.com/in/anvesh-kumar-18917938a",
};

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

  // SEO: Dynamic, keyword-forward titles (location first for local intent)
  const title = city
    ? `${serviceLabel} in ${city.city}, ${city.region} | Arvex Technologies`
    : service.title;

  // SEO: Unique, benefit-led meta description per page (avoids thin/duplicate content)
  const description = city
    ? `Need ${serviceLabel} in ${city.city}? Arvex Technologies builds and supports ${service.keyword} for businesses across ${city.region}, backed by real local support. Get a free quote today.`
    : service.metaDescription;

  const currentPath = city
    ? `/services/${service.slug}/${city.id}`
    : `/services/${service.slug}`;

  // Internal Linking: nearby service areas for crawlability
  const serviceAreas = locations
    .filter((item) => item.priorityServices.includes(service.slug))
    .filter((item) => item.id !== cityId)
    .slice(0, 12);

  // Visible FAQ content — must match the FAQ schema below word-for-word,
  // or Google can ignore/penalize the rich-result eligibility.
  const faqs = [
    {
      question: `How long does ${service.keyword} take${city ? ` in ${city.city}` : ""}?`,
      answer:
        "Most projects launch in 2–6 weeks depending on scope, integrations required, and how quickly feedback rounds are turned around.",
    },
    {
      question: "Do you provide support after launch?",
      answer: `Yes. Arvex Technologies provides ongoing local support for ${serviceLabel}${
        city ? ` to businesses in ${city.city}` : ""
      }, including updates, monitoring, and issue resolution.`,
    },
    {
      question: "What does it cost?",
      answer:
        "Pricing depends on the scope and features required. Share your requirements for a free, no-obligation quote tailored to your business.",
    },
  ];

  // JSON-LD: FAQ (matches visible FAQ section above)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  // JSON-LD: Service (what is being offered)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: serviceLabel,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+91 8520003931",
      founder: {
        "@type": "Person",
        name: FOUNDER.name,
        jobTitle: "Co-Founder",
      },
    },
    areaServed: city
      ? { "@type": "City", name: city.city, containedInPlace: city.region }
      : { "@type": "Country", name: "India" },
    description,
  };

  // JSON-LD: LocalBusiness (only meaningful once a real city is present)
  const localBusinessSchema = city
    ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${SITE_NAME} - ${city.city}`,
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

  // JSON-LD: Breadcrumbs — helps Google understand site hierarchy
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: serviceLabel, path: `/services/${service.slug}` },
  ];
  if (city) breadcrumbItems.push({ name: city.city, path: currentPath });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };

  const schemaBlocks = [
    serviceSchema,
    faqSchema,
    breadcrumbSchema,
    ...(localBusinessSchema ? [localBusinessSchema] : []),
  ];

  return (
    <>
      <SeoHead
        title={title}
        description={description}
        path={currentPath}
        canonicalPath={currentPath}
        keywords={[
          service.keyword,
          city ? `${service.keyword} ${city.city}` : `${service.keyword} Vijayawada`,
          `${service.keyword} company`,
        ]}
        schema={schemaBlocks}
      />

      <main className="pt-28 pb-20 bg-slate-50">

        {/* BREADCRUMBS */}
        <nav aria-label="Breadcrumb" className="max-w-6xl mx-auto px-6 mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            {breadcrumbItems.map((item, index) => (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && <span className="text-slate-300">/</span>}
                {index === breadcrumbItems.length - 1 ? (
                  <span className="text-slate-700 font-medium">{item.name}</span>
                ) : (
                  <Link to={item.path} className="hover:text-indigo-600 transition">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* HERO SECTION */}
        <section className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider mb-3">
            Expert {service.keyword}
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            {city ? `${serviceLabel} in ${city.city}` : service.h1}
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-4xl">
            Arvex Technologies delivers {service.keyword}
            {city ? ` built specifically for businesses in ${city.city}, ${city.region}` : ""}.
            We combine reliable engineering with AI automation to help your business
            run smoother and grow faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:contact@arvextech.in"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
            >
              Get a Free Quote
            </a>
            <a
              href="tel:+918520003931"
              className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-bold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition"
            >
              Call +91 85200 03931
            </a>
          </div>
        </section>

        {/* FOUNDER / TRUST SECTION — real people behind the business (E-E-A-T) */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <img
              src={FOUNDER.image}
              alt={`${FOUNDER.name}, ${FOUNDER.role}`}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border border-slate-200 shrink-0"
            />
            <div>
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">
                Who's behind Arvex
              </p>
              <h2 className="text-lg font-bold text-slate-900">
                {FOUNDER.name} — {FOUNDER.role}
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed max-w-3xl">
                {FOUNDER.bio}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION — visible content must match FAQ schema above */}
        <section className="max-w-6xl mx-auto px-6 mt-16">
          <h2 className="text-2xl font-bold mb-6 text-slate-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-slate-200 bg-white p-5"
              >
                <h3 className="font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICE AREAS / INTERNAL LINKS */}
        {serviceAreas.length > 0 && (
          <section className="max-w-6xl mx-auto px-6 mt-16">
            <hr className="border-slate-200 mb-12" />
            <h2 className="text-2xl font-bold mb-6 text-slate-800">
              {serviceLabel} in Other Cities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {serviceAreas.map((item) => (
                <Link
                  key={item.id}
                  to={`/services/${service.slug}/${item.id}`}
                  className="bg-white border border-slate-200 rounded-lg p-3 hover:shadow-md transition text-center"
                >
                  <p className="text-sm font-medium text-slate-700">
                    {serviceLabel} in {item.city}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
    </>
  );
}