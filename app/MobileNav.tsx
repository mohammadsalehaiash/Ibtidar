"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type Item = { href: string; label: string };

export default function MobileNav({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-navy hover:bg-mist"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="القائمة"
          className="absolute inset-x-0 top-full border-b border-line bg-white px-5 pb-5 pt-2 shadow-card"
        >
          <ul className="flex flex-col">
            {items.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-navy hover:bg-mist"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-xl bg-brand px-5 py-3 text-center font-semibold text-white"
          >
            تواصل معنا
          </a>
        </nav>
      )}
    </div>
  );
}
