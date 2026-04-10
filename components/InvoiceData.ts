export const invoiceData = {
  clinic: {
    name: "SmileCare Dental",
    address: "123 Health Avenue, Suite 400",
    city: "San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    email: "billing@smilecaredental.com",
    website: "www.smilecaredental.com",
    logo: "🦷"
  },
  patient: {
    name: "Jane Doe",
    address: "456 Oak Lane, Apt 2B",
    city: "San Francisco, CA 94107",
    phone: "+1 (555) 987-6543",
    email: "jane.doe@example.com"
  },
  invoice: {
    number: "INV-2026-0409",
    date: "April 09, 2026",
    dueDate: "May 09, 2026",
    status: "Due"
  },
  services: [
    { id: 1, description: "Comprehensive Oral Exam", code: "D0150", qty: 1, rate: 120.00, amount: 120.00 },
    { id: 2, description: "Digital X-Rays (Full Mouth)", code: "D0210", qty: 1, rate: 150.00, amount: 150.00 },
    { id: 3, description: "Adult Prophylaxis (Cleaning)", code: "D1110", qty: 1, rate: 110.00, amount: 110.00 },
    { id: 4, description: "Composite Filling - 2 Surfaces", code: "D2392", qty: 2, rate: 200.00, amount: 400.00 }
  ],
  summary: {
    subtotal: 780.00,
    tax: 0.00,
    discount: 50.00,
    total: 730.00,
    amountPaid: 0.00,
    balanceDue: 730.00
  },
  notes: "Thank you for choosing SmileCare Dental. Please make checks payable to SmileCare Dental or pay online via our patient portal. If you have any questions concerning this invoice, contact our billing department."
};
