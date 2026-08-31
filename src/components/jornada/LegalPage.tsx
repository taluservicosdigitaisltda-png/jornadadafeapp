import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

import { Footer } from "./SalesPage";
import { BrandLogo, container } from "./shared";

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <main className={`${container} py-12 lg:py-16`}>
        <BrandLogo width={220} eager />
        <p className="eyebrow mt-8 block">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-2xl leading-tight text-ivory sm:text-3xl lg:text-4xl">
          {title}
        </h1>
        <div className="legal mt-8 max-w-3xl space-y-6 text-base leading-relaxed text-sand">
          {children}
        </div>
        <Link
          to="/"
          className="mt-10 inline-flex min-h-12 items-center rounded-xl border border-gold/40 px-5 text-sm font-semibold text-gold-light transition-colors hover:bg-gold/10"
        >
          ← Voltar para o início
        </Link>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg text-gold-light sm:text-xl">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
