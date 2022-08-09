
# Défis Javascript
Réaliser le plus de défis possible dans le temps imparti.

## Instructions

 - Les défis sont classés par ordre de difficulté
 - Cherchez par vous même au maximum ( ~~pas d'internet~~ )
 - Les défis peuvent être réalisés dans l'ordre que vous le souhaitez
 - Le design n'est pas important

## Consignes

 1. Créer un repository par groupe.
 2. Chacun doit être contributeur.
 3. Créer une branche par défi.
 4. La structure d'un défi est la suivante :
	 - Un index.html
	 - Un script.js
	 - Un style.css (si besoin)
5. À chaque défi fini, le pusher sur la branche lui correspondant

## Défis

### Level 1

#### 01-ChangeColor
En HTML, réaliser une div centrée au milieu de la page, de hauteur et largeur 50vh, avec un fond rouge.
Au clic sur cette div le fond devient bleu.

*À découvrir: Les événements*

#### 02-ChangeBackgroundColor
Au chargement de la page, le background du body devient noir.
Lorsque l'on clique sur :
- la touche R, le background devient rouge
- la touche G, le background devient vert
- la touche B, le background devient bleu
- la touche P, le background devient rose
- la touche Y, le background devient jaune. 
Pour toute autre lettre le background devient blanc.

*À découvrir : Le switch*

#### 03-EvenAndOdd
En HTML, réaliser une div centrée au milieu de la page, de hauteur et largeur 50vh, avec un fond rose. Lorsque le nombre de clic sur la div est pair, mettre le fond en vert, lorsqu’il est impair en jaune. Pour chaque multiple de 10, le fond redevient rose.

*À découvrir : Le modulo*

#### 04-HelloYou

En HTML, réaliser deux inputs, un bouton et un paragraphe. Le premier input contiendra le nom, le deuxième input le prénom. Au clic du bouton, afficher dans le paragraphe : "Bonjour NOM Prénom" à l'aide des valeurs récupérées.

*À découvrir : Récupérer des valeurs et les afficher*

#### 05-HowOldAreYou

En HTML, réaliser un input et un bouton. L'input contiendra une date de naissance. Au clic du bouton, afficher : "Tu as X ans". X sera remplacé par l'âge calculé.

##### PS: Ce défi doit marcher tout seul dans 10 ans sans modifier dans le code.

*À découvrir : Manipuler des valeurs et l'objet DATE*


### Level 2

#### 01-Translate

En HTML, réaliser une liste déroulante et un bouton. La liste déroulante contiendra les valeurs suivantes :
- France
- Espagne
- Angleterre
- Italie
- Allemagne
Au clic du bouton, afficher : "Bonjour" dans la langue correspondant au pays sélectionné.

*À découvrir : balise select*

#### 02-Binary

En HTML, réaliser un input et un bouton. L'input contiendra un nombre.
Au clic du bouton, afficher la conversion du nombre en binaire (**cf Martin**).

*À découvrir : la récursivité*

#### 03-CaseSensitive

En HTML, réaliser un input et un bouton. L'input contiendra une phrase.
Au clic du bouton, afficher la phrase convertie comme suit :

 - Les majuscules deviennent des minuscules
 - Les minuscules deviennent des majuscules
 - Les autres caractères restent inchangés

*À découvrir : Table ASCII*

#### 04-MovieSelector


En HTML, créer un bouton rond contenant un logo de dés à l’intérieur (utiliser [font awesome](https://fontawesome.com/)). À chaque clic du bouton un titre de film apparaît aléatoirement en dessous.
En JS: Créer une variable de type tableau comprenant 5 titres de films et une
fonction à associer au bouton.
Attention, à chaque nouveau clic, l’ancien film affiché doit disparaître.

*À découvrir : Manipuler les tableaux*

#### 05-FizzBuzz

Écrivez un programme court qui imprime chaque nombre de 1 à 100 sur une nouvelle ligne.
- Pour chaque multiple de 3, écrivez “Fizz” au lieu du nombre.
- Pour chaque multiple de 5, écrivez “Buzz” au lieu du nombre.
- Pour les nombres multiples de 3 et 5, écrivez “FizzBuzz” à la place du nombre.
##### Écrivez une solution afin qu’elle contienne le moins de caractère possible.

*À découvrir : Exercice type d'entretien d'embauche*

### Level 3

#### 01-Purge

En HTML, créer deux input et un bouton. Le premier input contiendra une chaîne de caractère, le deuxième input le caractère à enlever.
Au clic du bouton, afficher la chaîne de caractère nettoyée, c'est-à-dire sans le caractère passé dans le deuxième input. Si le caractère n'est pas présent dans la chaîne, afficher la chaîne telle quelle.

**Exemple :**
-   Purge("Bonjour","o") renverra "Bnjur"
-   Purge("J'ai horreur des espaces"," ") renverra "J'aihorreurdesespaces"
-   Purge("Moi, je m'en fous", "y") renverra "Moi, je m'en fous"

*À découvrir : Manipulation des chaines de caractères*

#### 02-Anagram

En HTML, créer deux input et un bouton. Le premier input contiendra une chaîne de caractère, le deuxième input contiendra une deuxième chaîne de caractère.
Au clic du bouton, afficher une icône 'tick' verte si les phrases sont des anagrammes, une icône 'croix' rouge dans le cas contraire.

Les icônes doivent être chargées depuis font-awesome. Ne pas prévoir d'élément HTML contenant l'icône, le générer depuis le JS.

**Exemple :**
-   Café - Face -> 'tick'
-   Migraine - Imaginer -> 'tick
-   Manu - Floriane -> 'croix'

*À découvrir : Création d'élément et quicksort*

#### 03-API

En HTML, créer un input et un bouton. L'input contiendra du texte. Au clic sur le bouton, chercher l'utilisateur saisi dans l'input via l'API de GitHub. Afficher son nom et la date de création de son compte (date en français JJ/MM/AAAA). Si aucun utilisateur n'existe, afficher Schnouf et la date du jour.

*À découvrir : Ajax*

#### 04-Todo

En HTML, créer un input et un bouton. L'input contiendra des tâches. Au clic du bouton, la tâche s'ajoute en dessous avec une petite croix. 
Toutes les tâches ajoutées doivent être stockées dans la mémoire locale du navigateur.
Au chargement de la page, afficher toutes les tâches déjà existantes.
Au clic sur la petite croix, supprimer la tâche du stockage et du DOM.

*À découvrir : LocalStorage*

#### 05-EuroMillion

En HTML, créer un input et un bouton. L'input contiendra des nombres. L'utilisateur doit pouvoir saisir 10 nombres uniquement. Une fois les 10 nombres saisis, les afficher triés dans l'ordre croissant.

*À découvrir : BubbleSort*