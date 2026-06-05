'use client';

import React, { useState } from 'react';
import { Monitor, Tablet, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

export function BlockPreview({
  children,
}: {
  children: React.ReactNode;
}) {
  const [view, setView] = useState<ViewMode>('desktop');

  const widthMap: Record<ViewMode, string> = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]',
  };

  return (
    <div className="not-prose w-full border rounded-xl overflow-hidden">
      
      {/* Toolbar (fixed top area) */}
      <div className="flex items-center justify-center gap-2 border-b bg-muted/40 p-2">
        <Button
          variant={view === 'desktop' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setView('desktop')}
        >
          <Monitor className="h-4 w-4" />
        </Button>

        <Button
          variant={view === 'tablet' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setView('tablet')}
        >
          <Tablet className="h-4 w-4" />
        </Button>

        <Button
          variant={view === 'mobile' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => setView('mobile')}
        >
          <Smartphone className="h-4 w-4" />
        </Button>
      </div>

      {/* Preview Container */}
      <div className="flex justify-center bg-background">
        
        {/* Fixed height viewport */}
        <div className="h-125 w-full overflow-y-auto flex justify-center p-4">
          
          {/* Device width container */}
          <div
            className={cn(
              'transition-all duration-300 ease-in-out',
              widthMap[view]
            )}
          >
            {children}
          </div>

        </div>
      </div>
    </div>
  );
}