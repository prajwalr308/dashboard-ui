"use client";

import PageHeader from "@/components/shared/PageHeader";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { ArrowUpRight, Calendar } from "lucide-react";

const trafficData = [
  { name: 'Mon', visits: 4000, unique: 2400 },
  { name: 'Tue', visits: 3000, unique: 1398 },
  { name: 'Wed', visits: 2000, unique: 9800 },
  { name: 'Thu', visits: 2780, unique: 3908 },
  { name: 'Fri', visits: 1890, unique: 4800 },
  { name: 'Sat', visits: 2390, unique: 3800 },
  { name: 'Sun', visits: 3490, unique: 4300 },
];

const deviceData = [
    { name: 'Desktop', value: 65, color: '#4f46e5' },
    { name: 'Mobile', value: 25, color: '#818cf8' },
    { name: 'Tablet', value: 10, color: '#c7d2fe' },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Analytics" subtitle="Detailed insights into your performance." actionLabel="Export Report">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50">
                <Calendar className="w-4 h-4" /> Last 7 Days
          </button>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Traffic Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
               <div className="flex justify-between items-center mb-6">
                    <div>
                        <h3 className="font-bold text-slate-900">Traffic Overview</h3>
                        <p className="text-sm text-gray-500">Visits vs Unique Visitors</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="flex items-center text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                            <ArrowUpRight className="w-4 h-4 mr-1" /> +12.5%
                        </span>
                    </div>
               </div>
               <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={trafficData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                                </linearGradient>
                                <linearGradient id="colorUnique" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                            <Tooltip />
                            <Area type="monotone" dataKey="visits" stroke="#4f46e5" fillOpacity={1} fill="url(#colorVisits)" />
                            <Area type="monotone" dataKey="unique" stroke="#14b8a6" fillOpacity={1} fill="url(#colorUnique)" />
                        </AreaChart>
                    </ResponsiveContainer>
               </div>
          </div>

          {/* Device Breakdown */}
           <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
               <h3 className="font-bold text-slate-900 mb-6">Device Breakdown</h3>
               <div className="flex-1 flex flex-col justify-center gap-6">
                   {deviceData.map((device) => (
                       <div key={device.name}>
                           <div className="flex justify-between text-sm font-medium mb-2">
                               <span className="text-slate-700">{device.name}</span>
                               <span className="text-slate-900">{device.value}%</span>
                           </div>
                           <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                               <div 
                                    className="h-full rounded-full" 
                                    style={{ width: `${device.value}%`, backgroundColor: device.color }}
                               ></div>
                           </div>
                       </div>
                   ))}
               </div>
               <div className="mt-8 pt-6 border-t border-gray-50">
                   <p className="text-sm text-gray-500 text-center">Most of your traffic comes from Desktop devices.</p>
               </div>
           </div>
      </div>
    </div>
  );
}
