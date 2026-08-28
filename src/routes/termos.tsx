import { createFileRoute } from "@tanstack/react-router";

import { LegalPage } from "@/components/jornada/LegalPage";

export const Route = createFileRoute("/termos")({
  head: () => ({ meta: [{ title: "Termos de Uso — Pausa de Fé" }] }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Termos de Uso">
      <p>
        Pausa de Fé disponibiliza conteúdos devocionais e educacionais para uso pessoal. O
        acesso não concede autorização para copiar, revender, redistribuir ou publicar os materiais
        como se fossem próprios.
      </p>
      <p>
        O aplicativo é uma iniciativa independente e não representa nem possui endosso de padres,
        pastores, igrejas ou personalidades religiosas. Seus conteúdos não substituem acompanhamento
        pastoral, médico ou psicológico.
      </p>
      <p>
        Não são prometidos cura, milagre ou resultado espiritual específico. A experiência depende
        da forma e do ritmo com que cada pessoa utiliza os conteúdos.
      </p>
    </LegalPage>
  );
}
