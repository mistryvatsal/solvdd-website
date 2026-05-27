import Head from 'next/head';
import Nav from '@components/Nav';
import Hero from '@components/Hero';
import Diagram from '@components/Diagram';
import Manifesto from '@components/Manifesto';
import Capabilities from '@components/Capabilities';
import FamiliarWith from '@components/FamiliarWith';
import Contact from '@components/Contact';
import SolvddFooter from '@components/SolvddFooter';

export default function Home() {
  return (
    <>
      <Head>
        <title>Solvdd — Engineering systems that scale.</title>
        <meta name="description" content="Solvdd is an engineering-first technology partner. Backend, data pipelines, infrastructure and AI systems for businesses where reliability is the product." />
        <meta property="og:title" content="Solvdd — Engineering systems that scale." />
        <meta property="og:description" content="Solvdd is an engineering-first technology partner. Backend, data pipelines, infrastructure and AI systems for businesses where reliability is the product." />
        <meta property="og:url" content="https://solvdd.com" />
        <meta name="twitter:title" content="Solvdd — Engineering systems that scale." />
        <meta name="twitter:description" content="Engineering-first technology partner. Backend, data, infrastructure and AI systems." />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Solvdd",
            "legalName": "Solvdd Technology Solutions",
            "url": "https://solvdd.com",
            "email": "contact@solvdd.com",
            "description": "Engineering-first technology partner. Backend, data pipelines, infrastructure and AI systems for businesses where reliability is the product.",
            "foundingDate": "2023",
            "areaServed": "Worldwide",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "IN"
            },
            "sameAs": []
          })}}
        />
      </Head>

      <Nav />
      <main>
        <Hero />
        <Diagram />
        <Manifesto />
        <Capabilities />
        <FamiliarWith />
        <Contact />
      </main>
      <SolvddFooter />
    </>
  );
}
