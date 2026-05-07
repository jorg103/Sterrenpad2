# 🌟 Sterrenpad — Installatie handleiding

## Wat zit er in dit mapje?

| Bestand | Wat doet het? |
|---|---|
| `index.html` | De volledige leer-app |
| `manifest.json` | Maakt het een installeerbare app |
| `sw.js` | Zorgt dat het offline werkt |
| `icon-192.png` | App-icoon (klein) |
| `icon-512.png` | App-icoon (groot) |

---

## Stap 1: Gratis hosten op Netlify (5 minuten)

1. Ga naar **[netlify.com](https://netlify.com)** en maak een gratis account
2. Klik op **"Add new site"** → **"Deploy manually"**
3. Sleep de hele **sterrenpad map** naar het grijze vak
4. Netlify geeft je een link zoals: `https://sterrenpad-abc123.netlify.app`
5. Klaar! 🎉

---

## Stap 2: App installeren op telefoon

### 📱 iPhone / iPad (Safari)
1. Open de Netlify-link in **Safari**
2. Tik op het **Deel-icoontje** 📤 (onderaan het scherm)
3. Scroll naar beneden → tik **"Zet op beginscherm"**
4. Tik **"Voeg toe"**
→ Het sterren-icoon verschijnt op je beginscherm!

### 🤖 Android (Chrome)
1. Open de link in **Chrome**
2. Er verschijnt automatisch een banner **"Installeren"**
   (of tik op de drie puntjes → "App installeren")
3. Tik **"Installeren"**
→ App staat direct op je beginscherm!

---

## Alternatief: Zonder internet hosten

Wil je het alleen lokaal (thuis op wifi) gebruiken?

1. Installeer **[XAMPP](https://apachefriends.org)** (gratis)
2. Zet de `sterrenpad` map in de `htdocs` folder
3. Open: `http://localhost/sterrenpad/index.html`
4. Verbind je telefoon met hetzelfde wifi
5. Open `http://[jouw-pc-ip]/sterrenpad/index.html` op de telefoon

---

## Tips

- 💾 Voortgang wordt opgeslagen in de browser (localStorage)
- 🔄 Na installatie werkt de app ook **zonder internet**
- 👧 Elke speler heeft eigen voortgang en muntjes
- ✏️ Namen aanpassen? Open `index.html` en zoek naar `'Speler 1'` en `'Speler 2'`

Veel plezier! 🌈
