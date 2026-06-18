"use client";

import React, { useState, useEffect } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    eventDate: "",
    occasion: "",
    guestCount: "",
    location: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "/api/quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            contactNumber: formData.contactNumber,
            eventDate: formData.eventDate,
            occasion: formData.occasion,
            guestCount: formData.guestCount ? Number(formData.guestCount) : null,
            location: formData.location,
          }),
        }
      );

      if (response.ok) {
        // Reset form and close
        setFormData({
          name: "",
          contactNumber: "",
          eventDate: "",
          occasion: "",
          guestCount: "",
          location: "",
        });
        onClose();
      } else {
        setErrorMsg("Something went wrong. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop overlay with blur */}
      <div
        className="fixed inset-0 bg-[#74290F]/40 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative bg-[#FAF6F0] border border-[#c5a880]/30 rounded-[28px] md:rounded-[36px] w-full max-w-2xl p-6 sm:p-8 md:p-10 shadow-2xl z-10 transform transition-all duration-300 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 text-[#74290F]/70 hover:text-[#74290F] p-2 hover:bg-[#74290F]/5 rounded-full transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="text-center mb-8">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase mb-2 block">
            BEGIN YOUR EXPERIENCE
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#74290F] font-semibold tracking-wide">
            Get a Custom Quote
          </h2>
          <div className="flex items-center gap-3 mt-3 w-full justify-center">
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
            <span className="text-[#c5a880] text-xs">✿</span>
            <div className="h-[1px] w-10 bg-[#c5a880]/30" />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {errorMsg && (
            <div className="p-3.5 bg-red-50 border border-red-200 rounded-lg text-sm text-red-600 font-sans text-center">
              {errorMsg}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="block text-[11px] sm:text-xs font-semibold text-[#74290F]/80 uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-4 py-2.5 bg-white/70 border border-[#c5a880]/30 rounded-lg text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none focus:ring-1 focus:ring-[#74290F] focus:border-[#74290F] transition-all duration-200"
              />
            </div>

            {/* Contact Number */}
            <div className="flex flex-col">
              <label htmlFor="contactNumber" className="block text-[11px] sm:text-xs font-semibold text-[#74290F]/80 uppercase tracking-wider mb-1.5">
                Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full px-4 py-2.5 bg-white/70 border border-[#c5a880]/30 rounded-lg text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none focus:ring-1 focus:ring-[#74290F] focus:border-[#74290F] transition-all duration-200"
              />
            </div>

            {/* Event Date */}
            <div className="flex flex-col">
              <label htmlFor="eventDate" className="block text-[11px] sm:text-xs font-semibold text-[#74290F]/80 uppercase tracking-wider mb-1.5">
                Event Date
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white/70 border border-[#c5a880]/30 rounded-lg text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none focus:ring-1 focus:ring-[#74290F] focus:border-[#74290F] transition-all duration-200"
              />
            </div>

            {/* Occasion Type Text Input */}
            <div className="flex flex-col">
              <label htmlFor="occasion" className="block text-[11px] sm:text-xs font-semibold text-[#74290F]/80 uppercase tracking-wider mb-1.5">
                Occasion Type
              </label>
              <input
                type="text"
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleChange}
                placeholder="Wedding Ceremony"
                className="w-full px-4 py-2.5 bg-white/70 border border-[#c5a880]/30 rounded-lg text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none focus:ring-1 focus:ring-[#74290F] focus:border-[#74290F] transition-all duration-200"
              />
            </div>

            {/* Approximate Guest Count */}
            <div className="flex flex-col">
              <label htmlFor="guestCount" className="block text-[11px] sm:text-xs font-semibold text-[#74290F]/80 uppercase tracking-wider mb-1.5">
                Approx. Guest Count
              </label>
              <input
                type="number"
                id="guestCount"
                name="guestCount"
                value={formData.guestCount}
                onChange={handleChange}
                placeholder="e.g. 50"
                min="1"
                className="w-full px-4 py-2.5 bg-white/70 border border-[#c5a880]/30 rounded-lg text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none focus:ring-1 focus:ring-[#74290F] focus:border-[#74290F] transition-all duration-200"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label htmlFor="location" className="block text-[11px] sm:text-xs font-semibold text-[#74290F]/80 uppercase tracking-wider mb-1.5">
                Event Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g. Vasant Kunj, New Delhi"
                className="w-full px-4 py-2.5 bg-white/70 border border-[#c5a880]/30 rounded-lg text-sm text-[#74290F] placeholder-[#74290F]/40 focus:outline-none focus:ring-1 focus:ring-[#74290F] focus:border-[#74290F] transition-all duration-200"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-6 py-4 bg-[#74290F] hover:bg-[#61220C] disabled:bg-[#74290F]/70 text-white font-sans text-xs sm:text-sm font-semibold tracking-wider text-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting Request...
              </>
            ) : (
              "Submit Quote Request"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
