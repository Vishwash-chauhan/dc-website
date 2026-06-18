import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import Occasions from "@/components/Occasions";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAF6F0]">
      {/* Hero Section */}
      <section className="relative flex items-center min-h-screen bg-[#FAF6F0] overflow-hidden">

        {/* Right Side: High-Fidelity Faded Buffet Backdrop */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-7/12 h-full z-0 pointer-events-none">
          <Image
            src="/hero-buffet.png"
            alt="Luxury Indian Catering Buffet Backdrop"
            fill
            priority
            className="object-cover object-right-bottom"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {/* Soft responsive overlay gradients to blend the image into the background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/90 via-[#FAF6F0]/50 to-[#FAF6F0] lg:bg-none pointer-events-none" />
          <div className="absolute inset-0 lg:block hidden bg-gradient-to-r from-[#FAF6F0] via-[#FAF6F0]/10 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-32 md:pt-20 md:pb-24 lg:pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Side: Copy and Action Buttons */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">

              {/* Main Headline */}
              <h1 className="font-serif text-4xl md:text-[50px] lg:text-[58px] font-semibold text-[#74290F] leading-[1.2] tracking-wide">
                Home-Style Catering <br />
                For Life’s Most <br />
                Meaningful Gatherings
              </h1>

              {/* Decorative Leaf Swirl Divider */}
              <div className="flex items-center gap-4 my-5 w-full max-w-[280px]">
                <div className="h-[1px] flex-1 bg-[#c5a880]/30" />
                <svg className="w-6 h-4 text-[#c5a880]/80 fill-current" viewBox="0 0 24 12">
                  <path d="M12 10.5c-.3 0-.5-.1-.7-.3-1.2-1.2-2.5-1.8-3.8-1.8-1.5 0-3 1-3.2 1.1-.4.3-.9.2-1.2-.2s-.2-.9.2-1.2c.4-.3 2.3-1.7 4.2-1.7 1.7 0 3.3.7 4.8 2.2.4.4.4 1 0 1.4-.2.2-.5.3-.3.3zm5.7-3.6c-1.3 0-2.6.6-3.8 1.8-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0 1.5-1.5 3.1-2.2 4.8-2.2 1.9 0 3.8 1.4 4.2 1.7.4.3.9.2 1.2-.2.3-.4.2-.9-.2-1.2-.2-.1-1.7-1.1-3.2-1.1-1.3 0-2.6-.3-4.4-.3z" />
                </svg>
                <div className="h-[1px] flex-1 bg-[#c5a880]/30" />
              </div>

              {/* Paragraph / Subtitle */}
              <p className="font-sans text-[17px] text-[#292927] font-light leading-relaxed max-w-xl mb-10">
                Comforting, freshly prepared food for poojas, baby celebrations,
                family functions, prayer meetings and intimate gatherings across Delhi NCR.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center">
                <a
                  href="#quote"
                  className="px-8 py-4 bg-[#74290F] hover:bg-[#61220C] text-white font-sans text-sm font-semibold tracking-wider text-center rounded-md shadow-md transition-all duration-300 w-full sm:w-auto"
                >
                  Get a Custom Quote
                </a>
                <a
                  href="#menus"
                  className="px-8 py-4 bg-transparent hover:bg-[#74290F]/5 text-[#74290F] border border-[#74290F] font-sans text-sm font-semibold tracking-wider text-center rounded-md transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  View Sample Menus
                  <svg className="w-4.5 h-4.5 text-[#74290F] stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Occasions Section */}
      <Occasions />

      {/* Experience Section */}
      <Experience />
    </div>
  );
}
