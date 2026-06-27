"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { properties } from "@/data/properties";
import PropertyFilter from "./PropertyFilter";
import PropertyCard from "./PropertyCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const router = useRouter();
  
  // Get 4 featured properties
  const featured = properties.slice(0, 4);

  const handleFilter = (filters: { city: string; rooms: string }) => {
    const params = new URLSearchParams();
    if (filters.city !== "All") params.set("city", filters.city);
    if (filters.rooms !== "Any") params.set("rooms", filters.rooms);
    
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="h-screen flex flex-col justify-center pt-24 pb-4 px-6 lg:px-12 xl:px-16 max-w-[1600px] mx-auto w-full snap-start relative overflow-hidden">
      <div className="relative w-full h-[350px] md:h-[450px] rounded-[2rem] overflow-hidden z-10 flex flex-col items-center justify-center text-center px-4 shadow-[0_4px_30px_rgba(0,0,0,0.12)]">
        <Image 
          src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=2000"
          alt="Modern Apartment Living"
          fill
          priority
          className="object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        
        <div className="relative z-10 text-white mb-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight max-w-3xl text-shadow-sm">
            Find Your Perfect<br />Apartment in Germany
          </h1>
        </div>
      </div>

      <div className="-mt-8 relative z-20 w-full max-w-4xl mx-auto mb-6">
        <PropertyFilter onFilter={handleFilter} />
      </div>

      <div className="w-full z-10">
        <div className="flex justify-between items-end mb-6">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-brand shadow-[0_0_10px_rgba(184,155,94,0.5)]"></div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-dark">Featured Apartments</h2>
            </div>
            <p className="text-black/50 text-sm pl-5 font-medium">View some of our handpicked apartments.</p>
          </div>
          <Link href="/properties" className="text-sm font-medium text-brand bg-white px-6 py-2.5 rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-all hidden md:block border border-black/[0.04]">
            View all properties
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-4">
          {featured.map((prop, idx) => (
            <PropertyCard key={prop.code} property={prop} index={idx} />
          ))}
        </div>

        <div className="flex justify-center md:hidden">
          <Link 
            href="/properties" 
            className="flex items-center gap-2 bg-white border border-black/[0.04] rounded-full px-6 py-3 text-sm font-medium shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all"
          >
            Explore More Apartments <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
