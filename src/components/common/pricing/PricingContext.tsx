"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type BillingCycle = string;

type PricingContextType = {
  billingCycle: BillingCycle;
  setBillingCycle: (cycle: BillingCycle) => void;
  allowedCycles: BillingCycle[];
};

const PricingContext = createContext<PricingContextType>({
  billingCycle: "monthly",
  setBillingCycle: () => {
    throw new Error("setBillingCycle called outside <PricingProvider>");
  },
  allowedCycles: ["monthly"],
});

type PricingProviderProps = {
  allowedCycles: BillingCycle[];
  defaultCycle?: BillingCycle;
  children: ReactNode;
};

export function PricingProvider({
  allowedCycles,
  defaultCycle = allowedCycles[0],
  children,
}: PricingProviderProps) {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(defaultCycle);

  return (
    <PricingContext.Provider
      value={{ billingCycle, setBillingCycle, allowedCycles }}
    >
      {children}
    </PricingContext.Provider>
  );
}

export function usePricing() {
  return useContext(PricingContext);
}
