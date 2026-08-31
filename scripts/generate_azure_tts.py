import json
import os
import pathlib
import sys
import html
import urllib.request

KEY = os.environ.get("AZURE_SPEECH_KEY", "").strip()
REGION = os.environ.get("AZURE_SPEECH_REGION", "").strip()
VOICE = os.environ.get("AZURE_SPEECH_VOICE", "pt-BR-MacerioMultilingualNeural").strip()

if not KEY or not REGION:
    print("AZURE_SPEECH_KEY e AZURE_SPEECH_REGION precisam estar configurados como secrets.")
    sys.exit(1)

manifest_dir = pathlib.Path("audio/manifests")
out_dir = pathlib.Path("public/audio")
out_dir.mkdir(parents=True, exist_ok=True)

manifest_files = sorted(manifest_dir.glob("*.json"))
if not manifest_files:
    print("Nenhum manifesto encontrado em audio/manifests/*.json")
    sys.exit(1)

items = []
for manifest_path in manifest_files:
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

endpoint = f"https://{REGION}.tts.speech.microsoft.com/cognitiveservices/v1"
print(f"Voz: {VOICE} | Região: {REGION} | Itens: {len(items)}")

for index, item in enumerate(items, start=1):
    slug = item["slug"].strip()
    text = item["text"].strip()
    if not slug or not text:
        print(f"SKIP item {index}: slug ou texto vazio")
        continue

    target = out_dir / f"{slug}.mp3"
    if target.exists() and target.stat().st_size > 1000:
        print(f"SKIP {index}/{len(items)} {slug}: arquivo já existe")
        continue

    escaped = html.escape(text)
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
            "User-Agent": "5-minutos-de-fe-audio-builder",
        },
    )

    try:
        with urllib.request.urlopen(req, timeout=120) as response:
            audio = response.read()
        if len(audio) < 1000:
            raise RuntimeError("Resposta de áudio muito pequena")
        target.write_bytes(audio)
        print(f"OK {index}/{len(items)} {slug}: {len(audio)} bytes")
    except Exception as exc:
        print(f"ERRO {index}/{len(items)} {slug}: {exc}")
        sys.exit(2)

print("Geração concluída.")
