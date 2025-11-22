"use client";

import PageHeader from "@/components/shared/PageHeader";
import { Mail, MessageSquare, ShoppingCart, UserPlus, Zap, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

const initialWorkflows = [
  { id: 1, name: "Welcome Email Series", trigger: "New Subscriber", status: "Active", runs: 1240, successRate: "98%", icon: Mail, color: "text-indigo-600", bg: "bg-indigo-50" },
  { id: 2, name: "Abandoned Cart Recovery", trigger: "Cart Abandoned > 1h", status: "Active", runs: 450, successRate: "24%", icon: ShoppingCart, color: "text-amber-600", bg: "bg-amber-50" },
  { id: 3, name: "Customer Onboarding", trigger: "Account Created", status: "Paused", runs: 890, successRate: "92%", icon: UserPlus, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: 4, name: "Support Ticket Auto-Reply", trigger: "New Ticket", status: "Active", runs: 2100, successRate: "100%", icon: MessageSquare, color: "text-rose-600", bg: "bg-rose-50" },
];

export default function AutomationPage() {
  const [workflows, setWorkflows] = useState(initialWorkflows);

  const toggleStatus = (id: number) => {
      setWorkflows(workflows.map(w => w.id === id ? { ...w, status: w.status === "Active" ? "Paused" : "Active" } : w));
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Automation" subtitle="Streamline your marketing with automated workflows." actionLabel="Create Workflow" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflows.map((workflow) => (
              <div key={workflow.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${workflow.bg}`}>
                              <workflow.icon className={`w-6 h-6 ${workflow.color}`} />
                          </div>
                          <div>
                              <h3 className="font-bold text-slate-900">{workflow.name}</h3>
                              <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                  <Zap className="w-3 h-3" /> Trigger: {workflow.trigger}
                              </p>
                          </div>
                      </div>
                      <div className="flex items-center">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                className="sr-only peer" 
                                checked={workflow.status === "Active"} 
                                onChange={() => toggleStatus(workflow.id)}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                          </label>
                      </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-50">
                      <div>
                          <p className="text-xs text-gray-500 mb-1 flex items-center gap-1"><Clock className="w-3 h-3" /> Total Runs</p>
                          <p className="text-lg font-bold text-slate-900">{workflow.runs}</p>
                      </div>
                      <div>
                          <p className="text-xs text-gray-500 mb-1 flex items-center gap-1">
                              {parseInt(workflow.successRate) > 90 ? <CheckCircle2 className="w-3 h-3 text-emerald-500" /> : <AlertCircle className="w-3 h-3 text-amber-500" />} 
                              Success Rate
                          </p>
                          <p className="text-lg font-bold text-slate-900">{workflow.successRate}</p>
                      </div>
                  </div>
              </div>
          ))}
      </div>
    </div>
  );
}
