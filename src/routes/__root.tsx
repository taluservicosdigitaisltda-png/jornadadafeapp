import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { faviconDataUri } from "../assets/embedded-assets";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-16">
      <div className="mx-auto max-w-lg text-center">
        <p className="eyebrow">Página não encontrada</p>
        <h1 className="mt-4 text-3xl leading-tight text-ivory sm:text-4xl">
          Este endereço não existe mais
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-sand sm:text-base">
          Talvez o link tenha mudado. Você pode voltar ao início e fazer o seu Mapa de Fé em cerca de
          1 minuto.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <Link
            to="/"
            className="cta-gold inline-flex min-h-14 items-center justify-center rounded-2xl px-7 py-4 text-sm font-bold tracking-[0.06em]"
          >
            FAZER MEU MAPA DE FÉ
          </Link>
          <a
            href="mailto:5minutosdefeapp@gmail.com"
            className="text-xs text-sand underline decoration-gold/40 underline-offset-4"
          >
            Falar com o suporte
          </a>
        </div>
      </div>
    </main>
  );
}


function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Algo não funcionou como esperado. Tente atualizar ou volte ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
              Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "5 Minutos de Fé — Orações guiadas e reflexões para o seu dia" },
      {
        name: "description",
        content:
          "Encontre orações guiadas e reflexões para diferentes momentos da vida em uma experiência devocional de aproximadamente 5 minutos por dia.",
      },
      { property: "og:site_name", content: "5 Minutos de Fé" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", type: "image/png", href: faviconDataUri },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    void import("../lib/meta-pixel").then((m) => m.initMetaPixel());
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

