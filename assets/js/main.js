// Avalanches EPK — JS minimal, aucune dépendance.

document.getElementById('year').textContent = new Date().getFullYear();

/* ==========================================================================
   Langues (EN / FR)
   - Le texte anglais est écrit directement dans index.html (version de base).
   - Les traductions françaises sont dans le dictionnaire FR ci-dessous,
     associées aux attributs data-i18n="clé" (contenu) et
     data-i18n-attr="attribut:clé" (alt, title, aria-label).
   - Langue choisie : ?lang=fr|en dans l'URL, sinon le dernier choix du
     visiteur, sinon la langue du navigateur (français → FR, sinon EN).
   ========================================================================== */

const EN_EXTRA = { 'nav.close': 'Close menu' };

const FR = {
  'meta.title': 'Avalanches — Dossier de presse (EPK)',
  'meta.description': 'Avalanches — trio post-metal / post-rock instrumental de Nantes. Dossier de presse : bio, écoute, vidéos, photos, fiche technique et contact booking.',

  'skip': 'Aller au contenu',
  'nav.label': 'Navigation principale',
  'nav.listen': 'Écoute',
  'nav.videos': 'Vidéos',
  'nav.press': 'Presse',
  'nav.open': 'Ouvrir le menu',
  'nav.close': 'Fermer le menu',

  'hero.line': 'Une nouvelle vague de musique heavy instrumentale, entre l’intensité du post-metal et une écriture portée par l’émotion.',
  'hero.quote.cite': 'Rock Hard Italy &mdash; 7,5/10 <span>(traduit de l’italien)</span>',
  'hero.listen': 'Écouter',
  'hero.photos': 'Photos &amp; presse',

  'bio.lede': 'Avalanches incarne une nouvelle vague de musique heavy instrumentale, capable de jeter un pont entre l’intensité du post-metal et une écriture portée par l’émotion.',
  'bio.p1': 'Le trio nantais mêle atmosphères post-rock, textures sludge et structures progressives dans un son cinématographique et immersif, fondé sur le contraste&nbsp;: riffs massifs, crescendos hypnotiques, tension mélodique et moments de beauté retenue. Avec <em>Megalithe</em> et <em>Fragile</em>, le groupe s’impose comme une voix singulière de la scène instrumentale et post-metal européenne.',
  'bio.p2': 'Originaire de Nantes, Avalanches est un trio instrumental formé par David Poiraudeau (guitare), Guillaume Pastemps (batterie) et Nicolas Bertrand (basse)&nbsp;— trois musiciens réunis autour d’une même vision&nbsp;: une musique où lourdeur écrasante, tension émotionnelle et écriture mélodique coexistent naturellement.',
  'bio.p3': 'Le nom Avalanches résume l’idée centrale du projet&nbsp;: la contemplation de forces qui nous dépassent, et l’exploration de l’instabilité cachée sous tout ce que l’on croit solide, permanent ou indestructible.',
  'bio.p4': 'Entre post-rock, post-metal, sludge et rock progressif, Avalanches compose des morceaux denses et cinématographiques, qui passent d’atmosphères hypnotiques à des sommets portés par les riffs, et puisent autant chez Russian Circles, The Ocean, Tool et Mastodon que dans la profondeur atmosphérique de Deftones, Caspian ou Radiohead.',
  'bio.p5': 'En juin 2023, Avalanches sort son premier EP, <em>Megalithe</em>, qui pose l’identité sonore du groupe&nbsp;: immersive, lourde et chargée d’émotion. Avec <em>Fragile</em>, le trio pousse cette dualité plus loin, entre agressivité et vulnérabilité, tension et relâchement&nbsp;— une musique instrumentale rare, progressive et puissante, mais profondément humaine et émouvante.',
  'bio.alt': 'David Poiraudeau, Guillaume Pastemps et Nicolas Bertrand, membres d’Avalanches',
  'facts.label': 'Informations clés',
  'facts.city': '<span>Ville</span>Nantes, France',
  'facts.style': '<span>Style</span>Post-metal / Post-rock instrumental',
  'facts.since': '<span>Depuis</span>2023 (EP Megalithe)',
  'facts.members': '<span>Membres</span>David Poiraudeau (guitare), Guillaume Pastemps (batterie), Nicolas Bertrand (basse)',

  'music.title': 'Musique',
  'music.intro': '<em>Fragile</em> et <em>Megalithe</em> sont disponibles sur toutes les grandes plateformes de streaming, et en écoute intégrale ci-dessous via Bandcamp.',
  'music.stream': 'Écouter sur les plateformes de streaming',
  'music.fragile.alt': 'Pochette de Fragile',
  'music.fragile.date': '— mini-album, janvier 2026',
  'music.fragile.player': 'Lecteur Bandcamp — Fragile',
  'music.megalithe.alt': 'Pochette de l’EP Megalithe',
  'music.megalithe.date': '— EP, juin 2023',
  'music.megalithe.player': 'Lecteur Bandcamp — Megalithe',
  'music.fallback': 'Le lecteur ne s’affiche pas&nbsp;? Écoutez directement sur <a href="https://avalanches-theband.bandcamp.com" target="_blank" rel="noopener">Bandcamp</a>.',

  'videos.title': 'Vidéos',
  'videos.credits': 'Crédits&nbsp;: H’auteur Production',
  'videos.live': 'Lune Rouge — live au Ferrailleur, Nantes (16/03/2025)',

  'photos.intro': 'Photos presse, libres d’utilisation pour la promotion du groupe.',
  'photos.download': 'Télécharger le pack photos HD (.zip)',

  'press.title': 'Presse',
  'press.quotes': 'Ce qu’en dit la presse',
  'q.rockhard': '«&nbsp;Un parcours artistique qui pourrait les mener très loin.&nbsp;»',
  'c.rockhard': '&mdash; 7,5/10, octobre 2026 (traduit de l’italien)',
  'q.coreandco': '«&nbsp;Des mélodies qui n’expliquent rien, mais qui font tout ressentir.&nbsp;»',
  'c.coreandco': '&mdash; 8/10, juillet 2026',
  'q.prj': '«&nbsp;Avalanches a prouvé que la lourdeur et la vulnérabilité peuvent coexister.&nbsp;»',
  'c.prj': '&mdash; août 2026 (traduit de l’anglais)',
  'q.prmb': '«&nbsp;Ils auraient toute leur place au Dunk!festival.&nbsp;»',
  'c.prmb': '&mdash; octobre 2026 (traduit de l’anglais)',
  'q.livewire': '«&nbsp;Entre contemplation post-rock et impact metal.&nbsp;»',
  'c.livewire': '&mdash; août 2026 (traduit de l’anglais)',
  'q.metalorgie': '«&nbsp;<em>Fragile</em> s’accommoderait bien du terme “chaos bienveillant”.&nbsp;»',
  'c.metalorgie': '&mdash; avril 2026',
  'press.intro': 'Tout ce qu’il faut pour présenter le groupe&nbsp;: one-sheet, bio, communiqué de presse et fiche technique. Les photos haute résolution sont libres d’utilisation pour la presse et la promotion.',
  'shortbio.title': 'Bio courte',
  'shortbio.other': 'Short bio in English',
  'pl.onesheet': 'One-sheet (EPK / bio, en anglais) — PDF',
  'pl.bio': 'Bio — PDF',
  'pl.release': 'Communiqué de presse <em>Fragile</em> — PDF',
  'pl.rhreview': 'Rock Hard Italy &mdash; chronique de <em>Fragile</em>, octobre 2026 (en italien) &mdash; PDF',
  'pl.rhinterview': 'Rock Hard Italy &mdash; interview, numéro 103 (en italien) &mdash; PDF',
  'pl.rider': 'Fiche technique — PDF',
  'pl.photos': 'Photos HD — ZIP',
  'shows.title': 'Concerts',

  'contact.intro': 'Pour un booking, une demande presse ou nos disponibilités, écrivez-nous.',
};

(function () {
  const LANGS = ['en', 'fr'];
  const STORAGE_KEY = 'avalanches-lang';

  // Mémorise le texte anglais d'origine pour pouvoir revenir à l'anglais.
  const textEls = [...document.querySelectorAll('[data-i18n]')].map(el => ({
    el, key: el.dataset.i18n, en: el.innerHTML,
  }));
  const attrEls = [];
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(x => x.trim());
      attrEls.push({ el, attr, key, en: el.getAttribute(attr) });
    });
  });
  const metaDesc = document.querySelector('meta[name="description"]');
  const enMeta = { title: document.title, description: metaDesc ? metaDesc.content : '' };

  // Bio courte : la version de la langue courante est affichée en premier,
  // l'autre langue reste dans le bloc dépliable.
  const sbMain = [...document.querySelectorAll('[data-sb="main"]')];
  const sbAlt = [...document.querySelectorAll('[data-sb="alt"]')];
  const sbDetails = document.querySelector('.short-bio-fr');
  const sbTexts = { en: sbMain.map(p => p.innerHTML), fr: sbAlt.map(p => p.innerHTML) };

  function apply(lang) {
    const fr = lang === 'fr';
    textEls.forEach(({ el, key, en }) => {
      el.innerHTML = fr && FR[key] !== undefined ? FR[key] : en;
    });
    attrEls.forEach(({ el, attr, key, en }) => {
      el.setAttribute(attr, fr && FR[key] !== undefined ? FR[key] : en);
    });
    document.title = fr ? FR['meta.title'] : enMeta.title;
    if (metaDesc) metaDesc.content = fr ? FR['meta.description'] : enMeta.description;

    if (sbMain.length && sbAlt.length && sbDetails) {
      const other = fr ? 'en' : 'fr';
      sbMain.forEach((p, i) => { p.innerHTML = sbTexts[lang][i]; });
      sbAlt.forEach((p, i) => { p.innerHTML = sbTexts[other][i]; });
      sbDetails.lang = other;
    }

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });
  }

  function detect() {
    const fromUrl = new URLSearchParams(location.search).get('lang');
    if (LANGS.includes(fromUrl)) return fromUrl;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* stockage indisponible */ }
    const prefs = navigator.languages && navigator.languages.length
      ? navigator.languages : [navigator.language || 'en'];
    return String(prefs[0]).toLowerCase().startsWith('fr') ? 'fr' : 'en';
  }

  document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      apply(lang);
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      // Garde l'URL partageable cohérente si elle contenait ?lang=
      const url = new URL(location.href);
      if (url.searchParams.has('lang')) {
        url.searchParams.set('lang', lang);
        history.replaceState(null, '', url);
      }
    });
  });

  /* ---------- Menu burger (mobile) ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if (navToggle && nav) {
    const label = open => {
      const fr = document.documentElement.lang === 'fr';
      if (open) return fr ? FR['nav.close'] : EN_EXTRA['nav.close'];
      return fr ? FR['nav.open'] : 'Open menu';
    };
    const setOpen = open => {
      nav.classList.toggle('is-open', open);
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', label(open));
    };
    navToggle.addEventListener('click', () => setOpen(!nav.classList.contains('is-open')));
    nav.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { setOpen(false); navToggle.focus(); }
    });
    document.addEventListener('click', e => {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !navToggle.contains(e.target)) setOpen(false);
    });
    window.matchMedia('(min-width: 641px)').addEventListener('change', e => { if (e.matches) setOpen(false); });
    // Garde le libellé à jour quand on change de langue
    document.querySelectorAll('.lang-switch [data-lang]').forEach(btn => btn.addEventListener('click', () => {
      navToggle.setAttribute('aria-label', label(nav.classList.contains('is-open')));
    }));
  }

  const initial = detect();
  if (initial !== 'en') apply(initial);
})();
