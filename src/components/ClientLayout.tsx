"use client";

import { usePathname } from "next/navigation";
import PageTransition from "@/components/PageTransition";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  return <PageTransition pageKey={pathname}>{children}</PageTransition>;
}
