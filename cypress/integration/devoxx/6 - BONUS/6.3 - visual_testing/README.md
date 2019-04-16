# Test de régression visuelle avec Percy

Dans ce test, nous allons voir comment il est possible de venir s'interfacer avec un service externe afin de mettre en place des tests de régression visuelle facilement.

## Intégration avec Percy.io

L'objectif n'est pas de venir utiliser une librairie et de faire du visual testing manuellement, mais plutôt de profiter de la capacité d'extension de Cypress via les *custom commands*.

### Voici les étapes à suivre pour avoir un compte Percy utilisable

- Allez sur Percy.io et créer un nouveau compte (15 jours d'essai)
- Créez dans la foulée une nouvelle organisation
- Créez un nouveau projet dans l'organisation
- Récupérez le PERCY_TOKEN et mettez le en variable d'environnement

TODO comment positionner les variables d'environnements sur les différentes OS

 ⚠️ Mettre une variable d'environnement en ligne de commande :  ⚠️

- MAC / LINUX :

```bash
export PERCY_TOKEN = 'percy token'
````

- WINDOWS (powershell) :

```bash
$env:PERCY_TOKEN = 'percy token'
````

Vous venez de finir le setup pour utiliser Percy sur votre machine et ainsi simuler un environnement de CICD, car le token est normalement à mettre dans votre CICD. (Mais votre machine va jouer ce rôle pour ce workshop)

### Voici les étapes pour mettre en place votre premier test visuel

- Installation de percy pour Cypress

```bash
 npm i -D @percy/cypress
````

⚠️ Nous avons déjà mis cette dépendance de dev dans le projet ⚠️

- Maintenant nous allons étendre les comportements de cypress en ajoutant dans `command.js` les commandes percy :

```javascript
import '@percy/cypress'
```

- Avant d'utiliser la commande nous allons préparer le run de cypress via la commande `percy`. Ajouter le script suivant dans le fichier `package.json`:

```javascript
"percy:run": "percy exec -- cypress run -s 'cypress/integration/devoxx/**'"
```

⚠️ Comme vous pouvez le voir, `percy` vient *wrapper* l'exécution de cypress avec un agent qui va capter les utilisations des commandes de screenshot ⚠️

- Nous pouvons enfin utiliser la commande suivante, pour faire des screenshots pris en compte par percy :

```javascript
cy.percySnapshot()
```

⚠️ Je vous propose de la mettre en place dans le cadre du test d'affichage de la page de settings (En plaçant le screenshot à la fin du test) ⚠️

- Lancer le script précédemment mis en place :

```bash
npm run percy:run
```

- Allez controler dans l'interface Percy.io que le build a bien été pris en compte
- Maintenant allez dans le composant settings et mettez un champs en double par exemple (pour changer le rendu visuel), sauvegardez et relancez le build
- Vous devez constater dans le dashboard de Percy.io qu'il a détecté une regression visuelle

⚠️ Si vous ne voyez pas de régression, peut-être qu'il faut décocher l'`auto approval` dans les settings du projet Percy ⚠️

⚠️ Important à prendre en compte: le contrôle de la régression sera toujours manuel avec Percy et c'est normal. Il ne peut pas faire la différence entre un changement volontaire, d'une régression visuelle. ⚠️

---

## ICI SE TERMINE VOTRE VOYAGE INITIATIQUE VERS CYPRESS ! 💪

---
