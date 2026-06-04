// app/page.tsx or components/PageCounter.tsx
import { source } from '@/lib/source'; // Path to your Fumadocs source configuration

export default function PageCounter() {
  // Get all registered MDX pages for the current locale
  const totalPages = source.getPages().length;

  return (
    <div className="my-4 p-4 bg-fd-card text-fd-foreground rounded-xl border max-w-md mx-auto">
      <p>Total Documentation Pages: <strong>{totalPages}</strong></p>
    </div>
  );
}
