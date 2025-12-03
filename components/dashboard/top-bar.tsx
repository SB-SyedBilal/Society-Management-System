"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bell, Search, UserCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function buildBreadcrumbs(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { label: segment.replace(/-/g, " "), href };
  });
  return [{ label: "Dashboard", href: "/" }, ...crumbs];
}

export function TopBar() {
  const pathname = usePathname();
  const breadcrumbs = buildBreadcrumbs(pathname ?? "/");

  return (
    <header className="sticky top-0 z-30 flex flex-col gap-3 border-b border-border/60 bg-white/80 px-6 py-4 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb.href} className="flex items-center gap-2">
              {index > 0 && <span className="text-muted-foreground">/</span>}
              <Link
                href={crumb.href}
                className={index === breadcrumbs.length - 1 ? "text-foreground font-semibold" : "hover:text-foreground"}
              >
                {crumb.label}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 rounded-full border border-border/70 bg-white px-3 py-1.5 shadow-sm">
            <UserCircle2 className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-sm font-semibold leading-none text-foreground">Ayesha Khan</p>
              <p className="text-[11px] text-muted-foreground">Super Admin</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">AUCHS Operations Hub</h1>
          <p className="text-sm text-muted-foreground">Monitor residents, plots, and compliance in real time.</p>
        </div>
        <div className="flex w-full items-center gap-3 md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search residents, plots, CNIC…"
              className="pl-10"
            />
          </div>
          <Button>Quick Action</Button>
        </div>
      </div>
    </header>
  );
}
