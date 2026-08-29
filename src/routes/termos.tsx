import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, LegalSection } from "@/components/jornada/LegalPage";

const title = "Termos de Uso — Jornada da Fé";
const description =
  "Condições de uso dos conteúdos devocionais e educacionais do Aplicativo Jornada da Fé.";

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
          A Jornada da Fé disponibiliza conteúdos devocionais e educacionais — orações narradas,
          reflexões bíblicas, caminhada guiada de 28 dias, diário e materiais em PDF — para uso
          pessoal de quem adquire o acesso.
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
          A Jornada da Fé é uma iniciativa independente. Não representa e não possui vínculo,
          patrocínio ou endosso de padres, pastores, igrejas ou personalidades religiosas.
        </p>
      </LegalSection>
      <LegalSection heading="Limites do conteúdo">
        <p>
          Os conteúdos não substituem acompanhamento pastoral, médico ou psicológico. Não são
          prometidos cura, milagre, libertação, prosperidade ou qualquer resultado espiritual
          específico. A experiência depende da forma e do ritmo com que cada pessoa utiliza os
          materiais.
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
          A compra é processada pela Perfect Pay, e as condições de cobrança, emissão e garantia
          apresentadas no checkout integram estes termos.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
