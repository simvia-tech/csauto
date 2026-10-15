"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* Small ports of @simvia/simvia-react-lib components (v2.7.3), same classes: the package is private. */

const ARROW =
  "M20.7475 12.1525C22.0313 13.5754 23.4561 14.8645 25 16C23.454 17.1075 22.0286 18.3745 20.7475 19.78C19.3496 21.4053 18.0996 23.1523 17.0125 25L15.325 23.515C16.8839 20.9268 18.896 18.6404 21.265 16.765C19.645 16.9 18.07 16.9675 16.585 16.9675H7V14.7175H16.585C18.07 14.7175 19.645 14.7175 21.265 14.9425C18.9163 13.1253 16.9056 10.909 15.325 8.395L17.0125 7C18.103 8.82439 19.3528 10.5486 20.7475 12.1525Z";

export function Arrow({ external = false, className = "" }: { external?: boolean; className?: string }) {
  return (
    <svg
      className={`size-[22px] shrink-0 fill-edf-orange-fonce ${external ? "-rotate-45" : ""} ${className}`}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d={ARROW} />
    </svg>
  );
}

/** Button: white pill with an orange arrow (primary) or bold text link (secondary). */
export function LinkButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
}) {
  const base = "group flex items-center gap-4 text-edf-bleu-fonce underline-offset-4";
  const styles =
    variant === "primary"
      ? "justify-between rounded-full border border-edf-gris-moyen bg-white px-5 py-3 text-sm font-semibold hover:bg-edf-gris-clair hover:underline md:text-base"
      : "p-0 text-sm font-bold hover:underline md:text-base";
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      <span>{children}</span>
      <Arrow external={external} />
    </a>
  );
}

/** Section heading: centred title over a short orange bar. */
export function PartTitle({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div className="mb-12 flex flex-col items-center justify-center gap-3">
      <h2 id={id} className="text-center text-2xl font-medium text-balance text-edf-bleu-fonce md:text-3xl">
        {children}
      </h2>
      <span className="flex h-1 w-20 bg-edf-orange-fonce" />
    </div>
  );
}

const PILL = "inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-xs font-bold leading-4";
const TINT = {
  blue: "bg-edf-pastille-bleu text-edf-bleu-moyen",
  orange: "bg-edf-pastille-orange text-edf-orange-texte",
  green: "bg-edf-pastille-vert text-edf-vert-texte",
};

export function Pill({ children, color = "blue" }: { children: ReactNode; color?: keyof typeof TINT }) {
  return <span className={`${PILL} ${TINT[color]}`}>{children}</span>;
}

/** Bold label and orange arrow at the bottom of a card (the parent carries the hover underline). */
export function CardAction({ children }: { children: ReactNode }) {
  return (
    <span className="flex items-center gap-2 text-sm font-bold text-edf-bleu-fonce">
      {children}
      <Arrow external className="size-5" />
    </span>
  );
}

/** Shell snippet with a copy button. */
export function Code({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(children).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };
  return (
    <div className="relative w-full">
      <pre className="whitespace-pre-wrap break-all rounded-2xl bg-edf-neutre-tres-fonce p-5 pr-14 font-mono text-sm leading-7 text-white">
        {children}
      </pre>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? "Copied" : "Copy to clipboard"}
        className="absolute top-3 right-3 flex size-9 cursor-pointer items-center justify-center rounded-full text-edf-neutre-moyen hover:bg-white/10 hover:text-white"
      >
        {copied ? <Check aria-hidden className="size-5 text-edf-vert-moyen" /> : <Copy aria-hidden className="size-5" />}
      </button>
      <span role="status" className="sr-only">{copied ? "Copied to clipboard" : ""}</span>
    </div>
  );
}

/**
 * Sticky header that hides when scrolling down and returns when scrolling up (same rule as the lib's
 * Menu), except while the page scrolls because a header anchor link was clicked.
 */
export function SiteHeader({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const anchorScroll = useRef(false);
  const settle = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (anchorScroll.current) {
        setVisible(true);
        clearTimeout(settle.current);
        settle.current = setTimeout(() => (anchorScroll.current = false), 200);
      } else {
        setVisible(y < lastY.current || y < 10);
      }
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(settle.current);
    };
  }, []);

  const onClick = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).closest('a[href^="#"]')) return;
    anchorScroll.current = true;
    setVisible(true);
    /* No scroll event if the target is already in place: do not stay locked. */
    clearTimeout(settle.current);
    settle.current = setTimeout(() => (anchorScroll.current = false), 600);
  };

  return (
    <header
      role="banner"
      onClick={onClick}
      className={`sticky top-0 z-50 motion-safe:transition-transform motion-safe:duration-300 ${
        visible ? "" : "pointer-events-none -translate-y-full"
      }`}
    >
      {children}
    </header>
  );
}
