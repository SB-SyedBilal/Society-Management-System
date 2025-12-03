"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import { sidebarModules } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function Sidebar() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string[]>(() =>
    sidebarModules.length ? [sidebarModules[0].title] : []
  );

  const toggleModule = (title: string) => {
    setExpanded((prev) =>
      prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]
    );
  };

  const activeHref = useMemo(() => pathname ?? "", [pathname]);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-border/60 bg-white/95 px-4 py-6 shadow-sm backdrop-blur md:flex md:flex-col">
      <div className="mb-8 flex items-center gap-3 px-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary font-semibold">
          AU
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">AUCHS</p>
          <p className="text-base font-semibold text-foreground">Society Console</p>
        </div>
      </div>

      <nav className="space-y-6 overflow-y-auto pr-2">
        {sidebarModules.map((module) => {
          const Icon = module.icon;
          const isOpen = expanded.includes(module.title);

          return (
            <div key={module.title}>
              <button
                onClick={() => toggleModule(module.title)}
                className="flex w-full items-center justify-between rounded-xl border border-border/70 bg-linear-to-br from-white to-white/40 px-3 py-2 text-left shadow-sm transition hover:border-primary/30"
              >
                <div className="flex items-center gap-3">
                  <span className={cn("rounded-lg p-2 text-primary", module.accent)}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="font-semibold text-sm text-foreground">{module.title}</span>
                </div>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-muted-foreground transition",
                    isOpen ? "rotate-180" : "rotate-0"
                  )}
                />
              </button>

              <div
                className={cn(
                  "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="mt-3 flex flex-col gap-1 overflow-hidden rounded-lg bg-muted/20 px-2 py-2">
                  {module.items.map((item) => {
                    const isActive = activeHref.startsWith(item.href);

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={cn(
                          "group relative flex flex-col rounded-lg px-3 py-2 text-sm transition",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-white"
                        )}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{item.label}</span>
                          {item.badge && (
                            <span className="rounded-full bg-primary/10 px-2 text-[11px] font-semibold uppercase tracking-wide text-primary">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.description && (
                          <span className="text-[12px] text-muted-foreground group-hover:text-foreground">
                            {item.description}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
