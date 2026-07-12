"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] pt-32 pb-20 flex flex-col justify-between overflow-x-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-24 right-0 w-96 h-96 rounded-full bg-[#c5a880]/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#74290F]/5 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow space-y-10">
        
        {/* Back Link */}
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-sans font-medium text-[#74290F] hover:text-[#c5a880] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-4">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
            LEGAL INFORMATION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl text-[#74290F] font-semibold tracking-wide">
            Terms & Conditions
          </h1>
          <div className="h-[1px] w-24 bg-[#c5a880]/40" />
          <p className="font-sans text-xs text-[#74290F]/60">
            Last Updated: June 2026
          </p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-stone prose-brown max-w-none font-sans text-sm sm:text-base text-[#292927]/90 font-light leading-relaxed space-y-8">
          
          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              1. Scope of Agreement
            </h2>
            <p>
              These Terms & Conditions govern the provision of catering services by Dahi Cheeni (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) to our clients. By placing a booking, accepting a custom quotation, or confirming an event, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              2. Guest Count & Capacity Policies
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Minimum Count:</strong> We provide full-service catering setups with counters and service staff for gatherings of at least <strong>15 guests</strong>, up to 1000+ guests.</li>
              <li><strong>Finalizing Count:</strong> The final guest count must be finalized and locked at least <strong>3 days prior</strong> to the scheduled event date. </li>
              <li><strong>Adjustments:</strong> We prepare and source ingredients based on the locked count. Increases in guest counts within 48 hours of the event will be subject to ingredient availability and additional charges, whereas decreases within 48 hours are non-refundable.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              3. Menu Customization Timeline
            </h2>
            <p>
              Our culinary team coordinates fresh sourcing directly based on your customized selection. All menu customizations, adjustments to spice levels, and dietary requirements must be finalized <strong>5 to 7 days before</strong> the event.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              4. Purity Standard
            </h2>
            <p>
              Dahi Cheeni operates under a strict, non-negotiable <strong>purity standard</strong>. We do not prepare, carry, or serve meat, seafood, egg products, or alcohol. Clients agree not to bring or request any such elements to be handled by our culinary and service staff at the venue.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              5. Venue Access & Logistics
            </h2>
            <p>
              For full-service buffet setups, our staff requires access to the venue <strong>2 to 3 hours prior</strong> to the scheduled meal time. It is the client&apos;s responsibility to ensure that venue permissions, electricity access, and water facilities are coordinated and available to our team upon arrival.
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
