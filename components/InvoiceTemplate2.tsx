import React from 'react';
import { invoiceData } from './InvoiceData';

export default function InvoiceTemplate2() {
  const { clinic, patient, invoice, services, summary, notes } = invoiceData;

  return (
    <div className="max-w-4xl mx-auto bg-[#fdfbf7] p-16 shadow-md rounded-3xl text-[#3a352f]">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-16 h-16 bg-[#e8e4d9] rounded-full flex items-center justify-center text-3xl mb-4 shadow-sm">
          {clinic.logo}
        </div>
        <h1 className="font-serif text-4xl text-[#2c2822] mb-2">{clinic.name}</h1>
        <p className="text-sm text-[#7a7369] tracking-wide uppercase">{clinic.address}, {clinic.city}</p>
        <p className="text-sm text-[#7a7369] tracking-wide uppercase">{clinic.phone} • {clinic.website}</p>
      </div>

      <div className="w-full h-px bg-[#e8e4d9] mb-12"></div>

      {/* Invoice Details & Bill To */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h3 className="font-serif text-xl italic text-[#5c564d] mb-4">Invoice For</h3>
          <div className="text-[#4a453e] space-y-1">
            <p className="font-serif text-2xl text-[#2c2822]">{patient.name}</p>
            <p>{patient.address}</p>
            <p>{patient.city}</p>
            <p className="mt-2">{patient.phone}</p>
            <p>{patient.email}</p>
          </div>
        </div>
        <div className="text-right bg-[#f4f1ea] p-6 rounded-2xl">
          <h2 className="font-serif text-3xl text-[#2c2822] mb-4">Statement</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <span className="text-[#7a7369]">Invoice No.</span>
            <span className="font-medium text-[#2c2822]">{invoice.number}</span>
            <span className="text-[#7a7369]">Date Issued</span>
            <span className="font-medium text-[#2c2822]">{invoice.date}</span>
            <span className="text-[#7a7369]">Payment Due</span>
            <span className="font-medium text-[#2c2822]">{invoice.dueDate}</span>
          </div>
        </div>
      </div>

      {/* Services Table */}
      <div className="mb-12">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-[#e8e4d9] text-[#7a7369] font-serif italic">
              <th className="py-4 font-normal text-lg">Treatment Description</th>
              <th className="py-4 font-normal text-lg text-center">Code</th>
              <th className="py-4 font-normal text-lg text-center">Qty</th>
              <th className="py-4 font-normal text-lg text-right">Rate</th>
              <th className="py-4 font-normal text-lg text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#f0ece1]">
            {services.map((service) => (
              <tr key={service.id} className="text-[#4a453e]">
                <td className="py-5 font-medium">{service.description}</td>
                <td className="py-5 text-center text-[#7a7369] text-sm">{service.code}</td>
                <td className="py-5 text-center">{service.qty}</td>
                <td className="py-5 text-right">${service.rate.toFixed(2)}</td>
                <td className="py-5 text-right font-medium text-[#2c2822]">${service.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="flex justify-end mb-12">
        <div className="w-1/2 max-w-sm">
          <div className="space-y-4 text-[#5c564d]">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount</span>
              <span className="text-[#a65d57]">-${summary.discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-[#e8e4d9] pb-4">
              <span>Tax</span>
              <span>${summary.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-serif text-2xl text-[#2c2822] pt-2">
              <span>Total</span>
              <span>${summary.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm pt-2">
              <span>Amount Paid</span>
              <span>${summary.amountPaid.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-serif text-xl text-[#fdfbf7] bg-[#5c564d] p-4 rounded-xl mt-4 shadow-sm">
              <span>Balance Due</span>
              <span>${summary.balanceDue.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer / Notes */}
      <div className="text-center border-t border-[#e8e4d9] pt-8">
        <p className="font-serif italic text-[#7a7369] text-lg mb-2">Thank you for trusting us with your smile.</p>
        <p className="text-xs text-[#9a9388] max-w-2xl mx-auto leading-relaxed">{notes}</p>
      </div>
    </div>
  );
}
