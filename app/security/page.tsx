"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Shield, Key, Smartphone, Globe } from "lucide-react";

export default function SecurityPage() {
  return (
    <div className="max-w-4xl space-y-6">
      <PageHeader title="Security" subtitle="Manage your password and security settings." />

      {/* Password Change */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                  <Key className="w-6 h-6" />
              </div>
              <div>
                  <h3 className="font-bold text-slate-900">Change Password</h3>
                  <p className="text-sm text-gray-500">Ensure your account is secure by using a strong password.</p>
              </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
              </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
              </div>
              <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900">Confirm New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500" />
              </div>
          </div>
          <div className="mt-6 flex justify-end">
              <button className="px-4 py-2 bg-white border border-gray-200 text-slate-700 font-medium rounded-lg hover:bg-gray-50 text-sm">Update Password</button>
          </div>
      </div>

      {/* 2FA */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
          <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                  <Smartphone className="w-6 h-6" />
              </div>
              <div>
                  <h3 className="font-bold text-slate-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account.</p>
              </div>
          </div>
          <div className="flex items-center">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
          </div>
      </div>

      {/* Login History */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
              <h3 className="font-bold text-slate-900">Recent Login History</h3>
          </div>
          <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-500 font-medium">
                  <tr>
                      <th className="px-6 py-3">Device</th>
                      <th className="px-6 py-3">Location</th>
                      <th className="px-6 py-3">Date</th>
                      <th className="px-6 py-3">IP Address</th>
                  </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                  {[
                      { device: "Chrome on Windows", location: "New York, USA", date: "Today at 10:00 AM", ip: "192.168.1.1" },
                      { device: "Safari on iPhone", location: "New York, USA", date: "Yesterday at 8:30 PM", ip: "192.168.1.4" },
                      { device: "Chrome on MacOS", location: "London, UK", date: "Oct 20, 2025", ip: "10.0.0.42" },
                  ].map((login, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium text-slate-900 flex items-center gap-2">
                              <Globe className="w-4 h-4 text-gray-400" /> {login.device}
                          </td>
                          <td className="px-6 py-4 text-gray-500">{login.location}</td>
                          <td className="px-6 py-4 text-gray-500">{login.date}</td>
                          <td className="px-6 py-4 text-gray-500 font-mono text-xs">{login.ip}</td>
                      </tr>
                  ))}
              </tbody>
          </table>
      </div>
    </div>
  );
}
