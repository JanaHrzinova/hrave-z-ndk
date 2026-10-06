# Hravě z digitálních sbírek

**Hravě z digitálních sbírek** je soubor tří jednoduchých webových aplikací, které pracují s ilustracemi a výstřižky z fondu Národní digitální knihovny. Ukazují možnosti dalšího využití digitalizovaných dokumentů – od inspirace historickou kuchyní přes propojení obrazových sbírek se zvukem až po kreativní storytelling.

## Co dnes na stůl?

Aplikace nabízí historické recepty a kulinářské tipy z kuchařských knih z přelomu 19. a 20. století. Uživatel si může vybrat tematickou kategorii nebo se nechat překvapit náhodným výběrem.

- náhodný výběr historických receptů,
- tematické kategorie,
- obrazové výstřižky z digitalizovaných kuchařských knih,
- možnost otevřít zdrojovou knihu v Národní digitální knihovně.

## Atlas ptáků a jejich hlasy

Aplikace propojuje historické obrazové tabule z publikace *Velký atlas ptáků ku Kněžourkovu Velkému přírodopisu ptáků* se zvukovými nahrávkami ptačích hlasů z Wikimedia Commons.

- prohlížení historických tabulí ptáků,
- přehrávání jednoho nebo více zvukových záznamů,
- přiblížení a posouvání obrazové tabule,
- seznam dostupných tabulí,
- odkazy na zdroj obrázku v České digitální knihovně a na zdroje zvuků ve Wikimedia Commons.

## Vystřihni pohádku!

Kreativní storytellingová aplikace náhodně vybírá tři obrazové výstřižky ze starých knih. Uživatel z nich může vytvořit vlastní příběh přímo v prohlížeči.

- náhodné losování tří obrazových výstřižků,
- prostor pro psaní vlastního příběhu,
- možnost diktování textu v podporovaných prohlížečích,
- kopírování a mazání textu,
- export příběhu do Wordu nebo PDF,
- odkazy na původní zdroje jednotlivých výstřižků.

## Použité zdroje

Projekt využívá především obsah a obrazová data z:

- **Národní digitální knihovny**,
- **České digitální knihovny**,
- **Wikimedia Commons** – zvukové nahrávky v aplikaci Atlas ptáků a jejich hlasy.

Jednotlivé aplikace obsahují odkazy na zdrojové dokumenty nebo nahrávky, aby bylo možné dohledat jejich původní kontext.

## Technické řešení

Aplikace jsou vytvořené jako statický web v HTML, CSS a JavaScriptu. Nevyžadují vlastní serverovou aplikaci ani databázi. Část obsahu – například obrazová data, zvukové nahrávky a knihovny používané při exportu – se načítá z externích online zdrojů, a proto je pro plnou funkčnost potřeba připojení k internetu.

Projekt obsahuje společný rozcestník a tři samostatné aplikace:

```text
/
├── index.html
├── co-dnes-na-stul/
├── atlas-ptaku/
└── vystrihni-pohadku/
```

## Autorství

**Jana Hrzinová, 2026**  
Vyrobeno za pomoci **ChatGPT 5.6 Sol**.
