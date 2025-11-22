import { ArrowUpRight, ArrowDownRight, Info } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  trend: number; // percentage
  trendDirection: "up" | "down";
  icon?: React.ReactNode; // The image has icons like Eye, FileText, etc.
}

export default function StatCard({ label, value, trend, trendDirection, icon }: StatCardProps) {
  const isPositive = trendDirection === "up";
  // In the image, green is used for positive growth, red for negative.
  // However, for "Bounce Rate", +24.2% is actually bad usually, but the image shows it as Green with Up arrow.
  // I will stick to the visual cue: Up = Green, Down = Red (pinkish).

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-2 text-gray-500">
            {icon}
            <span className="text-sm font-medium">{label}</span>
        </div>
        <Info className="w-4 h-4 text-gray-300 cursor-help" />
      </div>
      
      <div className="flex items-baseline gap-3">
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        <div className={cn(
            "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
            isPositive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
        )}>
            {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
            {Math.abs(trend)}%
        </div>
      </div>
    </div>
  );
}
