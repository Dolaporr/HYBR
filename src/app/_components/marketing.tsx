import Link from "next/link";
import type { ReactNode } from "react";
import { figmaAssets, footerGroups, navigation, siteContent } from "@/content/site";

export const imageUrl = figmaAssets.people;

export function Header({ active }: { active?: "who" | "what" | "insights" }) {
  const linkClass = (key: "who" | "what" | "insights") =>
    active === key ? "text-hybr-blue" : "text-black";

  return (
    <header className="absolute left-0 right-0 top-0 z-20 px-6">
      <div className="mx-auto flex min-h-28 max-w-[1200px] flex-col items-start justify-center gap-5 py-6 md:h-[152px] md:flex-row md:items-center md:justify-between md:py-0">
        <Link className="block h-10 w-[128px] overflow-hidden md:h-14 md:w-[179px]" href="/">
          <img alt={siteContent.brand} className="h-full w-full object-contain" src={figmaAssets.logoBlue} />
        </Link>
        <nav className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase sm:gap-5 md:gap-8 md:text-sm">
          {navigation.map((item) => (
            <Link className={linkClass(item.key)} href={item.href} key={item.key}>
              {item.label}
            </Link>
          ))}
          <Link
            className="rounded-full border-2 border-hybr-blue bg-hybr-blue px-4 py-2 text-white md:px-6 md:py-3"
            href="/contact"
          >
            Let&apos;s Talk
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-black px-6 py-14 text-white md:py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <img
            alt=""
            className="pointer-events-none absolute -bottom-24 -right-40 hidden size-[360px] opacity-50 lg:block"
            src={figmaAssets.footerPattern}
          />
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-bold uppercase">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.label}-${link.href}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-bold uppercase">Follow us</h3>
            <p className="mt-4 text-sm">{siteContent.socialLinks.join(" ")}</p>
            <div className="mt-8">
              <Button href="/contact" variant="white">
                Let&apos;s Talk
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-6 text-sm uppercase md:mt-20 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-5 md:gap-8">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
          <img alt={siteContent.brand} className="h-10 w-[128px] object-contain" src={figmaAssets.logoWhite} />
          <span>{siteContent.footerCopyright}</span>
        </div>
      </div>
    </footer>
  );
}

export function Button({
  children,
  href,
  variant = "outline",
}: {
  children: ReactNode;
  href: string;
  variant?: "primary" | "outline" | "dark" | "white";
}) {
  const variants = {
    primary: "border-hybr-blue bg-hybr-blue text-white",
    outline: "border-hybr-green bg-white text-hybr-green",
    dark: "border-black bg-white text-black",
    white: "border-white bg-white text-black",
  };

  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center rounded-full border-2 px-5 text-sm font-semibold md:min-h-[56px] md:px-8 md:text-base ${variants[variant]}`}
      href={href}
    >
      {children}
    </Link>
  );
}

export function Label({ children }: { children: ReactNode }) {
  return <p className="text-sm font-bold uppercase md:text-base">{children}</p>;
}

export function ImagePanel({
  className = "",
  children,
  overlay = "linear-gradient(90deg, rgba(0,0,0,.32), rgba(0,0,0,.08))",
  src = imageUrl,
}: {
  className?: string;
  children?: ReactNode;
  overlay?: string;
  src?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-black ${className}`}
      style={{
        backgroundImage: `${overlay}, url(${src})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {children}
    </div>
  );
}

export function PageHero({
  active,
  title,
  subtitle,
  menu,
}: {
  active?: "who" | "what" | "insights";
  title: string;
  subtitle: string;
  menu?: { label: string; href: string }[];
}) {
  return (
    <>
      <Header active={active} />
      <section className="relative min-h-[540px] px-6 pt-48 md:min-h-[705px] md:pt-[232px]">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="font-display text-[56px] font-medium leading-none sm:text-[76px] md:text-[112px] lg:text-[150px]">
            {title}
          </h1>
          <p className="mt-4 max-w-[760px] text-lg font-medium leading-relaxed md:text-2xl">
            {subtitle}
          </p>
        </div>
        {menu ? (
          <aside className="mx-auto mt-10 max-w-[1200px] rounded-3xl bg-black p-6 text-white xl:absolute xl:right-[-259px] xl:top-[238px] xl:mt-0 xl:block xl:h-[197px] xl:w-[337px] xl:overflow-hidden xl:rounded-bl-[1000px] xl:rounded-br-[800px] xl:rounded-tl-[1000px] xl:p-0">
            <ImagePanel className="absolute inset-0 opacity-70" />
            <p className="relative z-10 mb-4 font-display text-base font-bold xl:absolute xl:left-8 xl:top-1/2 xl:mb-0 xl:-translate-y-1/2 xl:-rotate-90">
              CONTENT
            </p>
            <nav className="relative z-10 flex flex-wrap gap-3 text-base font-medium xl:absolute xl:right-[108px] xl:top-1/2 xl:-translate-y-1/2 xl:flex-col xl:text-right">
              {menu.map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        ) : null}
      </section>
    </>
  );
}

export function CaseCard({
  dark = false,
  imageSrc = figmaAssets.caseStudy,
}: {
  dark?: boolean;
  imageSrc?: string;
}) {
  return (
    <article
      className={`rounded-3xl p-6 md:p-10 ${dark ? "bg-black text-white" : "bg-[#f1f1f1] text-black"}`}
      style={
        dark
          ? {
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.72)), url(${imageSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : undefined
      }
    >
      <Label>Case Study</Label>
      <h3 className="mt-3 font-display text-3xl font-medium md:text-4xl">
        One Liner For Specific Case Study
      </h3>
      <p className="mt-4 text-lg leading-relaxed">
        A captivating statement about what service was offered to the company.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between md:mt-14">
        <span className="font-bold uppercase">Company Name</span>
        <Button href="/case-studies/one-liner" variant={dark ? "white" : "dark"}>
          Read More
        </Button>
      </div>
    </article>
  );
}

export function ListingControls() {
  return (
    <div className="flex flex-wrap gap-3 md:gap-4">
      {["Search", "Sort by", "Topic", "Duration"].map((item) => (
        <button
          className="min-h-11 rounded-full border-2 border-black px-5 text-sm font-medium md:min-h-[52px] md:px-8 md:text-base"
          key={item}
          type="button"
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export function InsightCard({
  kind,
  title,
  body,
  imageSrc = figmaAssets.news,
}: {
  kind: string;
  title: string;
  body?: string;
  imageSrc?: string;
}) {
  return (
    <article
      className="rounded-3xl bg-black p-6 text-white md:p-8"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(0,0,0,.18), rgba(0,0,0,.68)), url(${imageSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Label>{kind}</Label>
      <h3 className="mt-24 font-display text-3xl font-medium md:mt-36 md:text-4xl">
        {title}
      </h3>
      {body ? <p className="mt-4 text-lg leading-relaxed">{body}</p> : null}
      <div className="mt-8">
        <Button href="/insights/articles/specific-article" variant="dark">
          Read More
        </Button>
      </div>
    </article>
  );
}

export function WhatWeDoCta() {
  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-8 rounded-3xl bg-black p-6 text-white md:p-12 lg:grid-cols-[1fr_320px] lg:items-end">
        <div>
          <Label>What We Do</Label>
          <h2 className="mt-3 font-display text-4xl font-medium leading-tight md:text-5xl">
            Discover the right opportunities, develop the right solutions, and
            deploy them with confidence.
          </h2>
          <p className="mt-5 max-w-[780px] text-xl leading-relaxed">
            Helping organisations replace guesswork with evidence, clarity, and
            smarter strategy.
          </p>
        </div>
        <Button href="/contact" variant="white">
          Let&apos;s Help
        </Button>
      </div>
    </section>
  );
}
