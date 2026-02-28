import { useEffect } from "react";

export default function WebsiteDevelopmentVijayawada() {

  useEffect(() => {

    /* FAQ Schema */
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does website development cost in Vijayawada?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Website development cost depends on features, design complexity and functionality required. Business websites are more affordable while ecommerce and custom websites require advanced development."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard business website usually takes 1 to 3 weeks depending on requirements and revisions."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide SEO with website development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. All our websites are built with SEO-friendly structure, fast loading speed and optimized performance."
          }
        }
      ]
    };

    /* Local Business Schema */
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Arvex Technologies",
      "image": "https://arvextech.in/og.png",
      "@id": "https://arvextech.in/",
      "url": "https://arvextech.in/",
      "telephone": "+918520003931",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vijayawada",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      },
      "areaServed": "Vijayawada",
      "description": "Website development company in Vijayawada providing business websites, ecommerce development and digital solutions."
    };

    const faqScript = document.createElement("script");
    faqScript.type = "application/ld+json";
    faqScript.innerHTML = JSON.stringify(faqSchema);

    const businessScript = document.createElement("script");
    businessScript.type = "application/ld+json";
    businessScript.innerHTML = JSON.stringify(localBusinessSchema);

    document.head.appendChild(faqScript);
    document.head.appendChild(businessScript);

    return () => {
      document.head.removeChild(faqScript);
      document.head.removeChild(businessScript);
    };

  }, []);

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Website Development Company in Vijayawada
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Arvex Technologies is a professional website development company in Vijayawada offering
            business website design, ecommerce website development, landing pages and custom web solutions.
            If you are searching for the best website developer in Vijayawada or affordable web design
            services in Andhra Pradesh, we deliver high-performance digital solutions tailored to your goals.
          </p>

          <a
            href="/#contact"
            className="inline-block mt-8 bg-primary text-white px-8 py-3 rounded-xl transition-all duration-300 ease-premium hover:scale-105 hover:-translate-y-1 hover:shadow-2xl"
          >
            Get Free Consultation →
          </a>

        </div>
      </section>

      {/* CONTENT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Professional Website Developer in Vijayawada
            </h2>
            <p className="text-gray-700 leading-relaxed">
              As a trusted web development company in Vijayawada, we build responsive,
              SEO-optimized and fast-loading websites that convert visitors into customers.
              Our website design services include business websites, ecommerce stores,
              landing pages and complete digital presence solutions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Website Development Services We Offer
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li>✔️ Business Website Development</li>
              <li>✔️ Ecommerce Website Development Vijayawada</li>
              <li>✔️ Custom Website Design</li>
              <li>✔️ Landing Page Development</li>
              <li>✔️ Website Redesign Services</li>
              <li>✔️ SEO-Friendly Website Structure</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Affordable Web Design Company in Andhra Pradesh
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We provide affordable website development services in Vijayawada without
              compromising quality. Whether you are a startup, retail store,
              service provider or growing enterprise, our solutions help you build
              credibility and expand your online reach.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Serving Vijayawada & Nearby Areas
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We work with businesses across Vijayawada including Benz Circle,
              Governorpet, Gannavaram and surrounding regions in Andhra Pradesh.
              If you are searching for a website developer near me in Vijayawada,
              Arvex Technologies is ready to help.
            </p>
          </div>

          {/* FAQ SECTION */}
          <div className="pt-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6 text-gray-700">

              <div>
                <h3 className="font-semibold">
                  How much does website development cost in Vijayawada?
                </h3>
                <p>
                  The cost depends on design, features and functionality.
                  Business websites are affordable while ecommerce and custom
                  development require advanced features.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  How long does it take to develop a website?
                </h3>
                <p>
                  A standard business website typically takes 1 to 3 weeks
                  depending on requirements and revisions.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Do you offer SEO services with website development?
                </h3>
                <p>
                  Yes. Our websites are built with SEO-ready structure,
                  optimized performance and mobile-friendly design.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}