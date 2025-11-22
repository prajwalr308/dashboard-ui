"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Download, Eye, MoreVertical, FileText } from "lucide-react";

const invoices = [
  { id: "INV-2024-001", client: "Acme Corp", date: "Nov 18, 2025", amount: "$1,200.00", status: "Paid" },
  { id: "INV-2024-002", client: "Globex Inc", date: "Nov 15, 2025", amount: "$850.00", status: "Pending" },
  { id: "INV-2024-003", client: "Soylent Corp", date: "Nov 12, 2025", amount: "$3,400.00", status: "Overdue" },
  { id: "INV-2024-004", client: "Initech", date: "Nov 10, 2025", amount: "$560.00", status: "Paid" },
  { id: "INV-2024-005", client: "Umbrella Corp", date: "Nov 08, 2025", amount: "$12,000.00", status: "Paid" },
];

export default function InvoicePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Invoices" subtitle="View and manage your billing documents." actionLabel="Create Invoice" />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4">Invoice ID</th>
              <th className="px-6 py-4">Client</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Amount</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {invoices.map((inv) => (
              <tr key={inv.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-indigo-600">{inv.id}</td>
                <td className="px-6 py-4 text-slate-900 flex items-center gap-2">
                    <div className="p-1.5 bg-indigo-50 text-indigo-600 rounded">
                        <FileText className="w-3 h-3" />
                    </div>
                    {inv.client}
                </td>
                <td className="px-6 py-4 text-gray-500">{inv.date}</td>
                <td className="px-6 py-4 font-medium text-slate-900">{inv.amount}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    inv.status === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 
                    inv.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 
                    'bg-rose-100 text-rose-800'
                  }`}>
                    {inv.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                        <button className="text-gray-400 hover:text-indigo-600 tooltip" title="View">
                            <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-gray-400 hover:text-indigo-600 tooltip" title="Download">
                            <Download className="w-4 h-4" />
                        </button>
                         <button className="text-gray-400 hover:text-slate-600">
                             <MoreVertical className="w-4 h-4" />
                         </button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
