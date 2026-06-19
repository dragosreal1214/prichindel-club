# Prichindel Club — site de prezentare

Site de prezentare pentru **Prichindel Club**, afterschool & loc de joacă din **Lunca Cetățuii, com. Ciurea, jud. Iași**.

Pagina prezintă: misiunea și echipa, logistica de transport (preluare de la școală), procesul temelor în grupe mici, programul zilnic și tarifele, meniul și nutriția (cu meniu săptămânal descărcabil), galerie și contact cu hartă.

## Structură

```
.
├── index.html              # pagina principală (toate secțiunile)
├── meniu-saptamanal.html   # „Meniul Săptămânii” (printabil / salvabil ca PDF)
├── css/styles.css          # stiluri
├── js/main.js              # nav mobil, animații la scroll, validare formular
├── assets/favicon.svg
├── vercel.json             # configurare hosting Vercel (static)
└── .gitignore
```

Site **100% static** — fără build, fără dependențe instalate. Iconurile sunt SVG inline (stil linie), fonturile vin de la Google Fonts.

## Rulare locală

Orice server static funcționează. Exemplu cu Python:

```bash
python3 -m http.server 8123
# deschide http://localhost:8123
```

Sau deschide direct `index.html` în browser.

## Deploy pe Vercel

Proiectul e gata de deploy. În Vercel:

1. **Add New → Project** și importă repo-ul de GitHub.
2. **Framework Preset:** `Other` (site static).
3. **Build Command:** (gol) · **Output Directory:** `./` (rădăcina).
4. Deploy.

Sau din terminal:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # producție
```

## De completat (marcat în pagină cu `[...]`)

- Telefon, email, adresă exactă (stradă + număr)
- Prețurile reale în pachete
- Numele firmei de catering (sau „bucătărie proprie autorizată DSV”)
- Numerele / numele școlilor deservite și numărul școlii la secțiunea Transport
- Fotografii reale (echipă + galerie) și meniul real al săptămânii
- Conectarea formularului de contact la un serviciu real (ex. Formspree / backend)
