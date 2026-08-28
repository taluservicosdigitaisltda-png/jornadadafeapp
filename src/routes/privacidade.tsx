import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/jornada/LegalPage";

export const Route = createFileRoute("/privacidade")({
  head: () => ({ meta: [{ title: "Política de Privacidade — 5 Minutos de Fé" }] }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>
        Esta página não solicita nome, e-mail ou telefone durante o quiz. As respostas e os
        parâmetros de campanha recebidos no endereço da página podem ser mantidos temporariamente
        na sessão do seu navegador para personalizar o resultado e preservar a origem do acesso.
      </p>
      <p>
        A página pode registrar eventos técnicos de navegação quando ferramentas de análise forem
        configuradas. Esses registros servem para entender o funcionamento da experiência e não
        devem ser usados para criar diagnósticos pessoais ou religiosos.
      </p>
      <p>
        Ao escolher comprar, você será direcionado ao ambiente da Perfect Pay. O tratamento dos
        dados informados no pagamento segue também os termos e a política de privacidade exibidos
        por essa plataforma.
      </p>
    </LegalPage>
  );
}
