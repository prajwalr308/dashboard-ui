"use client";

import { Link as LinkIcon, Zap, ShoppingBag, CreditCard } from 'lucide-react';

const integrations = [
  {
    name: "Stripe",
    type: "Finance",
    rate: 40,
    profit: "$650.00",
    icon: CreditCard,
    iconColor: "text-indigo-600",
    bgColor: "bg-indigo-50"
  },
  {
    name: "Zapier",
    type: "CRM",
    rate: 80,
    profit: "$720.50",
    icon: Zap,
    iconColor: "text-orange-600",
    bgColor: "bg-orange-50"
  },
  {
    name: "Shopify",
    type: "Marketplace",
    rate: 20,
    profit: "$432.25",
    icon: ShoppingBag,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50"
  },
];

export default function IntegrationList() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm col-span-2">
      <div className="flex justify-between items-center mb-6">
         <div className="flex items-center gap-2 text-gray-500">
            <LinkIcon className="w-4 h-4" />
            <h3 className="font-semibold text-slate-800">List of Integration</h3>
        </div>
        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700">See All</button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
            <thead>
                <tr className="text-xs text-gray-400 border-b border-gray-50">
                    <th className="pb-3 font-medium pl-2">APPLICATION</th>
                    <th className="pb-3 font-medium">TYPE</th>
                    <th className="pb-3 font-medium">RATE</th>
                    <th className="pb-3 font-medium text-right pr-2">PROFIT</th>
                </tr>
            </thead>
            <tbody className="text-sm">
                {integrations.map((item) => (
                    <tr key={item.name} className="group hover:bg-gray-50 transition-colors">
                        <td className="py-4 pl-2">
                            <div className="flex items-center gap-3">
                                <input type="checkbox" className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <div className={`p-2 rounded-lg ${item.bgColor}`}>
                                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                                </div>
                                <span className="font-medium text-slate-900">{item.name}</span>
                            </div>
                        </td>
                        <td className="py-4 text-gray-500">{item.type}</td>
                        <td className="py-4 w-1/3 pr-4">
                            <div className="flex items-center gap-3">
                                <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-indigo-600 rounded-full" 
                                        style={{ width: `${item.rate}%` }}
                                    ></div>
                                </div>
                                <span className="text-xs text-gray-500 font-medium w-8">{item.rate}%</span>
                            </div>
                        </td>
                        <td className="py-4 text-right font-medium text-slate-900 pr-2">{item.profit}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
}
