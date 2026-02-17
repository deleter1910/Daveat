import { Helmet } from "react-helmet-async";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.daveat.ch/#business",
    name: "Daveat",
    description:
      "Nachhaltige Ernährungsbegleitung für Berufstätige in der Schweiz. Keine Diät, sondern ein System, das mit deinem Leben funktioniert.",
    url: "https://www.daveat.ch",
    logo: "https://www.daveat.ch/favicon.png",
    email: "hello@daveat.ch",
    priceRange: "CHF 150-250",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CH",
      addressLocality: "Schweiz",
    },
    areaServed: {
      "@type": "Country",
      name: "Switzerland",
    },
    sameAs: ["https://www.instagram.com/daveat.ch/"],
    founder: {
      "@type": "Person",
      name: "Davide",
      jobTitle: "Ernährungsberater & Coach",
      url: "https://www.daveat.ch/about",
    },
    makesOffer: [
      {
        "@type": "Offer",
        name: "Kostenloses Strategie-Gespräch",
        description:
          "30-minütiges Erstgespräch zur Prüfung, ob die Daveat-Methode zu dir passt.",
        price: "0",
        priceCurrency: "CHF",
      },
      {
        "@type": "Offer",
        name: "Alltags-Blueprint Workshop",
        description:
          "90-minütiger 1:1 Workshop zur Erstellung deines persönlichen Ernährungs-Fahrplans.",
        price: "250",
        priceCurrency: "CHF",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "2",
      bestRating: "5",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Alessandro D." },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Mit kleinen aber wichtigen Tipps konnte ich in 16 Monaten 50kg verlieren. Die motivierende Beratung und Begleitung half und hilft mir sehr.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Francesca" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody:
          "Nachdem ich den Kampf gegen mein Gewicht aufgegeben hatte, habe ich dank Daveat neue Motivation gefunden. Mit seiner Unterstützung habe ich 17 Kilo verloren.",
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Daveat",
    url: "https://www.daveat.ch",
    description:
      "Nachhaltige Ernährungsbegleitung für Berufstätige in der Schweiz.",
    inLanguage: "de-CH",
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
