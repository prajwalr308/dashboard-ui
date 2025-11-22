"use client";

import { Search, Gift, Bell, HelpCircle, Menu } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-100 h-16 px-4 md:px-8 flex items-center justify-between sticky top-0 z-10 gap-4">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick} 
          className="md:hidden text-gray-500 hover:text-gray-700 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Search */}
        <div className="relative hidden sm:block w-64 lg:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border-none bg-gray-50 rounded-lg text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-400 text-xs">⌘ + F</span>
          </div>
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-3 sm:gap-6">
        <div className="flex items-center gap-2 sm:gap-4 border-r border-gray-200 pr-3 sm:pr-6">
             <button className="text-gray-400 hover:text-slate-600 transition-colors">
                 <Gift className="w-5 h-5" />
             </button>
             <button className="text-gray-400 hover:text-slate-600 transition-colors relative">
                 <Bell className="w-5 h-5" />
                 <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
             </button>
             <button className="text-gray-400 hover:text-slate-600 transition-colors hidden sm:block">
                 <HelpCircle className="w-5 h-5" />
             </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-indigo-100 border border-indigo-200 overflow-hidden relative">
                 <Image 
                    src="https://api.dicebear.com/7.x/avataaars/png?seed=Felix" 
                    alt="User" 
                    width={36} 
                    height={36}
                    className="w-full h-full object-cover" 
                 />
            </div>
            <div className="text-sm hidden sm:block">
                <p className="font-medium text-slate-900 leading-none">Young Alaska</p>
                <p className="text-xs text-gray-500 mt-1">Business</p>
            </div>
        </div>
      </div>
    </header>
  );
}