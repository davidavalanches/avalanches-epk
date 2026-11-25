# Avalanches — Electronic Press Kit

Site statique (HTML/CSS/JS, sans dépendances) prêt à héberger sur GitHub Pages.

## État du contenu

En ligne sur https://davidavalanches.github.io/avalanches-epk/ (site en anglais).

- Bio, membres, genre, faits clés
- Bandcamp : Fragile (janvier 2026) et Megalithe (juin 2023), lecteurs intégrés
- YouTube : clip Megalithe + extrait live au Ferrailleur (16/03/2025)
- Photos : 6 photos presse (versions web 1200 px générées depuis le zip HD) + zip HD
- Presse : one-sheet, bio (FR), communiqué Fragile (FR), fiche technique, photos HD
- Prochaines dates, contact booking, liens réseaux
- Aperçu de partage (Open Graph) : `assets/img/og-image.jpg` (1200×630)

À tenir à jour :
- [ ] **Prochaines dates** (section Press) : retirer les dates passées, ajouter les nouvelles
- [ ] Si une photo du zip HD change, régénérer sa version web :
      `convert photo-0X.jpg -auto-orient -resize 1200x -strip -quality 80 -interlace Plane assets/img/photo-0X.jpg`

## Déployer sur GitHub Pages

1. Créer un dépôt GitHub (public, ou privé avec un plan qui autorise Pages), par exemple `avalanches-epk`.
2. Dans ce dossier, initialiser git et pousser le contenu :
   ```bash
   git init
   git add .
   git commit -m "Site EPK Avalanches"
   git branch -M main
   git remote add origin https://github.com/<votre-compte>/avalanches-epk.git
   git push -u origin main
   ```
3. Sur GitHub : **Settings → Pages**.
4. Dans *Build and deployment*, choisir **Deploy from a branch**, sélectionner la branche
   `main` et le dossier `/ (root)`, puis **Save**.
5. Après une à deux minutes, le site est accessible à :
   `https://<votre-compte>.github.io/avalanches-epk/`
   (ou à la racine d'un domaine si le dépôt s'appelle `<votre-compte>.github.io`).

Pour un nom de domaine personnalisé, ajouter un fichier `CNAME` à la racine contenant le
domaine, et configurer un enregistrement DNS chez le registrar (voir la doc GitHub Pages).

**Note sur la taille du dépôt** : le projet pèse environ 40 Mo, principalement à cause des
deux GIFs (teaser Megalithe et extrait live) et du zip photos HD. C'est très raisonnable pour
GitHub Pages (limite à 1 Go par dépôt), mais si vous ajoutez beaucoup plus de vidéos/GIFs par
la suite, pensez à Git LFS ou à héberger les gros fichiers ailleurs (Bandcamp/YouTube déjà
utilisés pour l'audio/vidéo principale).

## Structure

```
index.html
assets/
  css/style.css
  js/main.js
  fonts/                    → RocketWildness
  img/
    avalanches-logo.png     → logo (en-tête)
    hero-planet.png         → illustration "planète" (fond du hero)
    bio-portrait.jpg        → portrait du groupe (section Bio)
    megalithe-cover.gif     → bannière animée entre Bio et Music
    fragile-cover.jpg / megalithe-cover.jpg → pochettes
    photo-01.jpg … 06       → photos presse (web, 1200 px)
    og-image.jpg            → image d'aperçu pour les partages
    live-teaser.gif         → (non utilisé actuellement)
    icons/                  → logos réseaux sociaux
  press/
    avalanches-onesheet.pdf
    avalanches-bio-fr.pdf
    avalanches-communique-fragile-fr.pdf
    avalanches-fiche-technique.pdf
    avalanches-photos-hd.zip
```

## Notes de design

Palette glaciale (ardoise sombre / gris-pierre clair) avec un seul accent bleu pâle,
typographies **Big Shoulders Display** (titres, condensée, tenue "metal") et **Literata**
(texte courant, plus posée, ton "post-rock"). Le fond passe du sombre (haut de page) à des
tons pierre plus clairs puis repasse au sombre pour l'écoute et les photos — une trajectoire
plutôt qu'un simple découpage de sections. L'illustration de planète fissurée (issue de
l'identité visuelle de *Fragile*) apparaît en filigrane dans le hero, et une bannière
cinématographique en noir et blanc sépare la bio de l'écoute.
