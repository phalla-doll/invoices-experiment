import React from 'react';
import { invoiceData } from './InvoiceData';

export default function InvoiceTemplate3() {
  const { clinic, patient, invoice, services, summary, notes } = invoiceData;

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl overflow-hidden font-sans">
      {/* Dark Header */}
      <div className="bg-slate-900 text-white p-12 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-4 mb-2">
            <div className="bg-teal-500 text-white w-12 h-12 rounded-lg flex items-center justify-center text-2xl">
              {clinic.logo}
            </div>
            <h1 className="text-3xl font-bold tracking-tight">{clinic.name}</h1>
          </div>
          <p className="text-slate-400 text-sm mt-4 max-w-xs leading-relaxed">
            {clinic.address}<br />
            {clinic.city}<br />
            {clinic.phone}
          </p>
        </div>
        <div className="text-right">
          <h2 className="text-5xl font-black text-teal-500 tracking-tighter mb-2">INVOICE</h2>
          <p className="text-slate-300 font-mono text-lg">{invoice.number}</p>
        </div>
      </div>

      <div className="p-12">
        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-12 mb-12">
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Billed To</h3>
            <p className="font-bold text-xl text-slate-900 mb-1">{patient.name}</p>
            <p className="text-slate-600 text-sm">{patient.address}</p>
            <p className="text-slate-600 text-sm">{patient.city}</p>
            <p className="text-slate-600 text-sm mt-3">{patient.phone}</p>
            <p className="text-teal-600 text-sm font-medium">{patient.email}</p>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <span className="text-slate-500 font-medium">Date of Issue</span>
              <span className="font-bold text-slate-900">{invoice.date}</span>
            </div>
            <div className="flex justify-between items-center border-b border-slate-100 pb-4">
              <span className="text-slate-500 font-medium">Due Date</span>
              <span className="font-bold text-slate-900">{invoice.dueDate}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 font-medium">Total Amount</span>
              <span className="font-black text-2xl text-teal-600">${summary.balanceDue.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Services Table */}
        <div className="mb-12">
          <div className="bg-slate-900 text-white rounded-t-xl grid grid-cols-12 gap-4 p-4 text-sm font-bold uppercase tracking-wider">
            <div className="col-span-6">Description</div>
            <div className="col-span-2 text-center">Code</div>
            <div className="col-span-1 text-center">Qty</div>
            <div className="col-span-3 text-right">Total</div>
          </div>
          <div className="border border-t-0 border-slate-200 rounded-b-xl overflow-hidden">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`grid grid-cols-12 gap-4 p-4 text-sm items-center ${index !== services.length - 1 ? 'border-b border-slate-100' : ''}`}
              >
                <div className="col-span-6 font-medium text-slate-900">{service.description}</div>
                <div className="col-span-2 text-center text-slate-500 font-mono text-xs bg-slate-100 py-1 rounded">{service.code}</div>
                <div className="col-span-1 text-center text-slate-700">{service.qty}</div>
                <div className="col-span-3 text-right font-bold text-slate-900">${service.amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary & Notes */}
        <div className="grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Payment Notes</h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100">
              {notes}
            </p>
          </div>
          <div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">${summary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Discount</span>
                <span className="font-medium text-rose-500">-${summary.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600 border-b border-slate-200 pb-3">
                <span>Tax</span>
                <span className="font-medium text-slate-900">${summary.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-slate-900 font-bold">Total</span>
                <span className="font-bold text-xl text-slate-900">${summary.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 text-xs">
                <span>Amount Paid</span>
                <span>${summary.amountPaid.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center bg-teal-50 p-4 rounded-xl mt-4 border border-teal-100">
                <span className="text-teal-800 font-bold uppercase tracking-wider text-sm">Balance Due</span>
                <span className="font-black text-2xl text-teal-600">${summary.balanceDue.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
