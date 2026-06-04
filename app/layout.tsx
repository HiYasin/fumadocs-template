import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter, Figtree } from 'next/font/google';
import type { Metadata } from 'next'
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_URL 
    ? new URL(`https://${process.env.VERCEL_URL}`)  // For Vercel deployments
    : new URL('http://localhost:3000'),              // For local development
  
  title: 'Faial Fumadocs',
  description: 'This site is built with Fumadocs, the headless documentation framework for MDX-based docs sites.',
}

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={cn(inter.className, "font-sans", figtree.variable)} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
