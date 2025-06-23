"use client";
import React from "react";
import clsx from "clsx";

export interface BrandButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  newTab?: boolean;
  label?: string;
  hoverEffect?: boolean;
  clickEffect?: boolean;
  labelTakeUpSpace?: boolean;
  labelClassName?: string;
}

function BrandButtonComponent(
  { children, className, labelClassName, variant = "primary", href, label, newTab, hoverEffect = false, clickEffect = false, labelTakeUpSpace = false, ...props }: BrandButtonProps,
  ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>
) {
  const baseClasses = clsx(
    "py-2 px-4 rounded-xl transition-colors flex items-center justify-center",
    hoverEffect && "motion-safe:hover:translate-y-[-2px] transition-transform duration-200 ease-in-out ",
    clickEffect && "motion-safe:active:scale-75 transition-transform duration-200 ease-in-out",
    variant === "primary" && " bg-brand-yellow text-black border-b-2 border-b-[#fde892]",
    variant === "outline" && "bg-transparent border-black border-2 text-black",
    variant === "secondary" && "bg-brand-blue text-white border-b-2 border-b-[#b1b6f1]",
    className
  );

  return (
    <div className="relative flex flex-col items-center space-y-0.5 h-fit">
      {href ? (
        <a
          role="link"
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
          className={baseClasses}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      ) : (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          className={baseClasses}
          {...props}
        >
          {children}
        </button>
      )}
      {label && (
      <div
          className={clsx(
            "flex items-center gap-1",
            !labelTakeUpSpace && "absolute top-full pointer-events-none",
            "text-gray-500 text-sm",
            labelClassName
          )}
        >
          <img src="/assets/svgs/arrow.svg"/>
          <span className="select-none">{label}</span>
        </div>
      )}
    </div>
  );
}

const BrandButton = React.forwardRef(BrandButtonComponent);

BrandButton.displayName = "BrandButton";

export default BrandButton;
