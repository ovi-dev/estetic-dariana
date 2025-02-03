import { Inter, Roboto } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})


export const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })