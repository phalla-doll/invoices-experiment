import React from 'react';
import { invoiceData } from './InvoiceData';

export default function InvoiceTemplate1() {
  const { clinic, patient, invoice, services, summary, notes } = invoiceData;

  return (
    <div className="max-w-4xl mx-auto bg-white p-12 shadow-sm border border-gray-200 rounded-xl font-sans text-gray-800">
      {/* Header */}
      <div className="flex justify-between items-start border-b border-gray-200 pb-8 mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{clinic.logo}</span>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">{clinic.name}</h1>
          </div>
          <div className="text-sm text-gray-500 space-y-1">
            <p>{clinic.address}</p>
            <p>{clinic.city}</p>
            <p>{clinic.phone}</p>
            <p>{clinic.email}</p>
          </div>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-light text-gray-300 mb-4 uppercase tracking-widest">Invoice</h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
            <span className="text-gray-500">Invoice No:</span>
            <span className="font-medium text-gray-900">{invoice.number}</span>
            <span className="text-gray-500">Date:</span>
            <span className="font-medium text-gray-900">{invoice.date}</span>
            <span className="text-gray-500">Due Date:</span>
            <span className="font-medium text-gray-900">{invoice.dueDate}</span>
          </div>
        </div>
      </div>

      {/* Bill To */}
      <div className="mb-10">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Bill To</h3>
        <div className="text-sm text-gray-800 space-y-1">
          <p className="font-semibold text-base text-gray-900">{patient.name}</p>
          <p>{patient.address}</p>
          <p>{patient.city}</p>
          <p className="text-gray-500 mt-2">{patient.phone}</p>
          <p className="text-gray-500">{patient.email}</p>
        </div>
      </div>

      {/* Services Table */}
      <div className="mb-10">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-gray-200 text-gray-500">
              <th className="py-3 font-medium">Description</th>
              <th className="py-3 font-medium text-center">Code</th>
              <th className="py-3 font-medium text-center">Qty</th>
              <th className="py-3 font-medium text-right">Rate</th>
              <th className="py-3 font-medium text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {services.map((service) => (
              <tr key={service.id} className="text-gray-700">
                <td className="py-4 font-medium text-gray-900">{service.description}</td>
                <td className="py-4 text-center text-gray-500">{service.code}</td>
                <td className="py-4 text-center">{service.qty}</td>
                <td className="py-4 text-right">${service.rate.toFixed(2)}</td>
                <td className="py-4 text-right font-medium">${service.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="flex justify-between items-start">
        <div className="w-1/2 pr-8">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Notes</h3>
          <p className="text-sm text-gray-500 leading-relaxed">{notes}</p>
        </div>
        <div className="w-1/2 max-w-xs ml-auto">
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${summary.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span className="text-red-500">-${summary.discount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 border-b border-gray-200 pb-3">
              <span>Tax</span>
              <span>${summary.tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-gray-900 pt-1">
              <span>Total</span>
              <span>${summary.total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 pt-2">
              <span>Amount Paid</span>
              <span>${summary.amountPaid.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-base font-bold text-blue-600 bg-blue-50 p-3 rounded-lg mt-2">
              <span>Balance Due</span>
              <span>${summary.balanceDue.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
