# La page article

Dans ce test, nous allons voir 2 fonctionnalités importantes de Cypress : intercepter les requêtes XHR et les custom commands.

## Intercepter les requêtes XHR

Dans la première partie du test (celle concernant la partie non authentifié), on peut constater que les assertions sont très fines.
Lorsqu'on lance le test, celui-ci échoue, néanmoins : l'article n'existe pas côté serveur (il a pu être modifié ou autre).

Pour s'afficher, la page `article` lance 2 requêtes vers le serveur : une pour récupérer les informations relatives à l'article et une
autre pour récupérer les commentaires liés à cet article.

Nous allons utiliser les commandes [cy.server](https://docs.cypress.io/api/commands/server.html) et [cy.route](https://docs.cypress.io/api/commands/route.html) pour contrôler les appels réseaux qui nous intéressent !

Une fois le premier test passé. Nous allons utilisé la commande `cy.route` dans les autres tests pour simuler des erreurs (404, 500) ou avoir des temps de réponses différents et ainsi pouvoir facilement voir comment réagit notre site sur des cas limites.

## Les custom commands

Dans la deuxième partie du test, nous devons être authentifié. La fonctionnalité de `login` est importante dans notre site. Elle peut être aussi utilisée pour afficher la page de `settings` par exemple. Pour mutualiser du code à travers les différents tests, nous allons développer une [custom command](https://docs.cypress.io/api/cypress-api/custom-commands.html) qui nous permettra de nous authentifié facilement dans nos tests.

Si reprendre le code que l'on a vu lors dans notre test de la page `login` peut être tentant, ce n'est cependant pas la méthode la plus efficace. Plutôt que d'utiliser l'interface pour s'authentifier, nous allons le faire de manière programmatique ! 👨‍💻

Dans le fichier `commands.js` qui se trouve dans le répertoire `support`, la commande `login` est déjà déclarée pour vous. Utiliser la commande [cy.request](https://docs.cypress.io/api/commands/request.html) pour faire une requête `POST` sur le endpoint d'authentification `https://docs.cypress.io/api/commands/request.html` puis utiliser la réponse pour récupérer le token et le positionner dans le local storage pour être authentifié d'un point de vue applicatif !

```javascript
window.localStorage.setItem('jwt', token)
```

Pour que votre `custom command` soit vraiment top :

- contrôler la manière dont elle loggue dans le panel de commande <https://docs.cypress.io/api/cypress-api/custom-commands.html#Command-Logging>
- faites un fichier de définition Typescript pour avoir la complétion de votre command <https://docs.cypress.io/api/cypress-api/custom-commands.html#5-Write-TypeScript-definitions>
