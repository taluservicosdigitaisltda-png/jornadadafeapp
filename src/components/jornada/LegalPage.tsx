import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { BrandLogo, container } from "./shared";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className={`${container} min-h-screen py-12 sm:py-16`}>
      <Link to="/" aria-label="Voltar para o início">
        <BrandLogo width={180} eager />
      </Link>
      <article className="card-premium mt-10 max-w-3xl rounded-[24px] p-6 sm:p-10">
        <p className="eyebrow">Jornada da Fé</p>
        <h1 className="mt-4 text-3xl text-ivory sm:text-4xl">{title}</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-sand sm:text-base">
          {children}
        </div>
      </article>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-11 items-center rounded-xl border border-gold/40 px-5 text-sm text-gold-light transition-colors hover:bg-gold/10"
      >
        ← Voltar para o quiz
      </Link>
    </main>
  );
}
