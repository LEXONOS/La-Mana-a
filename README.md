# Site Le Manaïa — Restaurant de plage

Site vitrine one-page, responsive, respectant la direction artistique du restaurant
(crème/sable, brun rhum, serif + écriture manuscrite, feuilles tropicales).

## Contenu du dossier

```
index.html      → la page (structure)
styles.css      → tout le design
app.js          → interactions + moteur d'affichage de la carte
menu.js         → TOUTES les données de la carte (c'est ici qu'on modifie les plats/prix)
assets/
  logo.jpg      → logo Le Manaïa
  hero.webp     → photo d'ambiance (plage / rotin)
```

## Mettre en ligne (le plus simple)

1. Va sur **netlify.com** (ou vercel.com), crée un compte gratuit.
2. Rubrique "Add new site" → "Deploy manually".
3. Glisse-dépose **tout le dossier** (pas juste index.html) dans la zone.
4. C'est en ligne. Tu peux ensuite brancher un nom de domaine (ex. lemanaia.fr).

Pour tester en local : ouvre simplement `index.html` dans ton navigateur.

## Modifier la carte

Tout est dans **menu.js**. Chaque plat ressemble à ça :

```js
{ name: "Brioche perdue", price: "18", desc: "Brioche toastée, saumon fumé..." }
```

- `name`  → le nom du plat
- `price` → le prix (juste le nombre, l'euro est ajouté au design)
- `desc`  → la description (optionnelle)
- `note`  → petite précision en italique à côté du nom (ex. "au choix")

Tu changes le texte entre guillemets, tu enregistres, tu recharges la page. C'est tout.

## La carte Google Maps

En local elle peut afficher un fond décoratif (avec le point "Le Manaïa") : c'est normal,
l'aperçu Google est bloqué hors ligne. Une fois le site en ligne, la vraie carte Google
s'affiche automatiquement. Le bouton "Ouvrir l'itinéraire" fonctionne partout.

## Liens déjà intégrés

- Téléphone / réservation : 05 90 91 77 96 (cliquable sur mobile)
- Instagram : @lemanaia.fwi
- Facebook : page du restaurant
- Adresse : Plage communale, 97180 Sainte-Anne

## Photos & SEO

Le site utilise maintenant tes vraies photos, optimisées pour le web (compressées,
redimensionnées) pour un chargement rapide, ce qui compte pour le référencement Google :

- Hero : ambiance terrasse
- Bande "plage de Sainte-Anne" : la carte posée sur la table face à la mer
- Section "Le lieu" : tables en bois sous les palmiers
- Bande "plats signatures" : tacos, burrata, frites patate douce, cocktails
- Galerie : terrasse, cocktails, tacos, lagon, frites cheddar, burrata

Le SEO en place (rien de bidon, que du factuel) :
- Titre et description de page optimisés pour "restaurant plage Sainte-Anne Guadeloupe"
- Données structurées Google (type Restaurant) : nom, adresse, téléphone, horaires,
  fourchette de prix, cuisine, réseaux sociaux. C'est ce qui aide Google à afficher
  la fiche riche (horaires, étoiles) dans les résultats.
- Balises Open Graph : quand on partage le lien sur WhatsApp / Facebook / Insta,
  l'aperçu affiche une belle photo + le bon texte.
- Texte alternatif (alt) descriptif sur chaque photo (accessibilité + SEO images).

IMPORTANT — avant la mise en ligne, remplace `https://www.lemanaia.fr/` par ta vraie
adresse de site dans deux endroits du fichier `index.html` :
1. les balises `<link rel="canonical">` et `og:url` / `og:image` en haut du fichier
2. les champs `url` et `image` dans le bloc "Données structurées Google"
Si tu ne le fais pas ce n'est pas grave, le site marche quand même, mais l'aperçu de
partage et la fiche Google seront plus propres avec la bonne adresse.

Tu peux m'envoyer d'autres photos quand tu veux, je les intègre.
