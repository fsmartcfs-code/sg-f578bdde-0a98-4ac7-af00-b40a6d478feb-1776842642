---
title: Restructurer page d'accueil - Comparaison offres
status: in_progress
priority: high
type: feature
tags: [pricing, homepage, comparison]
created_by: agent
created_at: 2026-04-22T07:34:00Z
position: 1
---

## Notes
Mettre à jour la page d'accueil avec nouveaux prix HT, tableau de comparaison des 4 offres, et section Offre Partenaire. Tous les prix passent en HT (base imponible). Chaque offre doit avoir un lien vers sa page dédiée.

## Checklist
- [x] Mettre à jour PricingCards avec nouveaux prix HT (697€, 1097€, 997€ IA, 1997€)
- [x] Créer composant ComparisonTable avec les 4 offres côte à côte
- [x] Ajouter badge "SANS FRAIS MENSUELS" sur chaque offre
- [x] Ajouter CTAs "Découvrir les détails" pointant vers pages dédiées
- [x] Créer section "Offre Partenaire/Apporteur d'affaires"
- [x] Mettre à jour index.tsx avec nouvelle structure
- [x] Ajouter texte explicatif après tableau comparatif

## Acceptance
- Les 4 offres sont comparables en un coup d'œil sur la home
- Chaque offre a un lien clair vers sa page dédiée
- Les prix HT sont affichés correctement