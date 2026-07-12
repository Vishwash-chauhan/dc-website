"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <div className="h-[1px] w-24 bg-[#c5a880]/40" />
          <p className="font-sans text-xs text-[#74290F]/60">
            Last Updated: June 2026
          </p>
        </div>

        {/* Policy Content */}
        <div className="prose prose-stone prose-brown max-w-none font-sans text-sm sm:text-base text-[#292927]/90 font-light leading-relaxed space-y-8">

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              1. Introduction
            </h2>
            <p>
              At Dahi Cheeni, we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, request a custom catering quote, or book our catering services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              2. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide to us when submitting our custom quote form or contacting us via WhatsApp. This may include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-[#74290F]/90 font-medium">
              <li>Contact Details: Full Name, Phone Number, and Email Address.</li>
              <li>Event Specifications: Event Date, Type of Occasion (Pooja, Havan, Wedding, etc.), Location/Venue details, and Approximate Guest Count.</li>
              <li>Special Requirements: Culinary preferences, dietary restrictions, or onion- and garlic-free preparation guidelines.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              3. How We Use Your Information
            </h2>
            <p>
              We use the collected information solely for business purposes related to coordinating your event. Specifically, we use it to:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Generate custom packages, menu lists, and itemized quotations.</li>
              <li>Coordinate food preparation guidelines.</li>
              <li>Communicate logistical planning, setup times, and service staff coordination for your venue.</li>
              <li>Send occasional festive greetings or announcements regarding our services (only if explicitly opted-in).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              4. Data Sharing and Protection
            </h2>
            <p>
              Your data is treated as private and confidential.
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>No Third-Party Sales:</strong> We do not sell, trade, rent, or lease your personal information to third-party marketing companies.</li>
              <li><strong>Service Providers:</strong> We may share necessary delivery details with trusted third-party logistics/transport partners solely to coordinate food delivery to your venue.</li>
              <li><strong>Data Integrity:</strong> We implement standard commercial security measures (such as SSL encryption on our site) to guard your data against unauthorized access or modification.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-xl sm:text-2xl text-[#74290F] font-medium tracking-wide">
              5. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or wish to modify/delete any information you previously submitted to us, please feel free to reach out directly via:
            </p>
            <p className="font-medium text-[#74290F]">
              Phone/WhatsApp: <a href="tel:+918130964374" className="hover:underline">+91 81309 64374</a>
            </p>
          </section>

        </div>

      </div>
    </main>
  );
}
