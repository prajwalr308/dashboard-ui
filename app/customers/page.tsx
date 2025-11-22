"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Search, Filter, MoreVertical, Mail, Phone } from "lucide-react";
import Image from "next/image";

const customers = [
  { id: 1, name: "Alice Freeman", email: "alice@example.com", company: "Stripe", role: "Admin", status: "Active", spent: "$12,400", avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Alice" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", company: "Google", role: "Editor", status: "Inactive", spent: "$4,200", avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Bob" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", company: "Meta", role: "Viewer", status: "Active", spent: "$850", avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Charlie" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", company: "Amazon", role: "Admin", status: "Active", spent: "$45,000", avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Diana" },
  { id: 5, name: "Evan Wright", email: "evan@example.com", company: "Netflix", role: "Editor", status: "Active", spent: "$2,300", avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Evan" },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Customers" subtitle="Manage your user base and permissions." actionLabel="Add Customer">
         <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input type="text" placeholder="Search customers..." className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500/20 focus:outline-none" />
         </div>
         <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600">
            <Filter className="w-4 h-4" />
         </button>
      </PageHeader>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 w-10"><input type="checkbox" className="rounded border-gray-300" /></th>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Company</th>
              <th className="px-6 py-4">Role</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Total Spent</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <tr key={customer.id} className="group hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 relative overflow-hidden">
                         <Image src={customer.avatar} alt={customer.name} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{customer.name}</p>
                      <p className="text-xs text-gray-500">{customer.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-600">{customer.company}</td>
                <td className="px-6 py-4 text-slate-600">{customer.role}</td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    customer.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {customer.status === 'Active' && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5"></span>}
                    {customer.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right font-medium text-slate-900">{customer.spent}</td>
                <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-1 text-gray-400 hover:text-indigo-600"><Mail className="w-4 h-4" /></button>
                        <button className="p-1 text-gray-400 hover:text-indigo-600"><Phone className="w-4 h-4" /></button>
                        <button className="p-1 text-gray-400 hover:text-slate-600"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {/* Pagination Mock */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center text-xs text-gray-500">
            <span>Showing 1-5 of 240 customers</span>
            <div className="flex gap-2">
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
                <button className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50">Next</button>
            </div>
        </div>
      </div>
    </div>
  );
}
