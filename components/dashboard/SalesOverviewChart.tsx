"use client";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Filter, ArrowUpDown, MoreHorizontal, ArrowUpRight } from 'lucide-react';

const data = [
  { name: 'Oct', China: 2000, USA: 3000, Canada: 1500, Other: 1000 },
  { name: 'Nov', China: 2500, USA: 2800, Canada: 1200, Other: 1800 },
  { name: 'Dec', China: 3000, USA: 4005, Canada: 2000, Other: 2500 },
];

export default function SalesOverviewChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm col-span-2">
      <div className="flex justify-between items-start mb-6">
        <div>
            <div className="flex items-center gap-2 mb-2">
                <span className="text-gray-400">
                     {/* Simple icon placeholder */}
                     <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
                </span>
                <h3 className="font-semibold text-slate-800">Sales Overview</h3>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">$9,257.51</h2>
            <div className="flex items-center gap-2 text-sm">
                <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-xs font-bold flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1"/> 15.8%
                </span>
                <span className="text-gray-400">+$143.50 increased</span>
            </div>
        </div>
        
        <div className="flex gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                <Filter className="w-3 h-3" /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
                <ArrowUpDown className="w-3 h-3" /> Sort
            </button>
             <button className="p-1.5 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
                <MoreHorizontal className="w-3 h-3" />
            </button>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={40}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                dy={10}
            />
            <Tooltip 
                cursor={{ fill: 'transparent' }}
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar dataKey="China" stackId="a" fill="#4f46e5" radius={[0, 0, 0, 0]} /> {/* Indigo 600 */}
            <Bar dataKey="USA" stackId="a" fill="#6366f1" radius={[0, 0, 0, 0]} />   {/* Indigo 500 */}
            <Bar dataKey="Canada" stackId="a" fill="#818cf8" radius={[0, 0, 0, 0]} /> {/* Indigo 400 */}
            <Bar dataKey="Other" stackId="a" fill="#a5b4fc" radius={[4, 4, 0, 0]} />  {/* Indigo 300 */}
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-4">
           {[
               { label: 'China', color: 'bg-indigo-600' },
               { label: 'USA', color: 'bg-indigo-500' },
               { label: 'Canada', color: 'bg-indigo-400' },
               { label: 'Other', color: 'bg-indigo-300' }
           ].map(item => (
               <div key={item.label} className="flex items-center gap-2">
                   <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
                   <span className="text-xs text-gray-500">{item.label}</span>
               </div>
           ))}
      </div>
    </div>
  );
}
