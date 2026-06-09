# Fit Track Pro — Bilan Journalier

**Auteur :** Ramatoulaye Gueye  
**Niveau :** Licence 3 Informatique  
**Module :** Développement Angular 21

---

## Présentation

Application de suivi quotidien des activités physiques et d'hydratation.  
L'utilisateur peut enregistrer ses activités de la journée et suivre en temps réel ses indicateurs de santé.

## Fonctionnalités

- Ajout d'activités (SPORT ou HYDRATATION) via un formulaire
- Affichage du journal chronologique avec distinction visuelle des types
- Indicateurs recalculés automatiquement :
  - Total des calories brûlées
  - Total de l'eau consommée
  - Bilan calorique restant (objectif : 2000 kcal)
- Alertes de santé intelligentes :
  - Avertissement de déshydratation tant que l'objectif santé n'est pas atteint
  - Message de félicitations dès que l'eau ≥ 1500 ml ET les calories > 500
- Persistance des données via `localStorage`
- Bouton pour vider le journal et réinitialiser les données

## Technologies utilisées

- Angular 21 (composants Standalone)
- Signals API (`signal`, `computed`)
- Control Flow Angular (`@if`, `@else`, `@for`)
- FormsModule (`ngModel`)
- LocalStorage pour la persistance

## Lancer le projet

```bash
npm install
npm start
```

L'application sera disponible sur `http://localhost:4200`.
