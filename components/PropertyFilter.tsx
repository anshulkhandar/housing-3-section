"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { cities } from "@/data/cities";

interface FilterProps {
  onFilter: (filters: { city: string; rooms: string }) => void;
  compact?: boolean;
}

export default function PropertyFilter({ onFilter, compact = false }: FilterProps) {
  const [city, setCity] = useState("All");
  const [rooms, setRooms] = useState("Any");
  const handleSearch = () => {
    onFilter({ city, rooms });
  };

  return (
    <div className={`bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] p-4 border border-black/[0.04] ${compact ? "flex flex-col md:flex-row gap-4 items-end" : "grid grid-cols-1 md:grid-cols-3 gap-4"}`}>
      <div className={`flex flex-col ${compact ? "flex-1 w-full" : ""}`}>
        <label className="text-xs font-medium text-black/50 mb-2 px-2">City</label>
        <select 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="bg-surface px-4 py-3 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm border border-black/[0.04]"
        >
          <option value="All">Select City</option>
          {cities.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className={`flex flex-col ${compact ? "flex-1 w-full" : ""}`}>
        <label className="text-xs font-medium text-black/50 mb-2 px-2">Rooms</label>
        <select 
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
          className="bg-surface px-4 py-3 rounded-xl appearance-none outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm border border-black/[0.04]"
        >
          <option value="Any">Any</option>
          <option value="1">1 Room</option>
          <option value="2">2 Rooms</option>
          <option value="3">3 Rooms</option>
          <option value="4+">4+ Rooms</option>
        </select>
      </div>



      <div className={`flex items-end ${compact ? "" : "h-full"}`}>
        <button 
          onClick={handleSearch}
          className="w-full bg-brand hover:bg-brand-hover text-white py-3 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2 h-[44px] shadow-[0_2px_12px_rgba(184,155,94,0.3)] hover:shadow-[0_4px_20px_rgba(184,155,94,0.4)]"
        >
          <Search className="w-4 h-4" />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
}
