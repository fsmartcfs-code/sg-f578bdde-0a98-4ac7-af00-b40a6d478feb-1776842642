---
title: Recréer tableau comparatif du marché
status: done
priority: high
type: feature
tags: [comparison, market, homepage]
created_by: agent
created_at: 2026-04-29T06:48:47Z
position: 6
---

## Notes
Le tableau comparatif initial "Web Para Autónomos vs Web barata vs Agencia tradicional" a été supprimé lors de la création du tableau de comparaison des 4 packs. L'utilisateur souhaite avoir les DEUX tableaux sur la page d'accueil :
1. Tableau Marché (nous vs concurrence) - à recréer
2. Tableau Packs (Esencial vs Pro vs IA vs Premium) - existe déjà

Le tableau Marché doit être placé AVANT le tableau des Packs dans index.tsx.

## Checklist
- [ ] Créer composant MarketComparison.tsx avec tableau 3 colonnes (Web Para Autónomos / Web Barata / Agencia Tradicional)
- [ ] Section "Precio y Transparencia" : prix transparent, sin cuotas ocultas, modalité paiement 40%/60%
- [ ] Section "Calidad y Profesionalismo" : diseño personalizado, SEO incluido, responsive, velocidad optimizada
- [ ] Section "Herramientas de Conversión" : WhatsApp, widget reviews, portfolio, formulario, Calendly
- [ ] Section "Soporte y Mantenimiento" : 3 mois modifs gratuites, temps réponse 24-48h, soporte español
- [ ] Section "Tiempo de Entrega" : 7-20 días vs 15-30 días vs 30-60 días
- [ ] Icônes Check (vert) / X (gris) / texte pour les features
- [ ] Colonne "Web Para Autónomos" mise en avant avec bg-primary/10
- [ ] Note explicative sous le tableau : "Nuestra diferencia: Transparencia total..."
- [ ] Importer MarketComparison dans index.tsx et placer AVANT ComparisonTable
- [ ] Vérifier l'ordre final : Hero → BeforeAfter → SocialProof → Portfolio → PainPoints → MarketComparison → ComparisonTable → PricingCards → PartnerOffer → FinalCTA → Footer

## Acceptance
- Les deux tableaux sont visibles sur la page d'accueil
- Le tableau Marché apparaît avant le tableau Packs
- La différenciation vs concurrence est claire et convaincante