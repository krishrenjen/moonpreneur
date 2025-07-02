"use client";
import { usePricing } from "./PricingContext";

type CycleValueProps<T> = Partial<Record<string, T>>;

export function CycleValue<T>(props: CycleValueProps<T>) {
  const { billingCycle } = usePricing();
  const normalizedKey = billingCycle.toLowerCase();

  // Normalize all keys to lowercase for comparison
  const lowercasedProps: Record<string, T> = {};
  for (const key in props) {
    lowercasedProps[key.toLowerCase()] = props[key]!;
  }

  const value = lowercasedProps[normalizedKey];

  if (value === undefined) {
    return <span className="text-red-500">N/A</span>;
  }

  return <>{value}</>;
}
