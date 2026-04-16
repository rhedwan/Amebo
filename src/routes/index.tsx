import { createFileRoute } from "@tanstack/react-router";
import heroMap from "@/assets/hero-map.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Amebo — Lagos walks with you" },
      {
        name: "description",
        content:
          "A community-powered safety and accessibility map for Lagos pedestrians. Crowdsourced ramps, hazards, and real-time voice and text alerts.",
      },
      { property: "og:title", content: "Amebo — Lagos walks with you" },
      {
        property: "og:description",
        content:
          "Crowdsourced accessibility for Lagos. Voice-guided alerts, hazard reports, and a living map built by the community.",
      },
      { property: "og:image", content: heroMap },
      { name: "twitter:image", content: heroMap },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Inclusive />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a href="#" className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-2xl font-semibold tracking-tight">Amebo</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <a href="#features" className="hover:text-accent transition-colors">Features</a>
          <a href="#how" className="hover:text-accent transition-colors">How it works</a>
          <a href="#inclusive" className="hover:text-accent transition-colors">Inclusive design</a>
        </nav>
        <a
          href="#join"
          className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
        >
          Join the waitlist
        </a>
      </div>
    </header>
  );
}

function Logo() {
  return (
    <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-warm shadow-glow">
      <span className="absolute inset-0 rounded-2xl bg-gradient-warm animate-ping-slow opacity-50" />
      <svg viewBox="0 0 24 24" fill="none" className="relative h-5 w-5 text-coral-foreground">
        <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        <circle cx="12" cy="9" r="2.5" fill="currentColor" />
      </svg>
    </span>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-[30rem] w-[30rem] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-10">
        <div className="lg:col-span-6 animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Built for Lagos · Beta soon
          </span>
          <h1 className="mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Lagos <em className="font-normal italic text-accent">walks</em> with you.
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground sm:text-xl">
            Amebo is a community-powered map that surfaces ramps, hazards, and safe paths in
            real time — with voice and text alerts designed for every pedestrian.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#join"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03]"
            >
              Join the waitlist
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {["bg-accent", "bg-primary", "bg-secondary border border-border"].map((c, i) => (
                <span key={i} className={`h-8 w-8 rounded-full ${c} ring-2 ring-background`} />
              ))}
            </div>
            <p>Built with disability advocates across Lagos.</p>
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div className="relative overflow-hidden rounded-[2rem] shadow-glow ring-1 ring-border">
            <img
              src={heroMap}
              alt="Illustrated Lagos street map showing accessibility pins, ramps, and pedestrians including wheelchair and cane users"
              width={1536}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <FloatingCard
            className="absolute -bottom-6 -left-4 sm:-left-10"
            tone="cream"
            icon={<AlertIcon />}
            title="Open gutter ahead"
            sub="Reported 2 min ago · 34m away"
          />
          <FloatingCard
            className="absolute -top-6 right-2 sm:-right-8"
            tone="forest"
            icon={<RampIcon />}
            title="Wheelchair ramp"
            sub="Verified by 12 neighbours"
          />
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className = "",
  tone,
  icon,
  title,
  sub,
}: {
  className?: string;
  tone: "cream" | "forest";
  icon: React.ReactNode;
  title: string;
  sub: string;
}) {
  const isForest = tone === "forest";
  return (
    <div
      className={`flex items-center gap-3 rounded-2xl px-4 py-3 shadow-soft backdrop-blur ${
        isForest
          ? "bg-primary text-primary-foreground"
          : "bg-card/95 text-foreground ring-1 ring-border"
      } ${className}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          isForest ? "bg-primary-foreground/15" : "bg-accent/15 text-accent"
        }`}
      >
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold leading-tight">{title}</p>
        <p className={`text-xs ${isForest ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {sub}
        </p>
      </div>
    </div>
  );
}

function Stats() {
  const stats = [
    { k: "1 in 7", v: "Lagosians live with a disability" },
    { k: "24/7", v: "Real-time community reports" },
    { k: "<5 MB", v: "Lightweight by design" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((s) => (
          <div key={s.k} className="px-8 py-10 text-center md:py-12">
            <p className="font-display text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
              {s.k}
            </p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const items = [
    {
      icon: <PinIcon />,
      title: "Live accessibility map",
      body: "Two layers in one app: permanent infrastructure like ramps and curb cuts, plus dynamic obstacles that change every day.",
    },
    {
      icon: <WaveIcon />,
      title: "Voice & text alerts",
      body: "Multi-modal warnings designed from day one for blind, low-vision, deaf, and hard-of-hearing users.",
    },
    {
      icon: <ShieldIcon />,
      title: "Trusted by neighbours",
      body: "Reports are validated by the community and a smart moderation layer to keep your map honest.",
    },
    {
      icon: <FeatherIcon />,
      title: "Featherlight",
      body: "Built to run smoothly on basic Android devices and intermittent networks — accessible to everyone.",
    },
  ];
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Why Amebo</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            A map that sees what other maps miss.
          </h2>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                {it.icon}
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Spot it",
      body: "See a broken pavement, an open gutter, or a brand new ramp? Open Amebo and drop a pin in seconds.",
    },
    {
      n: "02",
      title: "Share it",
      body: "Add a quick voice note or photo. Your neighbours confirm the report so the map stays trustworthy.",
    },
    {
      n: "03",
      title: "Walk safer",
      body: "Get voice-guided or text alerts as you approach hazards, and discover the most accessible route ahead.",
    },
  ];
  return (
    <section id="how" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-forest" />
      <div className="mx-auto max-w-7xl px-6 text-primary-foreground lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">How it works</p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
              Three taps. One safer city.
            </h2>
          </div>
          <p className="max-w-md text-primary-foreground/70">
            Every report, no matter how small, makes Lagos a little easier to navigate for someone else.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-primary-foreground/10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-primary p-8 lg:p-10">
              <p className="font-display text-5xl font-semibold text-accent">{s.n}</p>
              <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-primary-foreground/75">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Inclusive() {
  const modes = [
    {
      label: "For blind & low-vision users",
      detail: "Clear voice guidance, large tap targets, and full screen-reader support.",
      icon: <EarIcon />,
    },
    {
      label: "For deaf & hard-of-hearing users",
      detail: "Vibration patterns and high-contrast text alerts, no audio required.",
      icon: <ChatIcon />,
    },
    {
      label: "For wheelchair users",
      detail: "Routes that prefer ramps, smooth pavements, and step-free entrances.",
      icon: <WheelIcon />,
    },
  ];
  return (
    <section id="inclusive" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Universal design</p>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Designed <em className="italic text-accent">with</em> the community, not <span className="whitespace-nowrap">for it.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            We co-create Amebo with Lagosians who navigate the city differently every day. Every
            screen, every alert, every gesture is shaped by real feedback.
          </p>
          <a
            href="#join"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            Become a co-creator
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        <ul className="space-y-4">
          {modes.map((m) => (
            <li
              key={m.label}
              className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                {m.icon}
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight">{m.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="join" className="px-6 pb-24 lg:px-10 lg:pb-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-warm p-10 text-coral-foreground shadow-glow sm:p-16 lg:p-20">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral-foreground/10 blur-2xl" />
        <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <h2 className="text-balance font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Be among the first to walk Lagos with Amebo.
            </h2>
            <p className="mt-4 max-w-xl text-coral-foreground/85">
              Join the waitlist for early access and help shape the most accessible city map ever built.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-3 lg:col-span-2"
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="flex flex-col gap-3 rounded-2xl bg-coral-foreground/10 p-2 backdrop-blur sm:flex-row">
              <input
                id="email"
                type="email"
                required
                placeholder="you@lagos.ng"
                className="w-full rounded-xl bg-coral-foreground px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
              >
                Notify me
              </button>
            </div>
            <p className="text-xs text-coral-foreground/70">
              No spam. Just a heads-up when Amebo opens its doors.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row lg:px-10">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="font-display text-base font-semibold text-foreground">Amebo</span>
        </div>
        <p>© {new Date().getFullYear()} Amebo. Made in Lagos with care.</p>
      </div>
    </footer>
  );
}

/* ---------- Icons ---------- */
function AlertIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M12 9v4m0 3.5h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function RampIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="9" cy="5" r="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M9 8v4l3 2 3 4M3 20h12l3-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 22s7-7.58 7-13a7 7 0 1 0-14 0c0 5.42 7 13 7 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}
function WaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M3 12h2m4 0h2m4 0h2m4 0h2M7 8v8m4-12v16m4-12v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function FeatherIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76ZM16 8 2 22M17.5 15H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function EarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M6 8a6 6 0 1 1 12 0c0 3-2 4-3 5s-2 2-2 3a2 2 0 1 1-4 0M9 11a3 3 0 1 1 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <path d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1.4 3.5A8 8 0 0 1 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M8 11h8M8 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
function WheelIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
      <circle cx="11" cy="18" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M11 4v6l4 2 2 4M9 4h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
