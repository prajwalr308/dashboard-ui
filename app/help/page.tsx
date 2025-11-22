"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Search, ChevronRight, FileText, MessageCircle, Video } from "lucide-react";

const faqs = [
  { id: 1, question: "How do I upgrade my plan?", category: "Billing" },
  { id: 2, question: "Can I invite team members?", category: "Team" },
  { id: 3, question: "How to set up 2FA?", category: "Security" },
  { id: 4, question: "Where can I find my API keys?", category: "Developer" },
  { id: 5, question: "Refund policy details", category: "Billing" },
];

export default function HelpPage() {
  return (
    <div className="max-w-4xl space-y-8">
       <div className="text-center py-12 bg-indigo-600 rounded-2xl text-white relative overflow-hidden">
           {/* Decorative circles */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
           <div className="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>

           <h1 className="text-3xl font-bold mb-4 relative z-10">How can we help you?</h1>
           <div className="max-w-lg mx-auto relative z-10">
               <div className="relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                   <input 
                        type="text" 
                        placeholder="Search for articles..." 
                        className="w-full pl-12 pr-4 py-3 rounded-xl text-slate-900 focus:outline-none shadow-lg"
                   />
               </div>
           </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group cursor-pointer">
               <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                   <FileText className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Documentation</h3>
               <p className="text-sm text-gray-500">Detailed guides and API references.</p>
           </div>
           <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group cursor-pointer">
               <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                   <MessageCircle className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Live Chat</h3>
               <p className="text-sm text-gray-500">Talk to our support team in real-time.</p>
           </div>
           <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all text-center group cursor-pointer">
               <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                   <Video className="w-6 h-6" />
               </div>
               <h3 className="font-bold text-slate-900 mb-2">Video Tutorials</h3>
               <p className="text-sm text-gray-500">Watch step-by-step guides.</p>
           </div>
       </div>

       <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
           <div className="p-6 border-b border-gray-100">
               <h3 className="font-bold text-slate-900">Popular Articles</h3>
           </div>
           <div className="divide-y divide-gray-100">
               {faqs.map((faq) => (
                   <button key={faq.id} className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left group">
                       <div>
                           <h4 className="font-medium text-slate-900 group-hover:text-indigo-600 transition-colors">{faq.question}</h4>
                           <span className="text-xs text-gray-400">{faq.category}</span>
                       </div>
                       <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-indigo-600" />
                   </button>
               ))}
           </div>
       </div>
    </div>
  );
}
