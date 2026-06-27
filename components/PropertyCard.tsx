"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

export default function PropertyCard({ property, index = 0 }: PropertyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group flex flex-col bg-white rounded-3xl p-3 shadow-[0_2px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-500 border border-black/[0.04]"
    >
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-3">
        <Image
          src={property.gallery[0]}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider shadow-sm">
          {property.code}
        </div>
      </div>

      <div className="px-2 flex flex-col flex-grow">
        <h3 className="font-medium text-base mb-1">{property.city}</h3>
        <p className="text-black/50 text-xs mb-3">
          {property.rooms} Rooms • {property.area} m²
        </p>

        <div className="mt-auto">
          <Link
            href={`/property/${property.code.toLowerCase()}`}
            className="block w-full py-2.5 text-center bg-brand/10 text-[#8A7344] hover:bg-brand hover:text-white rounded-xl text-sm font-semibold transition-all duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
