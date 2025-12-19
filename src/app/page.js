import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import InsightsSlider from "@/components/InsightsSlider";
import Partners from "@/components/Partners";
import Services from "@/components/Services";

export const metadata = {
  title: "AYLUX | Australia - Asia Trade & Logistics",
  description:
    "Australian-headquartered import-export specialists in Medical Goods (TGA compliant) and Fast-Moving Consumer Goods (FMCG). Seamless trade between Australia, Sri Lanka, Malaysia, USA, Canada & South Asia.",
  keywords:
    "medical goods import Australia, FMCG export South Asia, TGA compliance Australia, Australian medical supplier, FMCG trade Australia, import export Australia South Asia, medical devices Australia, consumer goods logistics",
  authors: [{ name: "AYLUX PTY LTD" }],
  publisher: "AYLUX PTY LTD",
  alternates: {
    canonical: "https://www.aylux.com.au",
  },
  openGraph: {
    title:
      "AYLUX - Global Trade Partner | Medical & FMCG Australia - South Asia",
    description:
      "Trusted Australian importer of medical goods & exporter of FMCG to South Asia. Full regulatory compliance • End-to-end logistics • Market entry support.",
    url: "https://www.aylux.com.au",
    siteName: "Aylux",
    images: [
      {
        url: "/images/og-image.jpg", // 1200×630 recommended
        width: 1200,
        height: 630,
        alt: "Aylux - Australian Medical & FMCG Trade Specialists",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYLUX | Medical & FMCG Trade Australia - South Asia",
    description:
      "TGA-compliant medical imports • FMCG export to South Asia • Australian headquartered",
    images: ["/images/home/global.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <div className="bg-[#F2F2F2]">
        <Services />
      </div>
      {/* <Explore /> */}
      <div className="bg-[#F2F2F2]">
        <InsightsSlider />
      </div>
      <Partners />
      <Contact />
    </div>
  );
}
