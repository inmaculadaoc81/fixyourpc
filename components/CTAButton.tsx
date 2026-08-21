import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "red" | "black" | "whatsapp" | "outline" | "outline-light";

const VARIANT_CLASSES: Record<Variant, string> = {
  red: "bg-brand-red text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red-dark hover:shadow-xl hover:shadow-brand-red/30",
  black: "bg-brand-black text-white shadow-lg shadow-black/10 hover:bg-brand-gray-900",
  whatsapp: "bg-whatsapp text-white shadow-lg shadow-whatsapp/25 hover:brightness-95",
  outline: "border-2 border-brand-black text-brand-black hover:bg-brand-black hover:text-white",
  "outline-light": "border-2 border-white/40 text-white hover:bg-white hover:text-brand-black",
};

export default function CTAButton({
  href,
  children,
  variant = "red",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${VARIANT_CLASSES[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
