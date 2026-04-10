'use client';

import React, { useState } from 'react';
import InvoiceTemplate1 from '@/components/InvoiceTemplate1';
import InvoiceTemplate2 from '@/components/InvoiceTemplate2';
import InvoiceTemplate3 from '@/components/InvoiceTemplate3';
import InvoiceTemplate4 from '@/components/InvoiceTemplate4';
import InvoiceTemplate5 from '@/components/InvoiceTemplate5';
import { FileText, Sparkles, LayoutTemplate, Hash, Smile, ChevronRight } from 'lucide-react';

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState<1 | 2 | 3 | 4 | 5>(1);

  const cycleTemplate = () => {
    setActiveTemplate((prev) => (prev === 5 ? 1 : (prev + 1) as 1 | 2 | 3 | 4 | 5));
  };

  const templateDescriptions = {
    1: {
      title: "Clean Utility",
      description: "A highly readable, professional, and standard business invoice with a crisp layout. It focuses on clarity, using system fonts and a structured grid to make data easily scannable. Perfect for a straightforward, no-nonsense look."
    },
    2: {
      title: "Warm Organic",
      description: "A softer, more elegant template that uses serif typography and warm off-white/olive tones. It feels approachable and refined, making it great for a family dentistry or a clinic that wants to emphasize a personal, human touch."
    },
    3: {
      title: "Modern Bold",
      description: "A striking template featuring a dark header and vibrant teal accents. The high contrast and bold typography make it excellent for a high-end, highly modernized, or cosmetic dental practice."
    },
    4: {
      title: "Monochrome",
      description: "A bold, high-contrast, black-and-white design with thick borders and monospace fonts. It has a very modern, almost brutalist feel, ideal for a clinic wanting an edgy, highly distinctive brand identity."
    },
    5: {
      title: "Soft Friendly",
      description: "A gentle, pediatric-friendly design featuring rounded corners, soft indigo and blue tones, and a very approachable layout. It uses subtle shadows and pill shapes to feel welcoming and safe."
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative pb-32">
      <div className="max-w-5xl mx-auto mb-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Dental Clinic Invoices</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a template below to preview different invoice designs for your dental practice.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTemplate(1)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTemplate === 1 
                ? 'bg-gray-900 text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <FileText size={18} />
            Clean Utility
          </button>
          <button
            onClick={() => setActiveTemplate(2)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTemplate === 2 
                ? 'bg-[#5c564d] text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Sparkles size={18} />
            Warm Organic
          </button>
          <button
            onClick={() => setActiveTemplate(3)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTemplate === 3 
                ? 'bg-teal-600 text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <LayoutTemplate size={18} />
            Modern Bold
          </button>
          <button
            onClick={() => setActiveTemplate(4)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTemplate === 4 
                ? 'bg-black text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Hash size={18} />
            Monochrome
          </button>
          <button
            onClick={() => setActiveTemplate(5)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all ${
              activeTemplate === 5 
                ? 'bg-indigo-500 text-white shadow-md scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            <Smile size={18} />
            Soft Friendly
          </button>
        </div>

        <div className="transition-opacity duration-500">
          {activeTemplate === 1 && <InvoiceTemplate1 />}
          {activeTemplate === 2 && <InvoiceTemplate2 />}
          {activeTemplate === 3 && <InvoiceTemplate3 />}
          {activeTemplate === 4 && <InvoiceTemplate4 />}
          {activeTemplate === 5 && <InvoiceTemplate5 />}
        </div>

        {/* Aesthetic Description */}
        <div className="mt-12 max-w-2xl mx-auto text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-200 transition-all duration-300">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            {templateDescriptions[activeTemplate].title} Aesthetic
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {templateDescriptions[activeTemplate].description}
          </p>
        </div>
      </div>

      {/* Floating Button */}
      <button 
        onClick={cycleTemplate}
        className="fixed bottom-8 right-8 z-50 bg-gray-900 hover:bg-black text-white px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl transition-transform hover:scale-105 border border-gray-700"
        title="Next Template"
      >
        <span className="text-sm font-medium uppercase tracking-wider opacity-80">Preview</span>
        <span className="bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
          {activeTemplate}
        </span>
        <ChevronRight size={20} className="opacity-80" />
      </button>
    </div>
  );
}
