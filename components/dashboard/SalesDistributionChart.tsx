"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ChevronDown, Wallet } from 'lucide-react';

const data = [
  { name: 'Website', value: 374.82, color: '#6366f1' }, // Indigo
  { name: 'Mobile App', value: 241.60, color: '#14b8a6' }, // Teal
  { name: 'Other', value: 213.42, color: '#f1f5f9' }, // Gray
];

export default function SalesDistributionChart() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex justify-between items-center mb-6">
         <div className="flex items-center gap-2 text-gray-500">
            <Wallet className="w-4 h-4" />
            <h3 className="font-medium text-sm text-slate-800">Sales Distribution</h3>
        </div>
         <button className="flex items-center gap-1 px-3 py-1 border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50">
            Monthly <ChevronDown className="w-3 h-3" />
        </button>
      </div>

      {/* Stats Legend Row */}
      <div className="grid grid-cols-3 gap-2 mb-4">
          {data.map((item) => (
              <div key={item.name}>
                  <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-1 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                      <span className="text-[10px] text-gray-400 font-medium uppercase">{item.name}</span>
                  </div>
                  <p className="text-sm font-bold text-slate-800">${item.value}</p>
              </div>
          ))}
      </div>

      <div className="h-[200px] w-full relative flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
         {/* Center Text (Optional, but looks nice) */}
      </div>
    </div>
  );
}
