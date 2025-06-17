
// src/app/fonts.ts
import { Urbanist, Nunito, Figtree } from 'next/font/google';

// export const urbanist = Urbanist({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'], // Specify all weights used in your design
//   variable: '--font-urbanist',   // CSS variable name
//   display: 'swap',
// });

export const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify all weights used
  variable: '--font-nunito',
  display: 'swap',
});

export const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify all weights used
  variable: '--font-figtree',
  display: 'swap',
});



export const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'], 
  variable: '--font-urbanist',
  display: 'swap',
});

