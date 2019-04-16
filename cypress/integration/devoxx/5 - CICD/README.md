# CICD - From Zero to Hero

Utiliser Cypress en local avec une interface graphique, c'est bien. Utiliser nos tests dans le cadre d'une intégration continue, c'est mieux ! Nous allons découvrir comment exécuter nos tests en mode *headless*, utiliser le *dashboard service* de Cypress et une intégration continue sur le cloud : *CircleCI*.

## Le mode headless

La commande [run](https://docs.cypress.io/guides/guides/command-line.html#cypress-run) de Cypress permet de lancer nos tests en mode *headless* (c'est-à-dire, sans avoir besoin d'interface graphique).

Dans le fichier `package.json`, définissez un script `cypress:run` qui va exécuter en mode *headless* tous les tests contenu dans le dossier `cypress/integration/devoxx`.

```javascript
"cypress:run": "cypress run -s 'cypress/integration/devoxx/**'"
```

```bash
npm run cypress:run
```

## Enregistrer vos exécutions de tests

⚠️ Pré-requis : avoir un compte Github

Avec l'option [record](https://docs.cypress.io/guides/guides/command-line.html#cypress-run-record-key-lt-record-key-gt), nous allons pouvoir enregistrer différentes exécutions :

- Lancer l'interface de Cypress
- S'authentifier en cliquant sur le bouton `Log In` en haut à droite
- Une fois authentifié, vous pouvez maintenant aller sur la partie `Runs` de l'interface, ensuite cliquer sur le bouton `Set up project to record`
- Définissez un nom ainsi que l'organisation, puis valider (laissez votre projet en public)

Un `projectId` sera défini et sera automatiquement ajouté à votre fichier de configuration Cypress `cypress.json` 👌. Pensez à commité ce fichier.

Une ligne de commande `cypress run` sera affiché avec le paramètre `key` positionné. Prenez cette ligne de commande et exécutez-la dans votre terminal : votre test est en train d'être enregistré !

- Avec un navigateur, allez sur le [dashboard service](https://dashboard.cypress.io/#/login) et validez que vos tests sont bien présents
- Prenez le temps de découvrir le *dashboard*

## CICD sur le cloud

Dans cette partie, nous allons utiliser [CircleCI](https://circleci.com/). Cypress peut évidemment s'interfacer avec de nombreuses solutions de CI (voir les [exemples](https://docs.cypress.io/guides/guides/continuous-integration.html#Examples)). Cependant, la tâche est plus facile avec CircleCI grâce à l'[orbe Cypress](https://github.com/cypress-io/circleci-orb) !

- Créez un compte sur CircleCI
- Pushez le code du projet sur un *repository* de votre compte Github
- Dans CircleCI, déclarez votre projet fraichement créé (dans la partie `Add projects`)
- Pensez à positionner la variable d'environnement `CYPRESS_RECORD_KEY` avec la clé qui a été généré en 1ère partie
- Lancer un *build* (via CircleCI ou en poussant du code votre *repository*)
- Une fois le *build* achevé, allez dans le [dashboard service](https://dashboard.cypress.io) et regardez les différents résultats des tests ainsi que leur temps d'exécution.

Comment ça marche ?

- Jetez un coup d'oeil au fichier `circle.yml`
- La [documentation Cypress](https://docs.cypress.io/guides/guides/continuous-integration.html#Example-CircleCI-Orb) relative à la CICD avec CircleCI
- La [doxumentation de l'orbe Cypress](https://github.com/cypress-io/circleci-orb)
