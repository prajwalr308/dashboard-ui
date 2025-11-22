"use client";

import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import { Save, User } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl">
      <PageHeader title="Settings" subtitle="Manage your account preferences and profile." />

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Tabs (Mock) */}
          <div className="border-b border-gray-100 flex px-6">
              <button className="px-4 py-4 text-sm font-medium text-indigo-600 border-b-2 border-indigo-600">Profile</button>
              <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-slate-900">Notifications</button>
              <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-slate-900">Team</button>
              <button className="px-4 py-4 text-sm font-medium text-gray-500 hover:text-slate-900">Billing</button>
          </div>

          <div className="p-8 space-y-8">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                  <div className="relative w-20 h-20 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                       <Image src="https://api.dicebear.com/7.x/avataaars/png?seed=Felix" alt="Profile" fill className="object-cover" />
                  </div>
                  <div>
                      <h3 className="text-sm font-bold text-slate-900">Profile Picture</h3>
                      <p className="text-xs text-gray-500 mb-3">JPG, GIF or PNG. Max size of 800K</p>
                      <div className="flex gap-3">
                          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-gray-50">Upload New</button>
                          <button className="px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50 border-red-100">Delete</button>
                      </div>
                  </div>
              </div>

              {/* Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900">First Name</label>
                      <input type="text" defaultValue="Young" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-900">Last Name</label>
                      <input type="text" defaultValue="Alaska" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-900">Email Address</label>
                      <div className="relative">
                          <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <input type="email" defaultValue="young.alaska@uncia.io" className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
                      </div>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-slate-900">Bio</label>
                      <textarea rows={4} className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" defaultValue="Marketing Manager at Uncia. Love data and coffee." />
                  </div>
              </div>
              
              <div className="pt-6 border-t border-gray-100 flex justify-end">
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium shadow-sm transition-colors">
                      <Save className="w-4 h-4" /> Save Changes
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
}

function MailIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    )
}
