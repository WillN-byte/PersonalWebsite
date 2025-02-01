'use client';

import type React from 'react';
import SpaceBackground from './SpaceBackground';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='relative min-h-screen'>
      <SpaceBackground />
      <div className='relative z-10 min-h-screen'>{children}</div>
    </div>
  );
}
