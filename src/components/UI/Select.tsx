import type { ReactNode, SelectHTMLAttributes } from "react";
import mergeClassNames from "@/utils/componentStyling";

interface SelectProps extends Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  "children" | "className"
> {
  children: ReactNode;
  className?: string;
  label: string;
}

const baseClassName =
  "h-9 min-w-[4.25rem] rounded-xl border border-(--line) bg-(--surface-strong) px-3 text-sm font-semibold text-(--sea-ink) outline-none transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-(--lagoon-deep) [&_option]:bg-(--surface-strong) [&_option]:text-(--sea-ink)";

export default function Select({
  children,
  className,
  id,
  label,
  ...props
}: SelectProps) {
  return (
    <>
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <select
        {...props}
        id={id}
        className={mergeClassNames(baseClassName, className)}
      >
        {children}
      </select>
    </>
  );
}
