import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import mergeClassNames from "@/utils/componentStyling";

type CardRadius = "xl" | "2xl" | "4xl";
type CardTone = "default" | "feature";
type CardElement =
  | "article"
  | "aside"
  | "blockquote"
  | "div"
  | "form"
  | "section";

type CardProps<T extends CardElement = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  radius?: CardRadius;
  tone?: CardTone;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

const radiusClassNames: Record<CardRadius, string> = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "4xl": "rounded-4xl"
};

export default function Card<T extends CardElement = "div">({
  as,
  children,
  className,
  radius = "2xl",
  tone = "default",
  ...rest
}: CardProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      {...rest}
      className={mergeClassNames(
        "island-shell",
        tone === "feature" && "feature-card",
        radiusClassNames[radius],
        className
      )}
    >
      {children}
    </Component>
  );
}
