import React from 'react';
import { invoiceData } from './InvoiceData';

export default function InvoiceTemplate5() {
  const { clinic, patient, invoice, services, summary, notes } = invoiceData;

  return (
    <div className="max-w-4xl mx-auto bg-[#f8fafc] p-12 rounded-[2.5rem] font-sans text-slate-700 shadow-xl border border-slate-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-12 bg-white p-8 rounded-[2rem] shadow-sm">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-500 rounded-2xl flex items-center justify-center text-3xl shadow-inner">
            {clinic.logo}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">{clinic.name}</h1>
            <p className="text-sm text-slate-500">{clinic.phone} • {clinic.email}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-2 rounded-full font-bold text-sm tracking-wide uppercase mb-3">
            Invoice
          </div>
          <p className="text-slate-800 font-semibold">{invoice.number}</p>
          <p className="text-sm text-slate-500">{invoice.date}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">
        {/* Bill To */}
        <div className="bg-white p-8 rounded-[2rem] shadow-sm">
          <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider mb-4">Patient Details</h3>
          <p className="font-bold text-lg text-slate-800 mb-2">{patient.name}</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            {patient.address}<br />
            {patient.city}<br />
            {patient.phone}
          </p>
        </div>
        {/* Payment Info */}
        <div className="bg-indigo-500 text-white p-8 rounded-[2rem] shadow-md flex flex-col justify-center">
          <p className="text-indigo-100 text-sm font-medium mb-1">Amount Due</p>
          <p className="text-4xl font-bold mb-4">${summary.balanceDue.toFixed(2)}</p>
          <p className="text-indigo-100 text-sm">Due by: <span className="font-semibold text-white">{invoice.dueDate}</span></p>
        </div>
      </div>

      {/* Services Table */}
      <div className="bg-white p-8 rounded-[2rem] shadow-sm mb-10">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 text-sm uppercase tracking-wider border-b border-slate-100">
              <th className="pb-4 font-semibold">Service</th>
              <th className="pb-4 font-semibold text-center">Qty</th>
              <th className="pb-4 font-semibold text-right">Rate</th>
              <th className="pb-4 font-semibold text-right">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {services.map((service) => (
              <tr key={service.id}>
                <td className="py-5">
                  <p className="font-semibold text-slate-800">{service.description}</p>
                  <p className="text-xs text-slate-400 mt-1">Code: {service.code}</p>
                </td>
                <td className="py-5 text-center font-medium">{service.qty}</td>
                <td className="py-5 text-right font-medium">${service.rate.toFixed(2)}</td>
                <td className="py-5 text-right font-bold text-slate-800">${service.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary & Notes */}
      <div className="flex justify-between items-end gap-12">
        <div className="w-1/2">
          <div className="bg-white p-6 rounded-3xl shadow-sm">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Note</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{notes}</p>
          </div>
        </div>
        <div className="w-1/2 bg-white p-8 rounded-[2rem] shadow-sm text-sm">
          <div className="space-y-3">
            <div className="flex justify-between text-slate-500">
              <span>Subtotal</span>
              <span className="font-medium text-slate-800">${summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-500">
              <span>Discount</span>
              <span className="font-medium text-emerald-500">-${summary.discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-slate-500 border-b border-slate-100 pb-4">
              <span>Tax</span>
              <span className="font-medium text-slate-800">${summary.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="font-bold text-slate-800">Total</span>
              <span className="font-bold text-lg text-slate-800">${summary.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
