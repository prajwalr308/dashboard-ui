"use client";

import PageHeader from "@/components/shared/PageHeader";
import { MoreHorizontal, Star } from "lucide-react";

const products = [
  { id: 1, name: "Marketing Pro Plan", category: "Subscription", price: "$29.00", stock: "Unlimited", sales: 1240, status: "Active", rating: 4.8 },
  { id: 2, name: "Enterprise Bundle", category: "Subscription", price: "$99.00", stock: "Unlimited", sales: 85, status: "Active", rating: 5.0 },
  { id: 3, name: "Consulting Hour", category: "Service", price: "$150.00", stock: "24", sales: 320, status: "Limited", rating: 4.9 },
  { id: 4, name: "E-Book: Growth Hacking", category: "Digital", price: "$15.00", stock: "Unlimited", sales: 5400, status: "Active", rating: 4.5 },
];

export default function ProductPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Products" subtitle="Manage your product catalog and inventory." actionLabel="Add Product" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                      {/* Placeholder for product image */}
                      <span className="text-xs font-medium uppercase tracking-wider">{product.category}</span>
                  </div>
                  
                  <div className="flex justify-between items-start mb-2">
                      <div>
                          <span className="text-xs text-indigo-600 font-bold uppercase tracking-wider">{product.category}</span>
                          <h3 className="font-bold text-slate-900 mt-1">{product.name}</h3>
                      </div>
                      <button className="text-gray-400 hover:text-slate-600">
                          <MoreHorizontal className="w-4 h-4" />
                      </button>
                  </div>
                  
                  <div className="flex items-center gap-1 mb-4">
                      <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                      <span className="text-xs font-medium text-slate-700">{product.rating}</span>
                      <span className="text-xs text-gray-400">({product.sales} sales)</span>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                      <span className="text-lg font-bold text-slate-900">{product.price}</span>
                       <span className={`text-xs font-medium px-2 py-1 rounded-full ${product.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'}`}>
                           {product.status}
                       </span>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
}
