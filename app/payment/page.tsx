"use client";

import PageHeader from "@/components/shared/PageHeader";
import { CreditCard, DollarSign, Calendar, ArrowUpRight, ArrowDownRight, MoreHorizontal } from "lucide-react";

const transactions = [
  { id: 1, name: "Adobe Creative Cloud", date: "Oct 24, 2025", amount: "$54.99", status: "Completed", type: "Subscription" },
  { id: 2, name: "Google Workspace", date: "Oct 23, 2025", amount: "$12.00", status: "Completed", type: "Subscription" },
  { id: 3, name: "Refund: Apple Store", date: "Oct 21, 2025", amount: "+$1,299.00", status: "Refunded", type: "Hardware" },
  { id: 4, name: "Slack Pro", date: "Oct 20, 2025", amount: "$8.00", status: "Completed", type: "Subscription" },
  { id: 5, name: "AWS Services", date: "Oct 19, 2025", amount: "$234.50", status: "Pending", type: "Infrastructure" },
];

const cards = [
  { id: 1, type: "Visa", last4: "4242", expiry: "12/28", isDefault: true, bank: "Chase" },
  { id: 2, type: "Mastercard", last4: "8892", expiry: "09/26", isDefault: false, bank: "Citi" },
];

export default function PaymentPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <PageHeader title="Payment" subtitle="Manage your billing information and transaction history." actionLabel="Add New Card" />

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card) => (
            <div key={card.id} className={`p-6 rounded-xl border ${card.isDefault ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 bg-white'} relative overflow-hidden`}>
                <div className="flex justify-between items-start mb-8">
                     <CreditCard className={`w-8 h-8 ${card.isDefault ? 'text-indigo-600' : 'text-gray-400'}`} />
                     {card.isDefault && <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded-full">Default</span>}
                </div>
                <div className="mb-2">
                    <p className="text-sm text-gray-500">Card Number</p>
                    <p className="text-lg font-mono font-bold text-slate-900">**** **** **** {card.last4}</p>
                </div>
                 <div className="flex gap-8">
                    <div>
                        <p className="text-xs text-gray-500">Expiry</p>
                        <p className="text-sm font-medium text-slate-900">{card.expiry}</p>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500">Bank</p>
                        <p className="text-sm font-medium text-slate-900">{card.bank}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {/* Transaction History */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-900">Transaction History</h3>
              <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">Download All</button>
          </div>
          <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                  <tr>
                      <th className="px-6 py-3">Description</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">Type</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3 text-right">Amount</th>
                      <th className="px-6 py-3"></th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                  {transactions.map((tx) => (
                      <tr key={tx.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium text-slate-900">{tx.name}</td>
                          <td className="px-6 py-4 text-gray-500 flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-gray-400" /> {tx.date}
                          </td>
                          <td className="px-6 py-4 text-gray-500">{tx.type}</td>
                          <td className="px-6 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                ${tx.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 
                                  tx.status === 'Pending' ? 'bg-amber-100 text-amber-800' : 
                                  'bg-gray-100 text-gray-800'}`}>
                                  {tx.status}
                              </span>
                          </td>
                          <td className={`px-6 py-4 text-right font-bold ${tx.amount.startsWith('+') ? 'text-emerald-600' : 'text-slate-900'}`}>
                              {tx.amount}
                          </td>
                          <td className="px-6 py-4 text-right">
                              <button className="text-gray-400 hover:text-slate-600">
                                  <MoreHorizontal className="w-4 h-4" />
                              </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
}
