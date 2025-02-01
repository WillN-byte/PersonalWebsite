"use client";

import dynamic from "next/dynamic";
import type React from "react";

const SpaceBackground = dynamic(() => import("./SpaceBackground"), {
  ssr: false,
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <SpaceBackground />
      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
