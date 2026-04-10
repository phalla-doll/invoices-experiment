import React from 'react';
import { invoiceData } from './InvoiceData';

export default function InvoiceTemplate4() {
  const { clinic, patient, invoice, services, summary, notes } = invoiceData;

  return (
    <div className="max-w-4xl mx-auto bg-white p-12 border-4 border-black font-sans text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      {/* Header */}
      <div className="flex justify-between items-end border-b-4 border-black pb-6 mb-8">
        <div>
          <h1 className="text-5xl font-black uppercase tracking-tighter mb-2">{clinic.name}</h1>
          <div className="font-mono text-sm uppercase space-y-1">
            <p>{clinic.address}, {clinic.city}</p>
            <p>{clinic.phone} // {clinic.email}</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Invoice</h2>
          <div className="font-mono text-sm space-y-1">
            <p><span className="font-bold">NO:</span> {invoice.number}</p>
            <p><span className="font-bold">DATE:</span> {invoice.date}</p>
            <p><span className="font-bold">DUE:</span> {invoice.dueDate}</p>
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div className="mb-10 border-2 border-black p-6">
        <h3 className="font-black uppercase tracking-widest mb-4 border-b-2 border-black pb-2 inline-block">Bill To</h3>
        <div className="font-mono text-sm space-y-1">
          <p className="font-bold text-lg uppercase">{patient.name}</p>
          <p>{patient.address}</p>
          <p>{patient.city}</p>
          <p className="mt-2">{patient.phone}</p>
          <p>{patient.email}</p>
        </div>
      </div>

      {/* Services Table */}
      <div className="mb-10">
        <table className="w-full text-left border-collapse border-2 border-black">
          <thead>
            <tr className="bg-black text-white font-mono text-sm uppercase">
              <th className="p-3 border-2 border-black">Description</th>
              <th className="p-3 border-2 border-black text-center">Code</th>
              <th className="p-3 border-2 border-black text-center">Qty</th>
              <th className="p-3 border-2 border-black text-right">Rate</th>
              <th className="p-3 border-2 border-black text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="font-mono text-sm">
            {services.map((service) => (
              <tr key={service.id}>
                <td className="p-3 border-2 border-black font-bold uppercase">{service.description}</td>
                <td className="p-3 border-2 border-black text-center">{service.code}</td>
                <td className="p-3 border-2 border-black text-center">{service.qty}</td>
                <td className="p-3 border-2 border-black text-right">${service.rate.toFixed(2)}</td>
                <td className="p-3 border-2 border-black text-right font-bold">${service.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="flex justify-between items-start">
        <div className="w-1/2 pr-8">
          <h3 className="font-black uppercase tracking-widest mb-2">Notes</h3>
          <p className="font-mono text-sm leading-relaxed border-l-4 border-black pl-4">{notes}</p>
        </div>
        <div className="w-1/2 max-w-xs ml-auto border-2 border-black p-6 font-mono text-sm">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>SUBTOTAL</span>
              <span>${summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>DISCOUNT</span>
              <span>-${summary.discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b-2 border-black pb-3">
              <span>TAX</span>
              <span>${summary.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-black pt-1">
              <span>TOTAL</span>
              <span>${summary.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-2">
              <span>PAID</span>
              <span>${summary.amountPaid.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-black bg-black text-white p-3 mt-2 -mx-6 -mb-6">
              <span>BALANCE</span>
              <span>${summary.balanceDue.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
