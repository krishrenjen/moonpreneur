"use client";
import { usePricing } from "./PricingContext";

export function PricingSelector() {
  const { billingCycle, setBillingCycle, allowedCycles } = usePricing();

  return (
    <div className="flex gap-2 my-4">
      {allowedCycles.map((cycle) => (
        <button key={cycle} onClick={() => setBillingCycle(cycle)} className={`px-4 py-2 rounded border ${billingCycle === cycle ? "bg-blue-500 text-white" : "bg-white text-black"}`}>
          {cycle}
        </button>
      ))}
    </div>
  );
}
