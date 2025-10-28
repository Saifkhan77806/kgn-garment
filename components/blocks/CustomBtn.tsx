'use client'

import { useRouter } from "next/navigation";

const CustomBtn = ({ text }: { text: string }) => {
  const router = useRouter()

  return (
    <button onClick={()=> router.push("/contact-us")} className="group cursor-pointer relative inline-flex items-center gap-3 px-8 py-4 bg-i from-copper to-gold text-ivory font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-copper/50 hover:scale-105 bg-gold">
      <span className="relative z-10">{text}</span>
      <svg
        className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: "#FFF9F4", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#F5EBDC", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          stroke="url(#arrowGrad)"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
      <div className="absolute inset-0 bg-gradient-to-r from-gold to-copper opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </button>
  );
};

export default CustomBtn;
