/* ==========================================================================
   Le Manaïa — données de la carte
   Transcrites fidèlement depuis les cartes imprimées du restaurant.
   Structure : catégories → groupes (sous-titres manuscrits) → items.
   ========================================================================== */

const MENU = {

  /* ---------------- SALÉS & BRUNCH ---------------- */
  sales: {
    label: "Salés & Brunch",
    intro: "Cuisine solaire servie en continu. Toasts signatures, tapas à partager et smoothies bowls.",
    columns: [
      {
        groups: [
          {
            title: "Les Créations",
            script: true,
            items: [
              { name: "Brioche perdue", price: "18", desc: "Brioche toastée, saumon fumé, Manaïa cream cheese, avocat, œuf poché, chips de banane plantain" },
              { name: "Avocado Beach Toast", price: "19", desc: "Pain de mie toasté, poisson fumé, Manaïa cream cheese, guacamole, coleslaw caribéen, œuf poché, crispy d'oignon, crème curcuma-cumin" },
              { name: "Burratina Toast", price: "20", desc: "Pain campagne, salade, crème de tapenade, tartare de tomate, burratina, chiffonnade de jambon cru, pesto pistache, mélange de graines" },
              { name: "Croissant Gourmand", price: "15", desc: "Béchamel, chiffonnade de jambon blanc, mozza-emmental, lard grillé, œuf brouillé, Manaïa cream cheese, graines" },
              { name: "Croq'bohème", price: "18", desc: "Pain de mie toasté, féta à l'huile d'olive, tartare de tomate, houmous betterave, oignons caramélisés, chips de banane plantain, coulis mangue-passion" },
              { name: "Tacos Morning Vibes", price: "16", desc: "Galette de blé, œuf brouillé, crème de chorizo grillé, sauce cheddar, brisure d'oignon caramélisé" },
              { name: "Tartare à la tahitienne", price: "25", desc: "Poisson cru, lait de coco, citron vert, oignon rouge, ananas rôti, coleslaw caribéen, frites de patate douce" },
              { name: "Bagel", price: "19", desc: "Poulet mariné aux épices caramélisées, Manaïa cream cheese, lard grillé, cheddar fondu, choux rouge, grenade, mayo curry" },
              { name: "Œuf bénédicte", price: "15", desc: "English muffin toasté, lard grillé, oignon caramélisé, œuf poché, sauce hollandaise" }
            ]
          }
        ]
      },
      {
        groups: [
          {
            title: "Tapas",
            items: [
              { name: "Œuf Mimosa", price: "10" },
              { name: "Tataki de thon", price: "14", note: "miel soja sésame" },
              { name: "Soupions frits", price: "12", note: "sauce tartare" },
              { name: "Accras", price: "11" },
              { name: "Croquetas", price: "12", note: "jambon cru béchamel" },
              { name: "Frites de patate douce", price: "7", note: "sauce cheddar" }
            ]
          },
          {
            title: "Smoothies Bowls",
            boxed: true,
            items: [
              { name: "Banana Choco Love", price: "14", desc: "Banane, lait d'amande, cacao, beurre de cacahuète, vanille, granola maison, coulis chocolat, graines de pavot" },
              { name: "Pink Energy Bowl", price: "15", desc: "Banane, fraise, framboise, kiwi, flocons d'avoine, lait d'amande, granola maison, coulis rouge, mélange de graines" },
              { name: "Exotic Vibe", price: "15", desc: "Ananas, mangue, lait de coco, granola maison, miel, citron, coco râpée, coulis mangue-passion, fruits secs" }
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- SUCRÉS ---------------- */
  sucres: {
    label: "Sucrés & Gaufres",
    intro: "Pancakes, gaufres, crêpes et formules brunch pour prolonger le plaisir.",
    columns: [
      {
        groups: [
          {
            title: "Les Créations",
            script: true,
            items: [
              { name: "Plaisir défendu", price: "12", desc: "Pancakes montés à la crème vanille, glace vanille, caramel beurre salé, éclats d'amande, chantilly" },
              { name: "La Gourmande", price: "14", desc: "Brioche perdue, banane, beurre de cacahuète, coulis chocolat, brisure de chouchou, chantilly" },
              { name: "Mini pancakes à partager", price: "10", desc: "Sauces chocolat, caramel beurre salé, fruits rouges" },
              { name: "Assiette de fruits frais", price: "11" }
            ]
          },
          {
            title: "Les Gaufres & Crêpes",
            script: true,
            variants: {
              header: ["Nature", "Sucre glace", "Caramel b.s.", "Nutella", "Coulis pistache"],
              rows: [
                { name: "Gaufre liégeoise", desc: "Croustillante dehors, moelleuse dedans, avec ses morceaux de sucre", prices: ["5", "5,5", "6", "6", "6,5"] },
                { name: "Gaufre bruxelloise", desc: "La célèbre rectangulaire aérée et croquante", prices: ["5", "5,5", "6", "6", "6,5"] },
                { name: "Crêpes", desc: "", altHeader: ["Sucre", "Beurre-sucre", "Caramel b.s.", "Nutella", "Coulis pistache"], prices: ["5", "5,5", "6", "6", "6,5"] }
              ]
            }
          }
        ]
      },
      {
        groups: [
          {
            title: "La petite touche plaisir",
            script: true,
            items: [
              { name: "Suppléments", price: "1,5", note: "selon vos envies", desc: "Boule de glace (vanille, chocolat, coco, pistache, café, mangue, rhum raisin, citron, fraise) / Coulis (caramel b.s., pistache, fruits rouges, beurre de cacahuète, mangue-passion) / Nutella / Miel / Sucre glace / Chantilly" },
              { name: "Supplément Œuf", price: "3", note: "au choix", desc: "Brouillé / Mollet / À la coque / Poché / Dur / Au plat" }
            ]
          },
          {
            title: "Les Formules",
            boxed: true,
            items: [
              { name: "Matin Douceur", price: "15", desc: "Une boisson chaude · un jus · mini viennoiseries · pain · beurre · confiture" },
              { name: "As You Want", price: "25", desc: "Une boisson chaude · un jus · un salé ou un sucré au choix (hors tartare)" },
              { name: "Le Manaïa", price: "35", desc: "Une boisson chaude · un jus · un salé au choix (hors tartare) · un sucré au choix" }
            ]
          },
          {
            title: "Mini Brunch",
            boxedDark: true,
            items: [
              { name: "Enfant −12 ans", price: "14", desc: "Un jus, un sirop ou un soda · 3 pancakes miniatures · œuf brouillé/jambon blanc ou poisson du jour et frites de patate douce · une crêpe sucre ou nutella ou floup" }
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- GLACES ---------------- */
  glaces: {
    label: "Glaces",
    intro: "Coupes gourmandes, boules à composer et milkshakes minute.",
    columns: [
      {
        groups: [
          {
            title: "Coupes",
            items: [
              { name: "Dame Blanche", price: "8", desc: "Vanille, chantilly, coulis de chocolat" },
              { name: "Chocolat Liégeois", price: "8", desc: "Chocolat, chantilly, coulis chocolat" },
              { name: "Café Liégeois", price: "9,5", desc: "Café, chantilly, café frappé" },
              { name: "Peanut Butter", price: "10", desc: "Vanille, beurre de cacahuète, coco, chantilly, coulis caramel beurre salé" },
              { name: "Soleil Caraïbes", price: "10", desc: "Mangue, passion, coco, coulis exotic, granola maison, chantilly" },
              { name: "Antillaise", price: "9", desc: "Rhum raisins, rhum vieux" },
              { name: "Choco Menthe", price: "9", desc: "Chocolat, menthe-chocolat, coulis chocolat, chantilly" }
            ]
          },
          {
            title: "Milkshake",
            items: [
              { name: "Parfum au choix", price: "7", desc: "Vanille / fraise / coco / chocolat / pistache / café / rhum raisins / mangue / passion / citron vert / beurre de cacahuète / menthe-chocolat" }
            ]
          }
        ]
      },
      {
        groups: [
          {
            title: "Boules",
            boxed: true,
            items: [
              { name: "Coupe 1 boule", price: "3" },
              { name: "Coupe 2 boules", price: "4,5" },
              { name: "Coupe 3 boules", price: "5,5" },
              { name: "Parfums au choix", price: "", desc: "Vanille / fraise / coco / chocolat / pistache / café / rhum raisins / mangue / passion / citron vert / beurre de cacahuète / menthe-chocolat" },
              { name: "Supplément au choix", price: "1,5", desc: "Chantilly / coulis" }
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- COCKTAILS ---------------- */
  cocktails: {
    label: "Cocktails",
    intro: "Cocktails 35 cl. Une carte entre grands classiques, tendances et intemporels. Mocktails sans alcool disponibles.",
    columns: [
      {
        groups: [
          {
            title: "Les Incontournables",
            script: true,
            items: [
              { name: "Planteur Maison", price: "9", desc: "Rhum, ananas, orange, goyave, grenadine" },
              { name: "Manaïa", price: "12", desc: "Rhum blanc, rhum ambré, curaçao, glace coco, jus d'ananas, sirop vanille, hibiscus" },
              { name: "Maï Taï", price: "12", desc: "Rhum blanc, rhum ambré, curaçao, sirop d'orgeat, citron vert" },
              { name: "Mojito", price: "11", desc: "Rhum, menthe, citron, Perrier" },
              { name: "Vintage Mojito", price: "13", desc: "Rhum vieux, menthe, citron, Perrier" },
              { name: "Mojito Royal", price: "15", desc: "Rhum, menthe, citron, champagne" },
              { name: "Mojito parfum au choix", price: "12", desc: "Passion / fraise / mangue / coco · rhum, menthe, citron, Perrier" },
              { name: "Caïpirina Classique", price: "10", desc: "Cachaça, citron vert, sucre de canne" },
              { name: "Caïpirina parfum au choix", price: "11", desc: "Passion / fraise / mangue / coco · cachaça, citron vert, sucre de canne" },
              { name: "Caïpiroska", price: "10", desc: "Vodka, citron vert, sucre de canne" },
              { name: "Cuba Libre", price: "10", desc: "Rhum, citron, Coca" },
              { name: "Piña Colada", price: "10", desc: "Rhum, crème de coco, glace coco, ananas" },
              { name: "Daiquiri", price: "9", desc: "Rhum, citron vert, sucre de canne" },
              { name: "Margarita Frozen", price: "10", desc: "Tequila, triple sec, citron vert" },
              { name: "Mimosa", price: "11", desc: "Jus d'orange, Cointreau, champagne" }
            ]
          }
        ]
      },
      {
        groups: [
          {
            title: "Les Tendances",
            script: true,
            items: [
              { name: "Aperol Spritz", price: "12", desc: "Aperol, prosecco, eau pétillante" },
              { name: "Hugo Spritz", price: "13", desc: "Liqueur de sureau, prosecco, menthe, citron vert, eau pétillante" },
              { name: "Moscow Mule", price: "13", desc: "Vodka, ginger beer, citron vert" },
              { name: "Porn Star Martini", price: "15", desc: "Vodka, passion, vanille, shooter prosecco" }
            ]
          },
          {
            title: "Les Intemporels",
            script: true,
            items: [
              { name: "Gin Fizz Frozen", price: "11", desc: "Gin, citron, sirop de canne" },
              { name: "Long Island Iced Tea", price: "14", desc: "Gin, tequila, rhum, vodka, triple sec, Coca" },
              { name: "Cosmopolitan", price: "14", desc: "Vodka, Cointreau, cranberry, citron vert" },
              { name: "Sex On The Beach", price: "12", desc: "Vodka, liqueur de pêche, jus d'orange, jus de cranberry" },
              { name: "Whisky Sour", price: "12", desc: "Whisky, citron, sucre de canne" }
            ]
          },
          {
            title: "Mocktails",
            boxed: true,
            note: "35 cl · sans alcool",
            items: [
              { name: "Virgin Mojito", price: "9", desc: "Menthe, citron, Perrier" },
              { name: "Virgin Mojito parfum au choix", price: "10", desc: "Passion / fraise / mangue / coco · menthe, citron, Perrier" },
              { name: "Virgin Colada", price: "9", desc: "Crème de coco, glace coco, ananas" },
              { name: "Mahana Tiki", price: "10", desc: "Banane, fraise, vanille, ananas, citron vert" }
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- BOISSONS ---------------- */
  boissons: {
    label: "Boissons",
    intro: "Softs, eaux, bières pression et bouteilles, cafés et boissons chaudes signatures.",
    columns: [
      {
        groups: [
          {
            title: "Softs",
            boxed: true,
            items: [
              { name: "Sodas", price: "3,5", note: "33 cl", desc: "Coca, Coca 0, Sprite, Fuze Tea, Orangina, Schweppes" },
              { name: "Jus de fruits parfum au choix", price: "3", note: "25 cl", desc: "Mangue / goyave / passion / ananas / orange" },
              { name: "Sirop parfum au choix", price: "2,5", note: "25 cl", desc: "Menthe / grenadine / pêche / fraise / citron / orgeat" },
              { name: "Fruits frais", price: "7,5", note: "33 cl" }
            ]
          },
          {
            title: "Bières",
            script: true,
            subgroups: [
              {
                sub: "Pressions",
                items: [
                  { name: "Corsaire", price: "4 / 7,5", note: "25cl / 50cl" },
                  { name: "Heineken", price: "4,5 / 8,5", note: "25cl / 50cl" },
                  { name: "Panaché", price: "4 / 7,5", note: "25cl / 50cl" },
                  { name: "Suppléments", price: "0,5 / 1", note: "sirop / picon" }
                ]
              },
              {
                sub: "Bouteilles",
                items: [
                  { name: "Carib", price: "5", note: "33 cl" },
                  { name: "Gwada", price: "5,5", note: "33 cl" },
                  { name: "Affligem blonde / blanche", price: "5,5", note: "25 cl" },
                  { name: "Leffe", price: "6", note: "33 cl" },
                  { name: "Despérados classique / red", price: "5,5", note: "33 cl" },
                  { name: "Heineken 0%", price: "5", note: "25 cl" }
                ]
              }
            ]
          }
        ]
      },
      {
        groups: [
          {
            title: "Les Eaux",
            script: true,
            items: [
              { name: "Ogeu", price: "4 / 3,5", note: "1 L / 50 cl" },
              { name: "Lafort", price: "3,5 / 3", note: "1,5 L / 50 cl" },
              { name: "Lafort pétillante", price: "4", note: "1 L" }
            ]
          },
          {
            title: "Cafés",
            items: [
              { name: "Expresso « illy »", price: "3" },
              { name: "Décaféiné", price: "3" },
              { name: "Noisette", price: "3,5" },
              { name: "Allongé", price: "3" },
              { name: "Crème", price: "4" },
              { name: "Déca crème", price: "4" },
              { name: "Double expresso", price: "5" },
              { name: "Cappucino", price: "5,5", note: "chantilly" },
              { name: "Chocolat", price: "5", note: "chaud / froid" },
              { name: "Chocolat Viennois", price: "5,5", note: "chantilly" },
              { name: "Thé Dammann et frères", price: "4,5" },
              { name: "Tiare", price: "8", desc: "Expresso, coulis chocolat, sirop de vanille, chantilly" },
              { name: "Irish Coffee", price: "12", note: "whisky, café, chantilly" },
              { name: "Kreole Kafe", price: "10", note: "rhum, café, chantilly" }
            ]
          },
          {
            title: "Les So Fresh",
            script: true,
            items: [
              { name: "L'ambré", price: "8", desc: "Expresso, lait d'amande, miel" },
              { name: "Café frappé", price: "5", desc: "Expresso, sirop de canne" },
              { name: "Rhumarretto", price: "10", desc: "Expresso, rhum vieux, amaretto" },
              { name: "Espresso Martini", price: "11", desc: "Expresso, vodka, liqueur de café, sirop de canne" }
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- VINS ---------------- */
  vins: {
    label: "Vins & Champagne",
    intro: "Une sélection de rouges, blancs et rosés au verre et à la bouteille, et une carte de champagnes.",
    columns: [
      {
        groups: [
          {
            title: "Rouge",
            items: [
              { name: "Cabernet Sauvignon", price: "5,5 / 26", note: "Jean-Claude Mas · verre / bouteille", desc: "Robe grenat profonde, nez de fruits noirs et épices douces, tanins soyeux, finale sur le cacao." },
              { name: "Bordeaux", price: "27", note: "Cru de la Maqueline · bouteille", desc: "Fruits noirs mûrs et notes toastées-vanillées, tanins fermes bien intégrés." },
              { name: "Cheverny", price: "32", note: "Domaine Maison · bouteille", desc: "Léger, élégant et fruité, beaucoup de fraîcheur et des tanins fins." },
              { name: "Pic Saint Loup", price: "34", note: "Mas Gourdou, cuvée Pas du Loup · bouteille", desc: "Fruits rouges mûrs et garrigue, bouche ronde, finale boisée élégante." },
              { name: "Languedoc", price: "39", note: "Domaine de Causse d'Arboras · Terrasses du Larzac AOP bio · bouteille", desc: "Nez riche de fruits noirs, charpente puissante, finale longue sur la réglisse." },
              { name: "Bandol", price: "44", note: "Domaine Bunan · bouteille", desc: "Nez boisé, vin puissant et racé, tanins tout en rondeur." },
              { name: "Pessac-Léognan", price: "59", note: "Comte de Malartic · bouteille", desc: "Fruits rouges et noirs, épices douces, équilibre élégant, belle densité." }
            ]
          }
        ]
      },
      {
        groups: [
          {
            title: "Blanc",
            items: [
              { name: "100% Sauvignon", price: "5,5 / 26", note: "Domaine de Bel Air · verre / bouteille", desc: "Nez d'agrumes et fruits blancs, texture souple, salinité structurante." },
              { name: "100% Chardonnay", price: "5,5 / 27", note: "Cuvée Laroche · verre / bouteille", desc: "Fruits blancs mûrs, belle fraîcheur, finale saline et minérale." },
              { name: "Chardonnay Kia Ora", price: "29", note: "New Zealand · bouteille", desc: "Fruits blancs, pointe de vanille et brioche, acidité vive." },
              { name: "Costières de Nîmes", price: "30", note: "Château Oustau Saint André · bouteille", desc: "Agrumes, fleurs blanches, touche minérale, finale persistante." },
              { name: "Loire · Vouvray", price: "32", note: "Les Tilleuls · bouteille", desc: "Fleurs blanches et fruits à chair blanche, vivacité du Chenin Blanc." },
              { name: "Côte de Provence", price: "38", note: "Domaine La Sanglière · bouteille", desc: "Puissance solaire, salinité naturelle, arômes d'abricot et de poire." },
              { name: "Chablis", price: "51", note: "Christophe Patrice · bouteille", desc: "Fruits jaunes, minéralité fumée, acidité dynamique, finale franche." },
              { name: "Pouilly Fumé", price: "55", note: "Maison Chavet · bouteille", desc: "Bouche crémeuse et ronde, côté minéral, expression classique du sauvignon." }
            ]
          }
        ]
      },
      {
        groups: [
          {
            title: "Rosé",
            items: [
              { name: "Pays d'Oc Jean-Claude Mas", price: "5 / 25", note: "Aurore · verre / bouteille", desc: "Nez gourmand de cerise et fraise des bois, texture soyeuse." },
              { name: "IGP Atlantique", price: "26", note: "La cabane du Pyla · bouteille", desc: "Fruits rouges frais, notes florales, finale nette et équilibrée." },
              { name: "Côtes de Thau", price: "27", note: "L'Exhib · bouteille", desc: "Pamplemousse et pêche blanche, attaque fraîche et fruitée." },
              { name: "Côte de Provence", price: "29", note: "Château Peyrassol, cuvée Lacroix · bouteille", desc: "Fruits à chair blanche, agrumes, salinité gourmande." },
              { name: "Côtes Varoises", price: "31", note: "Opaline · bouteille", desc: "Fleurs blanches, pêche et agrumes, élégance subtile." },
              { name: "Côte de Provence", price: "37", note: "Château Peyrassol, cuvée les Commandeurs · bouteille", desc: "Fruits rouges et agrumes, fraîcheur cristalline, finale raffinée." }
            ]
          },
          {
            title: "Champagne",
            boxed: true,
            items: [
              { name: "Ernest Rapeneau brut", price: "11 / 70", note: "la coupe / bouteille" },
              { name: "Ernest Rapeneau Blanc de Blanc", price: "90", note: "bouteille" },
              { name: "Prestige des Sacres Blanc de Blanc", price: "100", note: "bouteille" },
              { name: "Perrier Jouët brut", price: "120", note: "bouteille" }
            ]
          }
        ]
      }
    ]
  },

  /* ---------------- SPIRITUEUX ---------------- */
  spiritueux: {
    label: "Spiritueux & Rhums",
    intro: "Alcools servis en 4 cl. Une cave à rhums vieux de Guadeloupe et de Martinique à découvrir.",
    columns: [
      {
        groups: [
          {
            title: "Les Rhums",
            script: true,
            items: [
              { name: "Ti Punch", price: "4" },
              { name: "Ti Punch Miel", price: "4,5" },
              { name: "Ti Punch Black Cane", price: "6" },
              { name: "Ti Punch Bio", price: "5,5" },
              { name: "Ti Vieux", price: "6" },
              { name: "Ti Vieux Miel", price: "6,5" },
              { name: "Punch parfum au choix", price: "7", desc: "Coco / coco gingembre / cacahuète" },
              { name: "Crème de Rhum Vieux", price: "7" }
            ]
          },
          {
            title: "Les Classiques",
            script: true,
            items: [
              { name: "Ricard", price: "5" },
              { name: "Martini", price: "6", note: "blanc / rouge" },
              { name: "Kir Cassis", price: "6" },
              { name: "Kir Royal", price: "11,5" },
              { name: "Vodka / Téquila / Gin Oberi / Get 27 / Get 31", price: "10" },
              { name: "Whisky Old Virgina", price: "10" },
              { name: "Whisky Ballantines", price: "10" }
            ]
          },
          {
            title: "Les Liqueurs",
            script: true,
            items: [
              { name: "Crèmes au choix", price: "8", desc: "La Croqueuse (crème de pommes) / La Menteuse (crème de menthe) / La Pulpeuse (crème de citron)" }
            ]
          }
        ]
      },
      {
        groups: [
          {
            title: "Cave à vieux · Guadeloupe",
            script: true,
            boxed: true,
            items: [
              { name: "Damoiseau VSOP 4 ans", price: "8,5" },
              { name: "Damoiseau XO", price: "14" },
              { name: "Damoiseau 8 ans", price: "15" },
              { name: "Damoiseau 10 ans", price: "18" },
              { name: "Biel 2018", price: "18" },
              { name: "Bellevue 1821", price: "19" },
              { name: "Bologne Cask", price: "7" },
              { name: "Bologne Dark Sail", price: "8" },
              { name: "Bologne VSOP", price: "10" },
              { name: "Bologne XO", price: "19" },
              { name: "Reimonenq JR", price: "8" },
              { name: "Reimonenq 7 ans", price: "12" },
              { name: "Reimonenq 9 ans", price: "18" },
              { name: "61 degrès 9 by 619", price: "9" },
              { name: "51 degrès by 619", price: "7" },
              { name: "Longueteau Symphonie", price: "16" },
              { name: "Longueteau Concerto", price: "18" }
            ]
          },
          {
            title: "Cave à vieux · Martinique",
            script: true,
            items: [
              { name: "HSE Black Sheriff", price: "8" },
              { name: "HSE VSOP", price: "10" },
              { name: "Clément VO", price: "8" },
              { name: "Clément VSOP", price: "15" }
            ]
          }
        ]
      }
    ]
  }

};
