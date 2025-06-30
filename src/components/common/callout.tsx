import clsx from "clsx";

export default function Callout({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("bg-stone-50 border border-gray-200 rounded-lg p-4 shadow-sm", className)} {...props}>
      {children}
    </div>
  );
}
