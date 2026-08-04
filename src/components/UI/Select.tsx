import type { ReactNode, SelectHTMLAttributes } from "react";
import { FiChevronDown } from "react-icons/fi";
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
  "h-9 w-fit min-w-0 cursor-pointer appearance-none rounded-xl border border-(--line) bg-(--surface-strong) pl-2.5 pr-8 text-sm font-semibold text-(--sea-ink) outline-none transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-(--lagoon-deep) [&_option]:bg-(--surface-strong) [&_option]:text-(--sea-ink)";

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
      <div className="relative inline-flex shrink-0">
        <select
          {...props}
          id={id}
          className={mergeClassNames(baseClassName, className)}
        >
          {children}
        </select>
        <span
          className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-(--sea-ink)/80"
          aria-hidden="true"
        >
          <FiChevronDown size={14} />
        </span>
      </div>
    </>
  );
}
