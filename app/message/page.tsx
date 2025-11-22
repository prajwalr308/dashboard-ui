"use client";

import { Search, Phone, Video, MoreVertical, Send, Paperclip, Smile } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const contacts = [
  { id: 1, name: "Alice Freeman", message: "Can we schedule a demo?", time: "2m", unread: 2, online: true, avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Alice" },
  { id: 2, name: "Bob Smith", message: "Thanks for the update!", time: "1h", unread: 0, online: false, avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Bob" },
  { id: 3, name: "Charlie Brown", message: "Invoice #003 question", time: "3h", unread: 1, online: true, avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Charlie" },
  { id: 4, name: "Diana Prince", message: "Looking forward to it.", time: "1d", unread: 0, online: false, avatar: "https://api.dicebear.com/7.x/avataaars/png?seed=Diana" },
];

const chatHistory = [
    { id: 1, sender: "Alice Freeman", text: "Hi team, I'm interested in the Enterprise plan.", time: "10:00 AM", isMe: false },
    { id: 2, sender: "Me", text: "Hello Alice! That's great to hear. What specific features are you looking for?", time: "10:05 AM", isMe: true },
    { id: 3, sender: "Alice Freeman", text: "mostly the advanced analytics and the dedicated support.", time: "10:07 AM", isMe: false },
    { id: 4, sender: "Alice Freeman", text: "Can we schedule a demo to go over these?", time: "10:08 AM", isMe: false },
];

export default function MessagePage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
      {/* Sidebar List */}
      <div className="w-80 border-r border-gray-100 flex flex-col bg-gray-50/50">
        <div className="p-4 border-b border-gray-100">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Search messages" className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-indigo-500 transition-colors" />
            </div>
        </div>
        <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
                <button key={contact.id} className={cn(
                    "w-full p-4 flex items-start gap-3 hover:bg-white hover:shadow-sm transition-all text-left border-b border-gray-100 last:border-0",
                    contact.id === 1 ? "bg-white border-l-4 border-l-indigo-600 shadow-sm" : "border-l-4 border-l-transparent"
                )}>
                    <div className="relative">
                        <div className="w-10 h-10 rounded-full bg-gray-200 relative overflow-hidden">
                            <Image src={contact.avatar} alt={contact.name} fill className="object-cover" />
                        </div>
                        {contact.online && <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></span>}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-sm font-bold text-slate-900 truncate">{contact.name}</h4>
                            <span className="text-xs text-gray-400">{contact.time}</span>
                        </div>
                        <p className={cn("text-xs truncate", contact.unread > 0 ? "text-slate-900 font-bold" : "text-gray-500")}>
                            {contact.message}
                        </p>
                    </div>
                    {contact.unread > 0 && (
                        <span className="min-w-[1.25rem] h-5 bg-indigo-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full px-1">
                            {contact.unread}
                        </span>
                    )}
                </button>
            ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="h-16 border-b border-gray-100 flex items-center justify-between px-6 bg-white">
            <div className="flex items-center gap-3">
                <div className="relative">
                    <div className="w-9 h-9 rounded-full bg-gray-100 relative overflow-hidden">
                        <Image src={contacts[0].avatar} alt={contacts[0].name} fill className="object-cover" />
                    </div>
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white rounded-full"></span>
                </div>
                <div>
                    <h3 className="font-bold text-slate-900">Alice Freeman</h3>
                    <span className="text-xs text-emerald-600 font-medium">Online</span>
                </div>
            </div>
            <div className="flex items-center gap-4 text-gray-400">
                <button className="hover:text-indigo-600 transition-colors"><Phone className="w-5 h-5" /></button>
                <button className="hover:text-indigo-600 transition-colors"><Video className="w-5 h-5" /></button>
                <button className="hover:text-indigo-600 transition-colors"><MoreVertical className="w-5 h-5" /></button>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/30">
            {chatHistory.map((msg) => (
                <div key={msg.id} className={cn("flex gap-4 max-w-[80%]", msg.isMe ? "ml-auto flex-row-reverse" : "")}>
                    {!msg.isMe && (
                         <div className="w-8 h-8 rounded-full bg-gray-200 relative overflow-hidden flex-shrink-0">
                            <Image src={contacts[0].avatar} alt="Sender" fill className="object-cover" />
                        </div>
                    )}
                    <div>
                        <div className={cn(
                            "p-4 rounded-2xl text-sm shadow-sm",
                            msg.isMe 
                                ? "bg-indigo-600 text-white rounded-tr-none" 
                                : "bg-white border border-gray-100 text-slate-800 rounded-tl-none"
                        )}>
                            <p>{msg.text}</p>
                        </div>
                        <span className={cn("text-[10px] text-gray-400 mt-1 block", msg.isMe ? "text-right" : "")}>
                            {msg.time}
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-100 bg-white">
            <div className="flex items-center gap-3 bg-gray-50 p-2 rounded-xl border border-gray-200">
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"><Paperclip className="w-5 h-5" /></button>
                <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-900 placeholder-gray-400"
                />
                <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors"><Smile className="w-5 h-5" /></button>
                <button className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
                    <Send className="w-4 h-4" />
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
