import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/jornada/LegalPage";

export const Route = createFileRoute("/suporte")({
  head: () => ({ meta: [{ title: "Suporte — Jornada da Fé" }] }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <LegalPage title="Suporte">
      <p>
        Para receber ajuda com pagamento ou acesso, consulte os canais de atendimento informados no
        checkout e no e-mail de confirmação da compra. Assim, sua solicitação será direcionada ao
        atendimento responsável sem expor dados pessoais nesta página.
      </p>
      <p>
        Ao entrar em contato, utilize o mesmo e-mail informado durante a compra e descreva com
        clareza a dificuldade encontrada.
      </p>
    </LegalPage>
  );
}
