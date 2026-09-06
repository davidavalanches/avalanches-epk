# Avalanches — Electronic Press Kit

Site statique (HTML/CSS/JS, sans dépendances) prêt à héberger sur GitHub Pages.

## État du contenu

Déjà en place, avec vos éléments réels :
- Bio (courte + longue), membres, genre
- Bandcamp : Megalithe (2023) et Fragile (2026), lecteurs intégrés avec tracklists
- YouTube : clip Megalithe + vidéo live, + un extrait animé (gif) en 3e carte
- Photos : 3 photos presse + bannière cinématique en haut de la section Écoute
- Réseaux : icônes Bandcamp / YouTube / Instagram / Facebook
- Téléchargement "Photos HD" (zip réel, 5 fichiers haute résolution)

Encore en placeholder (chercher `<!-- TODO ... -->` dans `index.html`) :
- [ ] **Liens réels** YouTube / Instagram / Facebook (actuellement `#`)
- [ ] **E-mail de contact/booking** (actuellement une adresse d'exemple)
- [ ] **Lieu et date** du live (clip + extrait live)
- [ ] **Dossier de presse** et **fiche technique** en PDF (pas encore fournis — la section
      Presse ne propose pour l'instant que le zip photos HD)
- [ ] **Prochaine date** et **contact booking** dans la section Presse

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
  img/
    hero-planet.png        → illustration "planète" (fond du hero)
    bio-portrait.jpg        → portrait du groupe (section Bio)
    cinematic-strip.jpg     → bannière entre Bio et Écoute
    fragile-cover.jpg       → pochette Fragile
    megalithe-cover.gif     → extrait animé Megalithe
    live-teaser.gif         → extrait animé live
    photo-01.jpg / 02 / 03  → photos presse
    icons/                  → logos réseaux sociaux
  press/
    avalanches-photos-hd.zip → photos + pochette en haute résolution
    (à ajouter : dossier de presse et fiche technique en PDF)
```

## Notes de design

Palette glaciale (ardoise sombre / gris-pierre clair) avec un seul accent bleu pâle,
typographies **Big Shoulders Display** (titres, condensée, tenue "metal") et **Literata**
(texte courant, plus posée, ton "post-rock"). Le fond passe du sombre (haut de page) à des
tons pierre plus clairs puis repasse au sombre pour l'écoute et les photos — une trajectoire
plutôt qu'un simple découpage de sections. L'illustration de planète fissurée (issue de
l'identité visuelle de *Fragile*) apparaît en filigrane dans le hero, et une bannière
cinématographique en noir et blanc sépare la bio de l'écoute.
