# Auditoria de áudio — `public/audio/*.mp3` (48 arquivos, nada alterado)

Medição via `ffprobe` (`format=duration`) em todos os 48 MP3.

## Estatísticas

| Métrica | Valor |
|---|---|
| Arquivos | 48 |
| Duração média | 1min34s (93,8 s) |
| Mediana | 1min23s (82,9 s) |
| Mínimo | 1min01s — `jornada-dia-23-recomecar-e-permitido.mp3` |
| Máximo | 2min28s — `quando-a-mente-nao-para.mp3` |
| Duração total | 75,1 min |
| Tamanho total | 27,0 MB (~0,56 MB por arquivo) |

## Distribuição por faixa

| Faixa | Arquivos | % |
|---|---|---|
| < 2 min | 35 | 72,9% |
| 2–3 min | 13 | 27,1% |
| 3–4 min | 0 | 0% |
| 4–6 min | 0 | 0% |
| > 6 min | 0 | 0% |

**Nenhum arquivo chega a 3 minutos.** Zero áudios na faixa de "aproximadamente 5 minutos".

## Confronto com a promessa comercial — P1

- `SalesPage.tsx:50` "experiência simples que cabe em aproximadamente 5 minutos do seu dia"
- `SalesPage.tsx:112` "Dedique cerca de 5 minutos e siga seu dia"
- `SalesPage.tsx:148` "Conteúdos de cerca de 5 minutos"
- `Faq.tsx:8` "Cada conteúdo foi pensado para caber em aproximadamente 5 minutos"
- `Faq.tsx:16` **"A maioria fica em torno de 5 minutos. Há conteúdos ainda mais curtos... e outros um pouco mais longos"**

A afirmação do FAQ é factualmente incorreta em duas frentes: a maioria não fica em torno de 5 minutos (a mediana é 1min23s, 31% do prometido) e **não existe nenhum conteúdo "um pouco mais longo"** — o teto absoluto é 2min28s, menos da metade do que a copy anuncia. O áudio mais longo do catálogo é mais curto que o piso da promessa.

Risco: comprador que paga R$ 19,00 esperando sessões de ~5 min recebe conteúdo com metade a um terço da duração — argumento direto para reembolso dentro dos 7 dias e para reclamação de publicidade enganosa.

Observação secundária: os 28 áudios da jornada são os mais curtos do acervo (média 1min17s, do dia 22 em diante quase todos ≈1min05s), o que sugere encurtamento progressivo ao longo da série.

## Caminhos possíveis (não executados)

1. Ajustar a copy para a realidade medida ("de 1 a 3 minutos", "cinco minutos com Deus" mantido como posicionamento de pausa, não de duração de faixa) — mudança só de texto, sem tocar em produto.
2. Manter a promessa e reproduzir/estender os áudios para 4–6 min — mudança de conteúdo, fora do escopo do site.
3. Híbrido: manter "cinco minutos" como nome/posicionamento da pausa e declarar explicitamente a duração das faixas no FAQ.

Nenhum arquivo foi editado.
