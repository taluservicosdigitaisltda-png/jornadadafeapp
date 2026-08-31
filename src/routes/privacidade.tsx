import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/jornada/LegalPage";

const title = "Política de Privacidade — 5 Minutos de Fé";
const description =
  "Como o 5 Minutos de Fé trata respostas do quiz, parâmetros de campanha e dados de pagamento processados pela Perfect Pay.";

export const Route = createFileRoute("/privacidade")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalPage eyebrow="Documentos" title="Política de Privacidade">
      <LegalSection heading="Dados que não pedimos">
        <p>
          O quiz desta página não solicita nome, e-mail, telefone ou qualquer outro dado de
          identificação pessoal. Não há cadastro e não há login.
        </p>
      </LegalSection>
      <LegalSection heading="Informações guardadas no seu navegador">
        <p>
          Suas respostas do quiz e os parâmetros de campanha presentes no endereço da página podem
          ser mantidos temporariamente na sessão do seu navegador (sessionStorage), apenas para
          montar o resultado e preservar a origem do acesso até o checkout. Esses dados são apagados
          quando você fecha a aba ou refaz o quiz.
        </p>
      </LegalSection>
      <LegalSection heading="Medição de navegação">
        <p>
          A página pode registrar eventos técnicos de uso (por exemplo, início do quiz, conclusão e
          clique no botão de compra) quando ferramentas de análise estiverem configuradas. Esses
          registros servem para entender o funcionamento da experiência e não são usados para criar
          diagnósticos pessoais, médicos ou religiosos.
        </p>
      </LegalSection>
      <LegalSection heading="Pagamento">
        <p>
          Ao escolher comprar, você é direcionado ao ambiente da Perfect Pay. Os dados informados no
          pagamento são tratados por essa plataforma, conforme os termos e a política de privacidade
          exibidos por ela durante a compra.
        </p>
      </LegalSection>
      <LegalSection heading="Seus direitos">
        <p>
          Você pode limpar as informações guardadas no navegador a qualquer momento, apagando os
          dados do site nas configurações do seu navegador ou refazendo o quiz. Solicitações
          relacionadas a uma compra devem ser feitas pelos canais informados no checkout e no e-mail
          de confirmação.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
