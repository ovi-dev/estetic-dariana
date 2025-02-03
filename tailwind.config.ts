import type { Config } from "tailwindcss";





export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        fondo2: "#f3fbfb",
        fondonav:"#FFE7E7",
        hovernav:"#0BDDEC",
        hover:"#0BDDEC",
        
 },
      // screens: {
      //   // Personaliza o agrega nuevos breakpoints
      //   xs: '480px', // breakpoint pequeño
      //   sm: '640px', // Móviles grandes
      //   md: '768px', // Tablets
      //   lg: '1024px', // Laptops
      //   xl: '1280px', // Monitores grandes
      //   '2xl': '1536px', // Monitores extra grandes
      // },


    },
    backgroundImage: {
      site: "url('/fondo.png')"
      // about: "url('./assets/about.png')",
      // services: "url('/img/services.png')",
    
    },
  },
  plugins: [],
} satisfies Config;
