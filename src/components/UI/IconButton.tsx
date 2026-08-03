import type { ButtonHTMLAttributes, ReactNode } from "react";
import mergeClassNames from "@/utils/componentStyling";

type IconButtonRadius = "lg" | "xl";

interface IconButtonProps extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className"
> {
  children: ReactNode;
  className?: string;
  radius?: IconButtonRadius;
}

const radiusClassNames: Record<IconButtonRadius, string> = {
  lg: "rounded-lg",
  xl: "rounded-xl"
};

export default function IconButton({
  children,
  className,
  radius = "xl",
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={mergeClassNames(
        "inline-flex h-9 w-9 items-center justify-center border border-(--line) bg-(--surface-strong) text-(--sea-ink) transition-[background-color,transform,border-color] duration-150 hover:bg-(--link-bg-hover) hover:-translate-y-px",
        radiusClassNames[radius],
        className
      )}
    >
      {children}
    </button>
  );
}
