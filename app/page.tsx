import { Eye, FileText, CheckCircle2, Filter, Download } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import SalesOverviewChart from "@/components/dashboard/SalesOverviewChart";
import SubscriberChart from "@/components/dashboard/SubscriberChart";
import SalesDistributionChart from "@/components/dashboard/SalesDistributionChart";
import IntegrationList from "@/components/dashboard/IntegrationList";

export default function Home() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        
        <div className="flex items-center gap-3">
            <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 font-medium flex items-center gap-2 shadow-sm">
                <span>Oct 18 - Nov 18</span>
            </div>
             <div className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 font-medium shadow-sm">
                Monthly
            </div>
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 shadow-sm">
                <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 shadow-sm">
                <Download className="w-4 h-4" /> Export
            </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard 
            label="Page Views" 
            value="12,450" 
            trend={15.8} 
            trendDirection="up"
            icon={<Eye className="w-4 h-4" />}
        />
        <StatCard 
            label="Total Revenue" 
            value="$363.95" 
            trend={34.0} 
            trendDirection="down"
            icon={<FileText className="w-4 h-4" />}
        />
        <StatCard 
            label="Bounce Rate" 
            value="86.5%" 
            trend={24.2} 
            trendDirection="up"
            icon={<CheckCircle2 className="w-4 h-4" />}
        />
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SalesOverviewChart />
          <SubscriberChart />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SalesDistributionChart />
          <IntegrationList />
      </div>
    </div>
  );
}