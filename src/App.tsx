import React from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChoose } from "./components/WhyChoose";
import { Statistics } from "./components/Statistics";
import { Leadership } from "./components/Leadership";
import { Industries } from "./components/Industries";
import { Process } from "./components/Process";
import { Insights } from "./components/Insights";
import { FAQ } from "./components/FAQ";
import { ConsultationCTA } from "./components/ConsultationCTA";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ServiceTemplate } from "./pages/ServiceTemplate";
import { InsightsListing } from "./pages/InsightsListing";
import { BlogDetail } from "./pages/BlogDetail";
import { LegalTemplate } from "./pages/LegalTemplate";
import { NotFound } from "./pages/NotFound";
import { IndustryTemplate } from "./pages/IndustryTemplate";

const ServiceDetailWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <ServiceTemplate serviceSlug={slug || ""} />;
};

const IndustryDetailWrapper: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <IndustryTemplate industrySlug={slug || ""} />;
};

const Homepage: React.FC = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "";

  React.useEffect(() => {
    const prevTitle = document.title;
    document.title = "Chartered Accountant in Mira Road | CA Firm in Mira Bhayandar | Bhansali Associates";

    const descMeta = document.querySelector('meta[name="description"]');
    const prevDesc = descMeta?.getAttribute("content") || "";
    const homeDesc = "Bhansali Associates is a premium CA Firm and GST Consultant in Mira Road, Bhayandar & Mumbai. Direct partner-led Statutory Audit, Direct Tax Planning & Business Advisory.";
    if (descMeta) {
      descMeta.setAttribute("content", homeDesc);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    const prevCanonical = canonicalLink?.getAttribute("href") || "";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", window.location.origin + "/");
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", "Chartered Accountant in Mira Road | CA Firm in Mira Bhayandar | Bhansali Associates");
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", homeDesc);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", window.location.origin + "/");

    return () => {
      document.title = prevTitle;
      if (descMeta) descMeta.setAttribute("content", prevDesc);
      if (canonicalLink) canonicalLink.setAttribute("href", prevCanonical);
    };
  }, []);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    "name": "Bhansali Associates",
    "url": origin,
    "logo": `${origin}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-8369123198",
      "contactType": "customer service",
      "email": "bhansaliassociates99@gmail.com"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${origin}/#localbusiness`,
    "name": "Bhansali Associates",
    "image": `${origin}/logo.png`,
    "url": origin,
    "telephone": "+91-8369123198",
    "email": "bhansaliassociates99@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "I 602, Ratna Heights CHSL, Planateria Complex, Near Maheshwari Bhavan, Bhayandar West",
      "addressLocality": "Thane, Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "401101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.290009785651783,
      "longitude": 72.85030021965089
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61590636067736",
      "https://www.instagram.com/bhansaliassociates99?igsh=aG9iZXgwbDFtYmw4"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Hero />
      <Services />
      <WhyChoose />
      <Statistics />
      <Leadership />
      <Industries />
      <Process />
      <Insights />
      <FAQ />
      <ConsultationCTA />
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/insights" element={<InsightsListing />} />
          <Route path="/insights/:slug" element={<BlogDetail />} />
          <Route path="/services/:slug" element={<ServiceDetailWrapper />} />
          <Route path="/industries/:slug" element={<IndustryDetailWrapper />} />
          <Route path="/privacy-policy" element={<LegalTemplate type="privacy" />} />
          <Route path="/terms-and-conditions" element={<LegalTemplate type="terms" />} />
          <Route path="/disclaimer" element={<LegalTemplate type="disclaimer" />} />
          <Route path="/cookie-policy" element={<LegalTemplate type="cookie" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
