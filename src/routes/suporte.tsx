import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/jornada/LegalPage";

const title = "Suporte — 5 Minutos de Fé";
const description = "Como obter ajuda com pagamento, acesso e uso do aplicativo 5 Minutos de Fé.";

export const Route = createFileRoute("/suporte")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <LegalPage eyebrow="Ajuda" title="Suporte">
      <LegalSection heading="Fale com o suporte">
        <p>
          Atendimento por e-mail:{" "}
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="text-gold-light underline decoration-gold/40 underline-offset-4"
          >
            {SUPPORT_EMAIL}
          </a>
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${SUPPORT_EMAIL}?subject=Suporte%20-%205%20Minutos%20de%20F%C3%A9`}
            className="cta-gold inline-flex min-h-14 items-center justify-center rounded-2xl px-7 py-4 text-sm font-bold tracking-[0.08em]"
          >
            FALAR COM O SUPORTE
          </a>
        </p>
      </LegalSection>
      <LegalSection heading="Dúvidas sobre pagamento ou acesso">
        <p>
          Para questões de cobrança, confirmação de compra ou liberação de acesso, escreva para o
          e-mail acima ou utilize os canais informados no checkout e no e-mail de confirmação enviado
          pela Perfect Pay.
        </p>
      </LegalSection>
      <LegalSection heading="Como agilizar o atendimento">
        <p>
          Escreva a partir do mesmo e-mail utilizado na compra, informe os dados da transação e
          descreva com clareza a dificuldade encontrada, incluindo o dispositivo e o navegador
          usados.
        </p>
      </LegalSection>
      <LegalSection heading="Dúvidas sobre o conteúdo">
        <p>
          As perguntas mais comuns sobre uso, duração de cada conteúdo, acesso e garantia estão
          respondidas na seção de dúvidas frequentes da página do 5 Minutos de Fé.
        </p>
      </LegalSection>
      <LegalSection heading="Importante">
        <p>
          O suporte trata de acesso e uso do aplicativo. Os conteúdos são devocionais e educacionais
          e não substituem acompanhamento pastoral, médico ou psicológico.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
