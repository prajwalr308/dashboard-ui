"use client";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { ArrowUpRight, ChevronDown, User } from 'lucide-react';

const data = [
  { name: 'Sun', value: 2000 },
  { name: 'Mon', value: 3500 },
  { name: 'Tue', value: 12000 }, // Highlighted in image
  { name: 'Wed', value: 3000 },
  { name: 'Thu', value: 4500 },
  { name: 'Fri', value: 5500 },
  { name: 'Sat', value: 6000 },
];

export default function SubscriberChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-start mb-6">
        <div>
            <div className="flex items-center gap-2 mb-2 text-gray-500">
                <User className="w-4 h-4" />
                <h3 className="font-medium text-sm">Total Subscriber</h3>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">24,473</h2>
             <div className="flex items-center gap-2 text-sm">
                <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-xs font-bold flex items-center">
                    <ArrowUpRight className="w-3 h-3 mr-1"/> 8.2%
                </span>
                <span className="text-gray-400 text-xs">+749 increased</span>
            </div>
        </div>
        
         <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
            Weekly <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      <div className="h-[200px] w-full relative">
          {/* Floating Label for the peak - hardcoded for visual match */}
          <div className="absolute left-[35%] -top-2 transform -translate-x-1/2 text-xs font-bold text-slate-600">
              3,874
          </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <Tooltip cursor={{fill: 'transparent'}} />
            <Bar dataKey="value" radius={[6, 6, 6, 6]}>
              {data.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={entry.name === 'Tue' ? '#6366f1' : '#f1f5f9'} 
                />
              ))}
            </Bar>
             <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 10 }} 
                dy={10}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
