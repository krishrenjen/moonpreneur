// Pricing.tsx
import { PricingProvider } from "./PricingContext";
import { ReactNode } from "react";

export function Pricing({ children, allowedCycles }: { children: ReactNode; allowedCycles: string[] }) {
  return <PricingProvider allowedCycles={allowedCycles}>{children}</PricingProvider>;
}
