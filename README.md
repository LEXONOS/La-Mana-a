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

## Photos

Pour l'instant le site utilise 1 seule photo d'ambiance (le hero) + le logo. Le reste de
la galerie utilise des tuiles graphiques aux couleurs de la marque. Si tu m'envoies
4 à 6 vraies photos (plats en gros plan, cocktails, la terrasse au coucher du soleil,
une coupe de glace, l'ambiance du soir), je les intègre dans la galerie et ça passera
un cap. Format idéal : paysage, bonne lumière.
