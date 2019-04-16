# Créer un utilisateur

Dans plusieurs tests, nous aurons besoin d'être authentifié. Le but de cette étape est de se créer un utilisateur afin de pouvoir le réutiliser dans les différents tests.

- Lancer le site applicatif `npm start`
- Aller sur `http://localhost:4100/register`
- Renseigner les différents champs et appuyer sur le bouton `signup` (retenez bien les valeurs que vous venez de remplir 😏)

Pour ne pas avoir à retenir les valeurs que vous venez d'utiliser, vous pouvez les stocker dans votre fichier de configuration `cypress.json`

```json
{
  "baseUrl": "http://localhost:4100",
  "email":"TODO EMAIL",
  "password":"TODO PASSWORD",
  "username": "TODO USERNAME"
}
```

Ainsi, si vous voulez récupérer vos valeurs dans vos tests, vous pouvez utiliser la commande `Cypress.config()`

- `Cypress.config().email` pour récupérer l'email
- `Cypress.config().password` pour récupérer le password
- `Cypress.config().username` pour récupérer le username
