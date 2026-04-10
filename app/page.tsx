'use client';

import React, { useState } from 'react';
import InvoiceTemplate1 from '@/components/InvoiceTemplate1';
import InvoiceTemplate2 from '@/components/InvoiceTemplate2';
import InvoiceTemplate3 from '@/components/InvoiceTemplate3';
import { FileText, Sparkles, LayoutTemplate } from 'lucide-react';

export default function Home() {
  const [activeTemplate, setActiveTemplate] = useState<1 | 2 | 3>(1);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
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
        </div>

        <div className="transition-opacity duration-500">
          {activeTemplate === 1 && <InvoiceTemplate1 />}
          {activeTemplate === 2 && <InvoiceTemplate2 />}
          {activeTemplate === 3 && <InvoiceTemplate3 />}
        </div>
      </div>
    </div>
  );
}
