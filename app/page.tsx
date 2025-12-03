'use client';

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store";

const quickStats = [
  {
    label: "Active Residents",
    value: "1,284",
    trend: "+3.2%",
    detail: "vs last 30 days",
  },
  {
    label: "Plots Assigned",
    value: "642",
    trend: "92% occupancy",
    detail: "Phase I — V",
  },
  {
    label: "Open Requests",
    value: "36",
    trend: "12 urgent",
    detail: "Support & compliance",
  },
  {
    label: "Pending Members",
    value: "58",
    trend: "Require CNIC check",
    detail: "Cannot access portal",
  },
];

const timeline = [
  {
    title: "Phase 3 possession letters",
    time: "Today • 04:00 PM",
    description: "Notify 42 residents about document pickup schedule",
  },
  {
    title: "Security audit for operators",
    time: "Tomorrow • 10:30 AM",
    description: "Renew RBAC matrix before contractor onboarding",
  },
  {
    title: "Water infrastructure review",
    time: "Dec 08 • 02:00 PM",
    description: "Joint meeting with utilities & community board",
  },
];

const highPriority = [
  {
    label: "Resident verification",
    tag: "CNIC",
    details: "18 profiles awaiting NADRA cross-check",
  },
  {
    label: "Plot compliance",
    tag: "Commercial",
    details: "Collect tax docs for 6 overdue shops",
  },
  {
    label: "Maintenance window",
    tag: "IT",
    details: "Portal downtime scheduled Sun 1 AM",
  },
];

export default function Home() {
  const { isAuthenticated } = useAppStore();

  if (!isAuthenticated) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-2xl border border-dashed border-border/70 bg-white/70 p-10 text-center shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">AUCHS</p>
        <h1 className="mt-2 text-3xl font-semibold text-foreground">Society Management Console</h1>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Please authenticate with an allowed role to access resident records, plot assignments, and compliance dashboards.
        </p>
        <Link href="/login" className="mt-6">
          <Button size="lg">Login to AUCHS</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {quickStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border/60 bg-white/70 p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/30"
          >
            <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
            <div className="mt-3 flex items-baseline justify-between">
              <span className="text-3xl font-semibold text-foreground">{stat.value}</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{stat.trend}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{stat.detail}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="col-span-2 space-y-4 rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Live modules</h2>
              <p className="text-sm text-muted-foreground">Jump into users, plots, or compliance workflows.</p>
            </div>
            <Button variant="outline" size="sm">
              View all modules
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-blue-500/10 to-blue-500/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-blue-500">Users</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">Role Management</h3>
              <p className="mt-1 text-sm text-blue-900/80">
                Super Admin, Society Admin, Residents, Operators, Members (view-only)
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="rounded-full bg-white/70 px-2 text-blue-600">RBAC</span>
                <span className="rounded-full bg-white/70 px-2 text-blue-600">CNIC</span>
                <span className="rounded-full bg-white/70 px-2 text-blue-600">Audit</span>
              </div>
              <Link href="/users" className="mt-5 inline-flex text-sm font-semibold text-blue-700">
                Go to Users →
              </Link>
            </div>
            <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-500">Plots</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">Inventory & Phases</h3>
              <p className="mt-1 text-sm text-emerald-900/80">
                Track plot size, division, status, assigned residents, and compliance requirements.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <span className="rounded-full bg-white/70 px-2 text-emerald-600">Availability</span>
                <span className="rounded-full bg-white/70 px-2 text-emerald-600">Assignment</span>
                <span className="rounded-full bg-white/70 px-2 text-emerald-600">Documents</span>
              </div>
              <Link href="/plots" className="mt-5 inline-flex text-sm font-semibold text-emerald-700">
                Go to Plots →
              </Link>
            </div>
          </div>
        </div>
        <div className="space-y-4 rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Priority queue</h2>
            <Button variant="ghost" size="sm">View board</Button>
          </div>
          <div className="space-y-3">
            {highPriority.map((item) => (
              <div key={item.label} className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <span className="rounded-full bg-primary/10 px-2 text-xs font-semibold uppercase tracking-wide text-primary">
                    {item.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Operational timeline</h2>
              <p className="text-sm text-muted-foreground">Tasks synced from admin workspace.</p>
            </div>
            <Button variant="outline" size="sm">Schedule</Button>
          </div>
          <div className="mt-4 space-y-4">
            {timeline.map((event) => (
              <div key={event.title} className="rounded-2xl border border-border/60 bg-muted/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{event.time}</p>
                <h3 className="mt-2 text-base font-semibold text-foreground">{event.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border/60 bg-white/80 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Quick compliance checklist</h2>
              <p className="text-sm text-muted-foreground">Stay ahead of audits & verifications.</p>
            </div>
            <Button variant="ghost" size="sm">Export</Button>
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/10 p-4">
              <div>
                <p className="font-semibold text-foreground">RBAC review</p>
                <p className="text-muted-foreground">Confirm members remain view-only</p>
              </div>
              <Button size="sm">Review</Button>
            </li>
            <li className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/10 p-4">
              <div>
                <p className="font-semibold text-foreground">CNIC vault</p>
                <p className="text-muted-foreground">Encrypt newly uploaded documents</p>
              </div>
              <Button size="sm" variant="outline">Secure</Button>
            </li>
            <li className="flex items-center justify-between rounded-2xl border border-border/60 bg-muted/10 p-4">
              <div>
                <p className="font-semibold text-foreground">Plot audit</p>
                <p className="text-muted-foreground">Reconcile physical vs digital registry</p>
              </div>
              <Button size="sm">Start</Button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
