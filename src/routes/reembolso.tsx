import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/jornada/LegalPage";

export const Route = createFileRoute("/reembolso")({
  head: () => ({ meta: [{ title: "Política de Reembolso — Pausa de Fé" }] }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <LegalPage title="Política de Reembolso">
      <p>
        A compra possui garantia de 7 dias. Dentro desse período, a solicitação de reembolso pode
        ser feita seguindo as condições e os canais apresentados no checkout e na confirmação da
        compra enviada pela Perfect Pay.
      </p>
      <p>
        Utilize o mesmo e-mail informado no pagamento e tenha em mãos os dados da transação para
        facilitar a localização do pedido. A análise e o processamento seguem os procedimentos da
        plataforma responsável pelo pagamento.
      </p>
    </LegalPage>
  );
}
