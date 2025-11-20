import AboutUs from "@/components/AboutUs";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Explore from "@/components/Explore";
import InsightsSlider from "@/components/InsightsSlider";
import Services from "@/components/Services";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Banner />
      <AboutUs />
      <div className="bg-[#F2F2F2]">
        <Services />
      </div>
      <Explore />
      <div className="bg-[#F2F2F2]">
        <InsightsSlider />
      </div>
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-6 items-center justify-center px-8 md:px-16 py-20">
        <h3 className="text-2xl font-bold">PARTNERS CONTRIBUTING WITH US</h3>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-evenly w-full">
          <Link
            href="https://www.jaydsolutions.com/"
            target="_blank"
            className="w-60 h-20 flex items-center justify-center group hover:bg-[#fffffa] hover:shadow rounded-lg transition-all duration-300"
          >
            <p className="transition-all duration-300 text-gray-400 group-hover:text-yellow-400 font-extrabold uppercase text-2xl">
              JAYD Solutions
            </p>
          </Link>
        </div>
      </div>
      <Contact />
    </div>
  );
}
