import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/jornada/LegalPage";

const title = "Termos de Uso — 5 Minutos de Fé";
const description =
  "Condições de uso dos conteúdos devocionais e educacionais do aplicativo 5 Minutos de Fé.";

export const Route = createFileRoute("/termos")({
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
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage eyebrow="Documentos" title="Termos de Uso">
      <LegalSection heading="Objeto">
        <p>
          O 5 Minutos de Fé disponibiliza conteúdos devocionais e educacionais — orações guiadas e
          narradas, reflexões, jornada guiada de 28 dias e diário privado — para uso pessoal de quem
          adquire o acesso.
        </p>
      </LegalSection>
      <LegalSection heading="Uso permitido">
        <p>
          O acesso é individual. Não é autorizado copiar, revender, redistribuir, exibir
          publicamente ou publicar os materiais como se fossem próprios, no todo ou em parte.
        </p>
      </LegalSection>
      <LegalSection heading="Independência da marca">
        <p>
          O 5 Minutos de Fé é uma iniciativa independente. Não representa e não possui vínculo,
          patrocínio ou endosso de padres, pastores, igrejas ou personalidades religiosas.
        </p>
      </LegalSection>
      <LegalSection heading="Limites do conteúdo">
        <p>
          Os conteúdos não substituem acompanhamento pastoral, médico ou psicológico. Não são
          prometidos cura, milagre, libertação, prosperidade ou qualquer resultado espiritual
          específico. A leitura do momento oferecida no quiz é devocional e não constitui diagnóstico
          médico ou psicológico.
        </p>
      </LegalSection>
      <LegalSection heading="Disponibilidade e alterações">
        <p>
          O conteúdo adquirido permanece disponível conforme informado na oferta. Melhorias técnicas
          e ajustes de organização podem ocorrer, sem redução do que foi adquirido. Estes termos
          podem ser atualizados; a versão vigente é sempre a publicada nesta página.
        </p>
      </LegalSection>
      <LegalSection heading="Pagamento">
        <p>
          A compra é única, no valor de R$ 19,00, sem mensalidade, e é processada pela Perfect Pay.
          As condições de cobrança, emissão e garantia apresentadas no checkout integram estes
          termos.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
