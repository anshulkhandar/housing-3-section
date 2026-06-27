"use client";

import { useState } from "react";
import { generateWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppButton from "./WhatsAppButton";
import { Property } from "@/data/properties";

interface SmallFormProps {
  property: Property;
}

export default function SmallForm({ property }: SmallFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const link = generateWhatsAppLink(
    property,
    formData.name,
    formData.phone,
    formData.email,
    formData.city,
    formData.message
  );

  return (
    <div className="bg-white p-8 rounded-[2rem] shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-black/[0.04]">
      <div className="flex justify-between items-end mb-6">
        <h3 className="text-xl font-medium">Interested?</h3>
        <span className="text-xs font-semibold text-black uppercase tracking-wider mb-0.5">Form is optional</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          value={formData.name}
          onChange={handleChange}
          className="w-full bg-surface border border-black/[0.04] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-surface border border-black/[0.04] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
        />
        <input 
          type="tel" 
          name="phone" 
          placeholder="Phone" 
          value={formData.phone}
          onChange={handleChange}
          className="w-full bg-surface border border-black/[0.04] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
        />
        <input 
          type="text" 
          name="city" 
          placeholder="Current City" 
          value={formData.city}
          onChange={handleChange}
          className="w-full bg-surface border border-black/[0.04] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm"
        />
      </div>
      
      <textarea 
        name="message" 
        placeholder="Message (optional)" 
        rows={3}
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-surface border border-black/[0.04] px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-brand/20 transition-all text-sm mb-6 resize-none"
      ></textarea>

      <div className="flex flex-col items-center">
        <p className="text-xs text-black mb-3 text-center">
          Contact us on WhatsApp. We&apos;ll reply as soon as possible.
        </p>
        <WhatsAppButton link={link} className="w-full sm:w-auto px-12" />
      </div>
    </div>
  );
}
