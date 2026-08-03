import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode
} from "react";
import mergeClassNames from "@/utils/componentStyling";

type ButtonVariant = "primary" | "secondary";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type ButtonAsButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: undefined;
  };

type ButtonAsAnchorProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const baseClassName =
  "inline-flex items-center justify-center gap-[0.45rem] rounded-full px-4 py-[0.62rem] text-[0.88rem] font-bold no-underline transition-transform hover:-translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    "border border-[color-mix(in_oklab,var(--lagoon-deep)_40%,var(--line))] bg-[color-mix(in_oklab,var(--lagoon)_22%,var(--surface-strong))] text-(--sea-ink)",
  secondary:
    "border border-(--line) bg-[color-mix(in_oklab,var(--surface-strong)_72%,transparent)] text-(--sea-ink-soft)"
};

export default function Button(props: ButtonProps) {
  const { children, className, variant = "primary" } = props;
  const resolvedClassName = mergeClassNames(
    baseClassName,
    variantClassNames[variant],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;

    return (
      <a {...anchorProps} href={href} className={resolvedClassName}>
        {children}
      </a>
    );
  }

  const { type = "button", ...buttonProps } = props as ButtonAsButtonProps;

  return (
    <button {...buttonProps} type={type as any} className={resolvedClassName}>
      {children}
    </button>
  );
}
