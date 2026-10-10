"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ShoppingBag,
  CheckCircle2,
  Clock,
  MapPin,
  CreditCard,
  Truck,
  ShieldCheck,
  ChevronRight,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Utensils
} from "lucide-react";
import FAQs from "@/components/FAQs";

const CHECKOUT_FAQS = [
  {
    question: "How does payment and order placement work?",
    answer: "You can select your preferred payment option (UPI, Cards, Net Banking, or Pay on Delivery) at checkout. Upon clicking 'Place Order', your order is instantly confirmed and assigned to our kitchen team.",
  },
  {
    question: "Can I modify my order details after placing it?",
    answer: "Yes, you can update your event date, delivery time, or guest count up to 48 hours prior to your scheduled event by reaching out with your Order ID.",
  },
  {
    question: "How is food packed and delivered?",
    answer: "All orders are packaged in sealed, food-grade thermal insulated containers to maintain temperature, hygiene, and freshness from our kitchen straight to your event venue.",
  },
];

interface CartItem {
  id: string;
  name: string;
  category: string;
  rate: number;
  unit: string;
  quantity: number;
}

const DEFAULT_CART: CartItem[] = [
  {
    id: "1",
    name: "Shahi Paneer Nawabi",
    category: "Main Course",
    rate: 499,
    unit: "Portion",
    quantity: 2,
  },
  {
    id: "2",
    name: "Zafrani Jeera Pulao",
    category: "Rice & Biryani",
    rate: 349,
    unit: "Portion",
    quantity: 2,
  },
  {
    id: "3",
    name: "Dal Makhani Lazeez",
    category: "Main Course",
    rate: 479,
    unit: "Portion",
    quantity: 1,
  },
  {
    id: "4",
    name: "Garlic Butter Naan",
    category: "Assorted Breads",
    rate: 59,
    unit: "Pcs",
    quantity: 6,
  },
  {
    id: "5",
    name: "Badam Kheer-e-Khaas",
    category: "Desserts",
    rate: 189,
    unit: "Portion",
    quantity: 2,
  },
];

export default function CheckoutPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(DEFAULT_CART);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    area: "",
    city: "New Delhi",
    pincode: "",
    eventDate: "",
    timeSlot: "lunch",
    guestCount: "25",
    specialInstructions: "",
  });

  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking" | "cod">("upi");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPlaced, setIsPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const updateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.rate * item.quantity, 0);
  const packagingFee = subtotal > 0 ? 150 : 0;
  const deliveryFee = subtotal > 0 ? 250 : 0;
  const gstTax = Math.round(subtotal * 0.05);
  const grandTotal = subtotal + packagingFee + deliveryFee + gstTax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name || !formData.phone || !formData.address) {
      setErrorMsg("Please complete all required delivery fields (Name, Mobile Number, Street Address).");
      return;
    }

    if (cartItems.length === 0) {
      setErrorMsg("Your order cart is empty. Please add items to place an order.");
      return;
    }

    setIsSubmitting(true);

    // Generate random order ID
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const generatedOrderId = `DC-${randomNum}`;

    setTimeout(() => {
      setOrderId(generatedOrderId);
      setIsSubmitting(false);
      setIsPlaced(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  return (
    <main className="relative min-h-screen bg-[#FAF6F0] pt-24 md:pt-28 pb-16 overflow-x-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-[#c5a880]/15 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#8C3316]/5 blur-3xl -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Breadcrumb & Header */}
        <div className="pt-6 pb-8 space-y-3">
          <div className="flex items-center gap-2 text-xs font-sans text-[#8C3316]/70">
            <Link href="/" className="hover:text-[#8C3316] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#c5a880]" />
            <Link href="/menu" className="hover:text-[#8C3316] transition-colors">
              Menu
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="font-semibold text-[#8C3316]">Checkout</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#c5a880]/20 pb-6">
            <div>
              <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                E-COMMERCE CHECKOUT
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#8C3316] font-semibold tracking-wide mt-1">
                {isPlaced ? "Order Confirmation" : "Complete Your Order"}
              </h1>
            </div>

            {!isPlaced && (
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-[#8C3316] hover:text-[#74290F] bg-white border border-[#c5a880]/30 px-4 py-2.5 rounded-lg shadow-xs hover:shadow-sm transition-all"
              >
                <ArrowLeft className="w-4 h-4" /> Add More Dishes
              </Link>
            )}
          </div>
        </div>

        {!isPlaced ? (
          /* Checkout Grid */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Delivery Details & Payment */}
            <div className="lg:col-span-7 space-y-8">
              {/* Form Card */}
              <form onSubmit={handlePlaceOrder} id="checkout-form" className="space-y-8">
                {errorMsg && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600 font-sans">
                    {errorMsg}
                  </div>
                )}

                {/* Section 1: Customer & Delivery Details */}
                <div className="bg-white border border-[#c5a880]/30 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#c5a880]/20 pb-4">
                    <div className="w-9 h-9 rounded-full bg-[#8C3316]/10 text-[#8C3316] flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-[#8C3316]">
                        Delivery & Event Details
                      </h2>
                      <p className="font-sans text-xs text-[#292927]/60">
                        Where and when should we deliver your freshly prepared feast?
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sharma"
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ananya@example.com"
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      />
                    </div>

                    {/* Street Address */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Delivery Street Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="House / Flat No., Villa / Building Name, Street"
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      />
                    </div>

                    {/* Area & City */}
                    <div>
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Locality / Area
                      </label>
                      <input
                        type="text"
                        name="area"
                        value={formData.area}
                        onChange={handleChange}
                        placeholder="e.g. Vasant Vihar / Cyber Hub"
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        City / Region
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      >
                        <option value="New Delhi">New Delhi</option>
                        <option value="Gurugram">Gurugram</option>
                        <option value="Noida">Noida</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                      </select>
                    </div>

                    {/* Event Date & Time Slot */}
                    <div>
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Preferred Delivery Time Slot
                      </label>
                      <select
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      >
                        <option value="morning">Morning (8:30 AM - 11:30 AM)</option>
                        <option value="lunch">Lunch (12:00 PM - 3:00 PM)</option>
                        <option value="high-tea">High Tea (4:00 PM - 6:30 PM)</option>
                        <option value="dinner">Dinner (7:30 PM - 10:30 PM)</option>
                      </select>
                    </div>

                    {/* Guest Count */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Estimated Guest Count
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        min="5"
                        max="500"
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder="e.g. 25"
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all"
                      />
                    </div>

                    {/* Special Instructions */}
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-[#8C3316]/80 uppercase tracking-wider mb-1.5">
                        Special Cooking & Delivery Instructions
                      </label>
                      <textarea
                        name="specialInstructions"
                        rows={3}
                        value={formData.specialInstructions}
                        onChange={handleChange}
                        placeholder="e.g., No onion no garlic for specific dishes, mild spice levels, gate entry code..."
                        className="w-full px-4 py-3 bg-[#FAF6F0]/50 border border-[#c5a880]/30 rounded-xl text-sm text-[#8C3316] placeholder-[#8C3316]/40 focus:outline-none focus:ring-1 focus:ring-[#8C3316] focus:border-[#8C3316] transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section 2: Payment Selection */}
                <div className="bg-white border border-[#c5a880]/30 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#c5a880]/20 pb-4">
                    <div className="w-9 h-9 rounded-full bg-[#8C3316]/10 text-[#8C3316] flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h2 className="font-serif text-xl font-semibold text-[#8C3316]">
                        Payment Option
                      </h2>
                      <p className="font-sans text-xs text-[#292927]/60">
                        Select how you would like to complete your order payment.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        id: "upi",
                        title: "UPI / Instant Pay",
                        desc: "Google Pay, PhonePe, Paytm, BHIM",
                        badge: "Recommended",
                      },
                      {
                        id: "card",
                        title: "Credit / Debit Card",
                        desc: "Visa, Mastercard, RuPay, Amex",
                        badge: "Secure SSL",
                      },
                      {
                        id: "netbanking",
                        title: "Net Banking",
                        desc: "All major Indian banks supported",
                        badge: "",
                      },
                      {
                        id: "cod",
                        title: "Pay on Delivery",
                        desc: "Pay via cash/UPI upon venue delivery",
                        badge: "",
                      },
                    ].map((method) => (
                      <label
                        key={method.id}
                        onClick={() => setPaymentMethod(method.id as any)}
                        className={`border rounded-xl p-4 flex flex-col justify-between cursor-pointer transition-all duration-200 ${
                          paymentMethod === method.id
                            ? "border-[#8C3316] bg-[#8C3316]/5 shadow-xs"
                            : "border-[#c5a880]/30 hover:border-[#c5a880] bg-white"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="paymentMethod"
                              checked={paymentMethod === method.id}
                              onChange={() => setPaymentMethod(method.id as any)}
                              className="text-[#8C3316] focus:ring-[#8C3316]"
                            />
                            <span className="font-serif text-base font-semibold text-[#8C3316]">
                              {method.title}
                            </span>
                          </div>
                          {method.badge && (
                            <span className="text-[10px] font-sans font-bold bg-[#8C3316] text-white px-2 py-0.5 rounded-full">
                              {method.badge}
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-xs text-[#292927]/70 mt-2 pl-5">
                          {method.desc}
                        </p>
                      </label>
                    ))}
                  </div>

                  {/* Payment details preview */}
                  <div className="bg-[#FAF6F0] border border-[#c5a880]/20 rounded-xl p-4 text-xs font-sans text-[#8C3316]/80 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#c5a880] flex-shrink-0" />
                    <span>
                      Transactions are protected with 256-bit SSL encryption. An automated receipt and order invoice will be issued upon order placement.
                    </span>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Column: Order Summary & Primary CTA Button */}
            <div className="lg:col-span-5 sticky top-28 space-y-6">
              <div className="bg-white border border-[#c5a880]/40 rounded-2xl p-6 shadow-md space-y-6">
                <div className="flex items-center justify-between border-b border-[#c5a880]/20 pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-[#8C3316]" />
                    <h2 className="font-serif text-xl font-semibold text-[#8C3316]">
                      Order Summary
                    </h2>
                  </div>
                  <span className="text-xs font-sans font-semibold bg-[#8C3316]/10 text-[#8C3316] px-2.5 py-1 rounded-full">
                    {cartItems.reduce((acc, i) => acc + i.quantity, 0)} Items
                  </span>
                </div>

                {/* Items List */}
                {cartItems.length > 0 ? (
                  <div className="space-y-4 max-h-72 overflow-y-auto pr-1 divide-y divide-[#c5a880]/15">
                    {cartItems.map((item) => (
                      <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                        <div className="flex-grow space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="w-3 h-3 border border-green-600 flex items-center justify-center p-0.5 rounded-xs">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
                            </span>
                            <h4 className="font-serif text-sm font-semibold text-[#8C3316]">
                              {item.name}
                            </h4>
                          </div>
                          <span className="font-sans text-[11px] text-[#c5a880] block">
                            ₹{item.rate} / {item.unit}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-[#FAF6F0] border border-[#c5a880]/30 rounded-lg px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="text-[#8C3316] hover:text-[#74290F] p-0.5"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-sans text-xs font-bold text-[#8C3316] min-w-[16px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="text-[#8C3316] hover:text-[#74290F] p-0.5"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Item Total */}
                        <div className="text-right min-w-[60px]">
                          <span className="font-sans text-sm font-bold text-[#8C3316]">
                            ₹{item.rate * item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="block text-[#8C3316]/40 hover:text-red-600 ml-auto mt-0.5"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-[#8C3316]/60 text-xs font-sans">
                    Your cart is empty.
                  </div>
                )}

                {/* Pricing Breakdown */}
                <div className="border-t border-[#c5a880]/20 pt-4 space-y-2.5 font-sans text-xs text-[#292927]/80">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-medium text-[#8C3316]">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hygiene Packaging & Thermal Boxes</span>
                    <span className="font-medium text-[#8C3316]">₹{packagingFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Venue Transport & Delivery</span>
                    <span className="font-medium text-[#8C3316]">₹{deliveryFee}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>GST (5%)</span>
                    <span className="font-medium text-[#8C3316]">₹{gstTax}</span>
                  </div>

                  <div className="border-t border-[#c5a880]/30 pt-3 mt-2 flex justify-between items-baseline">
                    <span className="font-serif text-lg font-bold text-[#8C3316]">
                      Grand Total
                    </span>
                    <span className="font-sans text-xl font-extrabold text-[#8C3316]">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                {/* PROMINENT E-COMMERCE PLACEHOLDER BUTTON FOR PLACE ORDER */}
                <button
                  type="submit"
                  form="checkout-form"
                  disabled={isSubmitting || cartItems.length === 0}
                  className="w-full py-4 bg-[#8C3316] hover:bg-[#74290F] disabled:bg-[#8C3316]/60 text-white font-sans text-sm font-bold tracking-wider uppercase rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Processing Order...
                    </>
                  ) : (
                    <>
                      <span>Place Order</span>
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Trust Badges */}
                <div className="pt-2 grid grid-cols-2 gap-3 text-[11px] font-sans text-[#8C3316]/70 border-t border-[#c5a880]/15">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-4 h-4 text-[#c5a880]" />
                    <span>Timely Venue Arrival</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Utensils className="w-4 h-4 text-[#c5a880]" />
                    <span>Fresh Hot Cooked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Order Confirmation View */
          <div className="max-w-2xl mx-auto py-12 px-4 text-center space-y-8">
            <div className="bg-white border border-[#c5a880]/40 rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
              <div className="w-20 h-20 bg-green-50 border-2 border-green-200 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="font-sans text-xs font-bold tracking-[0.2em] text-[#c5a880] uppercase block">
                  ORDER PLACED SUCCESSFULLY
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#8C3316] font-semibold">
                  Thank You for Your Order!
                </h2>
                <p className="font-sans text-sm text-[#292927]/80 max-w-md mx-auto">
                  Your order has been received by our master culinary kitchen. We are preparing everything with home-style purity.
                </p>
              </div>

              {/* Order Details Card */}
              <div className="bg-[#FAF6F0] border border-[#c5a880]/30 rounded-2xl p-6 text-left space-y-4 font-sans">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#c5a880]/20 pb-3 gap-2">
                  <div>
                    <span className="text-xs text-[#8C3316]/60 uppercase tracking-wider block">
                      Order Reference ID
                    </span>
                    <span className="font-serif text-xl font-bold text-[#8C3316]">
                      {orderId}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-[#8C3316]/60 uppercase tracking-wider block">
                      Total Paid / Due
                    </span>
                    <span className="font-sans text-lg font-extrabold text-[#8C3316]">
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-semibold text-[#8C3316] block mb-0.5">
                      Customer Details:
                    </span>
                    <span className="text-[#292927]/80 block">{formData.name}</span>
                    <span className="text-[#292927]/80 block">{formData.phone}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[#8C3316] block mb-0.5">
                      Delivery Location:
                    </span>
                    <span className="text-[#292927]/80 block">
                      {formData.address}, {formData.area ? `${formData.area}, ` : ""}{formData.city}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                  href="/menu"
                  className="px-8 py-3.5 bg-[#8C3316] hover:bg-[#74290F] text-white font-sans text-xs font-semibold tracking-wider uppercase rounded-xl shadow-md transition-all text-center"
                >
                  Explore Menu
                </Link>
                <Link
                  href="/"
                  className="px-8 py-3.5 bg-white border border-[#c5a880]/40 text-[#8C3316] hover:bg-[#FAF6F0] font-sans text-xs font-semibold tracking-wider uppercase rounded-xl transition-all text-center"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FAQs */}
      <div className="mt-16">
        <FAQs items={CHECKOUT_FAQS} />
      </div>
    </main>
  );
}
