import json
import os
import pathlib
import sys
import html
import re
import unicodedata
import urllib.request

KEY = os.environ.get("AZURE_SPEECH_KEY", "").strip()
REGION = os.environ.get("AZURE_SPEECH_REGION", "").strip()
VOICE = os.environ.get("AZURE_SPEECH_VOICE", "pt-BR-MacerioMultilingualNeural").strip()
MANIFEST_FILE = os.environ.get("MANIFEST_FILE", "").strip()
OUTPUT_DIR = os.environ.get("OUTPUT_DIR", "public/audio/v2").strip()

if not KEY or not REGION:
    print("AZURE_SPEECH_KEY e AZURE_SPEECH_REGION precisam estar configurados como secrets.")
    sys.exit(1)

manifest_dir = pathlib.Path("audio/manifests")
out_dir = pathlib.Path(OUTPUT_DIR)
out_dir.mkdir(parents=True, exist_ok=True)

if MANIFEST_FILE:
    manifest_files = [pathlib.Path(MANIFEST_FILE)]
else:
    manifest_files = sorted(manifest_dir.glob("*.json"))

if not manifest_files:
    print("Nenhum manifesto encontrado.")
    sys.exit(1)

items = []
for manifest_path in manifest_files:
    if not manifest_path.exists():
        raise RuntimeError(f"Manifesto não encontrado: {manifest_path}")
    batch = json.loads(manifest_path.read_text(encoding="utf-8"))
    if not isinstance(batch, list):
        raise RuntimeError(f"Manifesto inválido: {manifest_path}")
    items.extend(batch)

seen = set()
for item in items:
    slug = item["slug"].strip()
    if slug in seen:
        raise RuntimeError(f"Slug duplicado no manifesto: {slug}")
    seen.add(slug)


def norm(value: str) -> str:
    value = unicodedata.normalize("NFKD", value)
    value = "".join(ch for ch in value if not unicodedata.combining(ch))
    return value.lower().replace("_", "-")


def category_for(slug: str) -> str:
    s = norm(slug)
    groups = [
        ("familia", ["familia", "discussao", "escutar", "palavras", "paciencia-com-o-outro"]),
        ("recomecos", ["recomec", "culpa", "perdao", "pequeno-passo"]),
        ("descanso", ["noite", "cansaco", "descanso", "solitude", "cuidar-tambem"]),
        ("confianca", ["medo-do-amanha", "dinheiro", "preocup", "nao-posso-controlar", "controlar"]),
        ("direcao", ["direcao", "decisao", "incerteza", "fe-no-cotidiano"]),
        ("esperanca", ["saudade", "espera", "respostas-demora", "resposta-importante"]),
        ("forca", ["forca", "dia-foi-pesado", "trabalho", "coragem", "motivacao", "sustenta"]),
        ("gratidao", ["agradec", "gratidao", "progresso", "suficiente", "olhar-para-tras", "novo-comeco-depois"]),
        ("presenca", ["sozinho", "pressa", "nao-sabe-o-que-dizer", "dizer-a-deus", "presenca"]),
        ("paz", ["respir", "mente", "silencio", "aqui-e-agora", "paz"]),
    ]
    for category, needles in groups:
        if any(n in s for n in needles):
            return category
    return "presenca"


CATEGORY_PRAYERS = {
    "paz": """Senhor, agora eu quero permanecer mais um pouco na Tua presença. Visita os lugares dentro de mim que estão acelerados. Acalma aquilo que está tentando resolver dez coisas ao mesmo tempo. Onde existe tensão, ensina-me a soltar. Onde existe medo, aproxima-me da realidade deste instante. Onde existe excesso de cobrança, lembra-me de que eu também sou humano e tenho limites. Eu entrego a Ti os pensamentos que voltam sem pedir licença, as conversas que continuo repetindo na cabeça e os cenários que ainda nem aconteceram. Dá-me serenidade para não alimentar cada pensamento como se fosse uma certeza. Ajuda-me a respirar, observar e escolher com calma o próximo passo. Que a Tua paz não seja para mim uma fuga dos problemas, mas um lugar interior de onde eu possa enfrentá-los com mais sabedoria. Guarda meu coração da pressa, da irritação e do impulso de responder antes de compreender. Se eu precisar esperar, ensina-me a esperar. Se eu precisar agir, mostra-me uma ação simples e possível. Se eu precisar descansar, dá-me permissão para parar sem culpa. Eu não quero sair desta oração exigindo que tudo esteja perfeito. Quero apenas sair mais inteiro, mais presente e mais consciente de que não preciso carregar tudo sozinho.""",
    "descanso": """Senhor, eu reconheço diante de Ti o meu cansaço. Às vezes eu continuo funcionando mesmo quando por dentro já passei do limite. Eu me acostumo a responder mensagens, resolver problemas, cuidar de pessoas e cumprir tarefas sem perceber o quanto meu corpo e minha mente estão pedindo pausa. Hoje eu não quero transformar descanso em culpa. Ensina-me a receber o descanso como parte do cuidado. Ajuda-me a deixar para amanhã aquilo que realmente pode esperar. Dá-me sabedoria para distinguir compromisso de excesso, responsabilidade de sobrecarga. Eu entrego o que ficou pendente, o que não saiu como planejei e o que eu gostaria de ter feito melhor. Se houve erro, mostra-me como corrigir no tempo certo, mas não permita que eu passe a noite me punindo. Acalma meu corpo. Relaxa meus ombros, minha mandíbula, minhas mãos. Desacelera a minha respiração e os meus pensamentos. Guarda meu sono e o meu coração. Que eu consiga aceitar que o mundo continua existindo enquanto eu descanso. Que eu acorde com forças renovadas, não porque todos os problemas desapareceram, mas porque eu respeitei meus limites e confiei que não preciso vigiar tudo o tempo inteiro.""",
    "gratidao": """Senhor, eu quero treinar meus olhos para perceber o bem que a pressa costuma esconder. Obrigado pelas pequenas coisas que sustentaram este dia: uma conversa, uma refeição, uma oportunidade, uma lembrança, uma pessoa, um lugar seguro, uma força que apareceu quando eu achei que não teria. Eu reconheço que nem tudo está fácil e não quero usar gratidão para negar o que dói. Quero aprender a enxergar as duas coisas ao mesmo tempo: aquilo que ainda precisa de cuidado e aquilo que já merece ser celebrado. Obrigado pelo que cresceu em mim sem que eu percebesse, pelas decisões melhores que consegui tomar, pelos limites que aprendi a estabelecer, pelas vezes em que recomecei. Livra-me da comparação que transforma toda conquista em insuficiência. Ajuda-me a valorizar o progresso real, mesmo quando ele é pequeno. Coloca em meu coração o desejo de agradecer também às pessoas, não apenas em pensamento, mas em palavras e atitudes. Que eu não espere perder para reconhecer valor. Que eu consiga terminar esta oração lembrando de pelo menos uma razão concreta para agradecer hoje. E que essa gratidão não me deixe acomodado, mas me torne mais generoso, mais atento e mais presente.""",
    "confianca": """Senhor, existem coisas que eu gostaria de controlar porque tenho medo do que pode acontecer se eu não controlar. Existem contas, resultados, pessoas, prazos e respostas que eu queria garantir. Eu reconheço a minha responsabilidade pelo que está ao meu alcance, mas entrego a Ti aquilo que ultrapassa minhas mãos. Ajuda-me a não transformar preocupação em falsa sensação de controle. Dá-me discernimento para agir onde eu posso agir e humildade para admitir onde eu preciso esperar. Quando minha mente criar o pior cenário, traz-me de volta aos fatos. Quando eu quiser resolver o futuro inteiro hoje, lembra-me do próximo passo. Quando eu sentir medo de perder algo importante, ensina-me a não perder o presente tentando proteger o amanhã. Eu peço confiança que caminhe junto com responsabilidade. Que eu organize o que precisa ser organizado, converse o que precisa ser conversado e busque ajuda quando for necessário. Mas depois de fazer a minha parte, que eu consiga soltar. Guarda meu coração da ansiedade de querer uma garantia para tudo. Sustenta-me enquanto as respostas não chegam. Que eu aprenda que confiar não é saber exatamente o que vai acontecer; é continuar caminhando com sabedoria mesmo quando ainda não enxergo o resultado.""",
    "direcao": """Senhor, eu coloco diante de Ti os caminhos que estão abertos e também aqueles que ainda não consigo enxergar. Eu não quero decidir apenas para me livrar da ansiedade de decidir. Dá-me clareza para separar desejo, medo, pressão e responsabilidade. Mostra-me quais fatos eu ainda preciso conhecer e quais perguntas eu ainda preciso fazer. Coloca perto de mim pessoas maduras, honestas e confiáveis, mas não permita que eu entregue a elas a responsabilidade que é minha. Ajuda-me a perceber os princípios que não quero abandonar só para conseguir uma resposta rápida. Se uma porta precisar se fechar, dá-me maturidade para aceitar. Se eu precisar avançar, dá-me coragem. Se eu precisar esperar, protege-me da sensação de que esperar é perder tempo. Mostra-me o próximo passo possível, mesmo que eu ainda não veja o caminho inteiro. Eu entrego a Ti a necessidade de ter certeza absoluta antes de agir. Ensina-me a caminhar com a clareza que tenho hoje, aberto a corrigir a rota se aprender algo novo. Que minhas escolhas sejam coerentes com aquilo que considero verdadeiro, saudável e responsável. E que, depois de decidir, eu não passe o tempo inteiro voltando mentalmente ao cruzamento para imaginar todas as vidas que eu não escolhi.""",
    "esperanca": """Senhor, quando a espera fica longa, eu começo a confundir demora com abandono. Quando algo dói, às vezes parece que vai doer para sempre. Hoje eu Te peço esperança que não seja ingenuidade, mas força para atravessar aquilo que ainda não terminou. Sustenta-me nos dias em que as notícias não chegam, em que a saudade aperta, em que uma porta ainda não abriu ou em que eu não sei como uma história vai continuar. Ajuda-me a honrar aquilo que perdi sem acreditar que todo o futuro foi perdido junto. Se eu estiver vivendo um luto, dá-me espaço para sentir sem me apressar. Se eu estiver esperando uma resposta, ajuda-me a continuar vivendo enquanto ela não vem. Se eu estiver recomeçando, mostra-me sinais pequenos de vida que eu talvez esteja ignorando. Protege-me de transformar uma fase difícil em uma definição permanente de quem eu sou. Dá-me coragem para pedir ajuda quando o peso ficar grande demais. Coloca pessoas seguras no meu caminho. E, quando eu não conseguir sentir esperança, permite que eu apenas faça o próximo gesto de cuidado. Que eu atravesse este momento um dia de cada vez, sem exigir de mim uma força que ainda não tenho.""",
    "forca": """Senhor, eu Te peço força para o que realmente importa. Não apenas força para produzir mais, suportar mais e dizer sim para tudo. Dá-me força para reconhecer limites, pedir ajuda, dizer não, corrigir erros e continuar quando o caminho exigir perseverança. Quando eu me sentir fraco, lembra-me de que cansaço não é fracasso. Quando eu tiver medo, ajuda-me a agir com prudência sem deixar que o medo governe tudo. Quando eu enfrentar uma conversa difícil, dá-me firmeza sem agressividade. Quando alguma coisa der errado, dá-me flexibilidade para reorganizar o plano. Eu entrego a Ti a necessidade de provar o meu valor pelo quanto eu aguento. Ensina-me que coragem também pode ser descansar, recuar de uma situação prejudicial, procurar orientação ou começar de novo. Fortalece minha mente contra pensamentos de desistência automática diante do primeiro obstáculo. Ao mesmo tempo, dá-me sabedoria para não insistir em caminhos que estão me destruindo. Que eu saiba a diferença entre perseverança e teimosia. Hoje eu não preciso de força para resolver a vida inteira. Preciso de força para o próximo passo, para a próxima escolha e para cuidar bem de mim e de quem está ao meu redor.""",
    "familia": """Senhor, eu coloco diante de Ti as pessoas que fazem parte da minha história. Família pode ser lugar de amor, mas também pode carregar expectativas, conflitos, silêncios e feridas. Dá-me sabedoria para amar sem tentar controlar. Ajuda-me a escutar antes de responder e a escolher palavras que não aumentem uma discussão. Quando eu estiver errado, dá-me humildade para reconhecer e reparar. Quando eu for ferido, ajuda-me a proteger meu coração sem alimentar vingança. Ensina-me que perdão não significa fingir que nada aconteceu, aceitar abuso ou permanecer em situações inseguras. Dá-me coragem para estabelecer limites quando eles forem necessários. Abençoa as pessoas que eu amo e que hoje estão longe do meu alcance. Eu reconheço que não posso resolver todas as escolhas delas. Posso oferecer presença, cuidado, oração e ajuda dentro do que é saudável. Coloca paz dentro da minha casa e maturidade nas conversas. Onde houver possibilidade de reconciliação segura, mostra o caminho. Onde for necessário manter distância, dá-me paz para respeitar esse limite. Que eu contribua para relações mais verdadeiras, com menos orgulho, menos competição e mais cuidado. E que eu também aceite que uma família real não precisa parecer perfeita para ter valor.""",
    "recomecos": """Senhor, eu Te entrego aquilo que terminou, aquilo que não saiu como eu esperava e aquilo que eu ainda gostaria de fazer diferente. Ajuda-me a não transformar um erro em identidade, nem uma perda em sentença sobre todo o meu futuro. Dá-me coragem para olhar com verdade para o passado: reconhecer responsabilidade onde ela existe, aprender, reparar o que for possível e seguir. Livra-me da culpa que apenas me paralisa e aproxima-me do arrependimento que produz mudança. Se eu precisar pedir perdão, dá-me humildade. Se eu precisar me perdoar, ensina-me a não usar o passado como instrumento de punição diária. Se eu precisar recomeçar uma rotina, um projeto, uma relação segura ou um cuidado comigo mesmo, mostra-me um passo pequeno e sustentável. Não permita que eu espere motivação perfeita para começar. Que eu aceite recomeçar devagar. Protege-me também da pressão de voltar para lugares ou pessoas que não são seguros apenas para provar que perdoei. Dá-me limites claros e sabedoria. Hoje eu escolho acreditar que um capítulo difícil não precisa definir todos os próximos. Eu posso carregar o aprendizado sem carregar para sempre a condenação. Ajuda-me a começar de novo com mais verdade, mais maturidade e mais compaixão.""",
    "presenca": """Senhor, eu não quero passar por este momento apenas pensando no que vem depois. Traz minha atenção para agora. Ajuda-me a perceber minha respiração, o lugar onde estou e as pessoas que fazem parte deste dia. Às vezes eu procuro palavras bonitas para falar Contigo e esqueço que posso simplesmente chegar como estou. Então eu chego. Com dúvidas, com gratidão, com cansaço, com silêncio. Recebe o que eu consigo oferecer. Quando eu me sentir sozinho, lembra-me de procurar também presença humana segura, de não me isolar quando preciso de companhia. Quando a pressa começar cedo, ajuda-me a não entregar toda a manhã ao celular, às cobranças e às notícias. Dá-me alguns minutos de consciência antes de reagir ao mundo. Que eu consiga perceber beleza no comum: uma luz entrando pela janela, uma conversa, um café, um momento de quietude. Ensina-me a viver minha fé dentro da rotina e não apenas em momentos especiais. Que eu me torne mais presente para quem está comigo e mais atento ao que acontece dentro de mim. Se hoje eu não souber o que dizer, que o silêncio também possa ser oração. Eu não preciso performar diante de Ti. Preciso apenas estar aqui.""",
}

COMMON_ENDING = """Agora, por mais alguns instantes, faça esta oração sem pressa. Senhor, cuida do que eu não consigo explicar direito. Tu conheces as partes desta situação que eu ainda não consigo organizar em palavras. Dá-me lucidez para não tomar decisões importantes no impulso do medo, da raiva ou do cansaço. Dá-me paciência comigo mesmo enquanto eu aprendo. Ajuda-me a tratar meu corpo e minha mente com respeito. Que eu não use a fé para fugir de cuidados concretos que preciso buscar, de conversas necessárias ou de ajuda profissional quando ela for importante. Mostra-me uma atitude pequena e realista que eu possa levar para depois desta oração. Algo possível, não uma promessa enorme. Talvez beber água, respirar antes de responder, escrever o que estou sentindo, organizar uma tarefa, pedir ajuda, descansar, agradecer alguém ou simplesmente adiar uma decisão até ter mais clareza. Eu entrego a Ti o que está fora do meu controle e assumo com responsabilidade aquilo que está dentro dele. Guarda as pessoas que amo. Guarda meu coração. Dá-me coragem para atravessar o que vier sem viver antecipadamente cada dificuldade. Quando eu esquecer desta oração no meio da correria, lembra-me de que eu posso parar de novo. Eu posso voltar. Não preciso acertar tudo de uma vez. Que os próximos minutos do meu dia sejam vividos com mais consciência, gentileza e fé. Eu termino respirando devagar e reconhecendo: este momento é suficiente para o próximo passo. Amém."""


def extend_text(slug: str, original: str) -> str:
    category = category_for(slug)
    focus = norm(slug).replace("-", " ")
    focus = re.sub(r"\bjornada\b|\bdia\b|\b\d+\b", " ", focus)
    focus = re.sub(r"\s+", " ", focus).strip()
    bridge = (
        "\n\nAgora vamos aprofundar este momento em oração. "
        f"Continue diante de Deus com este tema no coração: {focus}. "
        "Não tenha pressa para terminar. Se precisar, respire lentamente entre uma frase e outra."
    )
    return original.strip() + bridge + "\n\n" + CATEGORY_PRAYERS[category].strip() + "\n\n" + COMMON_ENDING.strip()


endpoint = f"https://{REGION}.tts.speech.microsoft.com/cognitiveservices/v1"
print(f"Voz: {VOICE} | Região: {REGION} | Itens: {len(items)} | Saída: {out_dir}")

for index, item in enumerate(items, start=1):
    slug = item["slug"].strip()
    original = item["text"].strip()
    if not slug or not original:
        print(f"SKIP item {index}: slug ou texto vazio")
        continue

    text = extend_text(slug, original)
    word_count = len(text.split())
    if word_count < 470:
        raise RuntimeError(f"Roteiro curto demais após expansão: {slug} ({word_count} palavras)")

    target = out_dir / f"{slug}.mp3"
    # A pasta v2 é versionada de propósito; nunca reutilizamos o MP3 antigo.
    if target.exists():
        target.unlink()

    escaped = html.escape(text)
    escaped = escaped.replace("\n\n", '<break time="1100ms"/>')
    ssml = f'''<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="pt-BR">
      <voice name="{VOICE}">
        <prosody rate="-10%" pitch="-2%" volume="default">{escaped}</prosody>
      </voice>
    </speak>'''.encode("utf-8")

    req = urllib.request.Request(
        endpoint,
        data=ssml,
        method="POST",
        headers={
            "Ocp-Apim-Subscription-Key": KEY,
            "Content-Type": "application/ssml+xml",
            "X-Microsoft-OutputFormat": "audio-24khz-48kbitrate-mono-mp3",
            "User-Agent": "5-minutos-de-fe-audio-builder-v2",
        },
    )

    try:
        with urllib.request.urlopen(req, timeout=240) as response:
            audio = response.read()
        if len(audio) < 1000:
            raise RuntimeError("Resposta de áudio muito pequena")
        target.write_bytes(audio)
        print(f"OK {index}/{len(items)} {slug}: {word_count} palavras, {len(audio)} bytes")
    except Exception as exc:
        print(f"ERRO {slug}: {exc}")
        sys.exit(2)

print("Geração v2 concluída.")
