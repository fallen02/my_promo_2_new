export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MyPromo",
    url: "https://mypromo.in",
    telephone: "+916294661464",
    email: "mypromofficial@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressRegion: "West Bengal",
      addressCountry: "IN",
    },
    description:
    "Digital Marketing Agency providing SEO, Website Development, Social Media Marketing, Lead Generation and Salesforce Consulting.",
    areaServed: ["Kolkata", "West Bengal", "India"],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}