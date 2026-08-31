import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/jornada/LegalPage";

const title = "Política de Reembolso — 5 Minutos de Fé";
const description =
  "Como funciona a garantia de 7 dias e o pedido de reembolso da compra do aplicativo 5 Minutos de Fé.";

export const Route = createFileRoute("/reembolso")({
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
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalPage eyebrow="Documentos" title="Política de Reembolso">
      <LegalSection heading="Prazo de garantia">
        <p>
          A compra do 5 Minutos de Fé possui garantia de 7 dias, contados a partir da confirmação do
          pagamento. Dentro desse período você pode avaliar o conteúdo e solicitar o reembolso.
        </p>
      </LegalSection>
      <LegalSection heading="Como solicitar">
        <p>
          A solicitação é feita pelos canais indicados no checkout e no e-mail de confirmação
          enviado pela Perfect Pay, plataforma responsável pelo processamento do pagamento.
        </p>
        <p>
          Utilize o mesmo e-mail informado na compra e tenha em mãos os dados da transação para
          facilitar a localização do pedido.
        </p>
      </LegalSection>
      <LegalSection heading="Análise e processamento">
        <p>
          Após o pedido, a análise, o prazo de devolução e a forma de crédito seguem os
          procedimentos da plataforma de pagamento e do meio utilizado na compra. Não há promessa de
          reembolso automático ou instantâneo.
        </p>
      </LegalSection>
      <LegalSection heading="Depois do prazo">
        <p>
          Encerrado o período de garantia, o acesso ao conteúdo adquirido permanece disponível e não
          há cobrança recorrente. Pedidos fora do prazo serão avaliados conforme as condições da
          plataforma de pagamento e a legislação aplicável.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
