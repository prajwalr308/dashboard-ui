"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  CreditCard, 
  Users, 
  MessageSquare, 
  Package, 
  FileText, 
  BarChart2, 
  Zap, 
  Settings, 
  Shield, 
  HelpCircle,
  ChevronDown,
  Boxes,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

interface MenuItem {
  name: string;
  icon: any;
  href: string;
  badge?: number;
  tag?: string;
}

interface MenuSection {
  section: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    section: "GENERAL",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, href: "/" },
      { name: "Payment", icon: CreditCard, href: "/payment" },
      { name: "Customers", icon: Users, href: "/customers" },
      { name: "Message", icon: MessageSquare, href: "/message", badge: 8 },
    ],
  },
  {
    section: "TOOLS",
    items: [
      { name: "Product", icon: Package, href: "/product" },
      { name: "Invoice", icon: FileText, href: "/invoice" },
      { name: "Analytics", icon: BarChart2, href: "/analytics" },
      { name: "Automation", icon: Zap, href: "/automation", tag: "BETA" },
    ],
  },
  {
    section: "SUPPORT",
    items: [
      { name: "Settings", icon: Settings, href: "/settings" },
      { name: "Security", icon: Shield, href: "/security" },
      { name: "Help", icon: HelpCircle, href: "/help" },
    ],
  },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-100 h-screen flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      {/* Logo */}
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Boxes className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-800">Uncia</span>
        </div>
        <button onClick={onClose} className="md:hidden text-gray-500 hover:text-gray-700">
            <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-4 space-y-6">
        {menuItems.map((section) => (
          <div key={section.section}>
            <h3 className="text-xs font-semibold text-gray-400 mb-3 px-2">
              {section.section}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => {
                        if (window.innerWidth < 768) {
                          onClose();
                        }
                      }}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive
                          ? "bg-gray-100 text-slate-900"
                          : "text-gray-500 hover:bg-gray-50 hover:text-slate-900"
                      )}
                    >
                      <item.icon className={cn("w-5 h-5", isActive ? "text-slate-900" : "text-gray-400")} />
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="ml-auto bg-slate-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                       {item.tag && (
                        <span className="ml-auto bg-indigo-100 text-indigo-600 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          {item.tag}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Footer / Team Switcher */}
      <div className="p-4 border-t border-gray-100">
        <button className="flex items-center gap-3 w-full p-2 hover:bg-gray-50 rounded-lg transition-colors text-left">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
             <Boxes className="w-5 h-5" />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium text-slate-900 truncate">Team Marketing</p>
            <p className="text-xs text-gray-500">Free account</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>
        
        <div className="mt-2">
             <button className="w-full border border-gray-200 text-slate-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-50">
                 Upgrade Plan
             </button>
        </div>
        
         <p className="text-[10px] text-gray-400 text-center mt-4">© 2023 Uncia.io, Inc.</p>
      </div>
    </aside>
  );
}