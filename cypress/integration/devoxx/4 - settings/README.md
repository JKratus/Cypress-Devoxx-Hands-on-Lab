# Page de settings

Dans ce test, nous allons tester la page de settings dans son ensemble :
 s'assurer qu'elle s'affiche correctement et que les comportements lors de la soumission de la page sont corrects eux aussi.

- Dans le fichier `spec.js`, compléter the TODOs.
- Refactorez en utilisant les best practices [Cypress selector-playground](https://gitpitch.com/cypress-io/testing-workshop-cypress?p=slides/03-selector-playground#/0/7)
- Pour éviter de répéter un selector trop grand, vous pouvez mettre en place une fonction qui ressemblerai à :

```javascript
const testId = id => `[data-test=${id}]`
```

⚠️ La solution de l'exercice se trouve dans le fichier `answer.js` ⚠️
