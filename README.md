# Règles Générales d'UI

Ce document définit les standards visuels pour l'application utilisant la palette de couleurs personnalisées.

## Palette de Couleurs

### Primaire (`primary`)
- **50**: `#f4f4fb` (Fond très clair)
- **600**: `#4b4bc3` (Boutons/actions principales)
- **800**: `#333399` (Hover/états actifs)
- **950**: `#1b1b50` (Textes foncés)

### Neutres (`gray`)
- **100**: `#f4f4f5` (Fonds secondaires)
- **400**: `#a1a1aa` (Textes désactivés)
- **700**: `#3f3f46` (Textes principaux)
- **950**: `#0a0a0b` (Textes titres)

## Application des Couleurs

### Boutons
| Type          | Classe Tailwind                          | État Hover           | État Focus           |
|---------------|------------------------------------------|----------------------|----------------------|
| Primaire      | `bg-primary-600 text-white`              | `bg-primary-700`     | `ring-primary-300`   |
| Secondaire    | `bg-gray-100 text-gray-800 border`       | `bg-gray-200`        | `ring-gray-300`      |
| Tertiaire     | `text-primary-600 bg-transparent`        | `bg-primary-50`      | `ring-primary-100`   |

# Règles de Style pour les Badges

## Principes de Base

Les badges doivent :
- Avoir un contraste suffisant (ratio 4.5:1 minimum)
- Utiliser une typographie lisible
- Avoir des coins arrondis cohérents
- Maintenir une hiérarchie visuelle claire

## Palette Appliquée

### Couleurs Principales
| Type          | Fond           | Texte          | Exemple |
|---------------|----------------|----------------|---------|
| Primaire      | `primary-100`  | `primary-800`  | ![Primary Badge](https://via.placeholder.com/100x30/f4f4fb/1b1b50?text=Primary) |
| Neutre        | `gray-100`     | `gray-800`     | ![Gray Badge](https://via.placeholder.com/100x30/f4f4f5/18181b?text=Neutre) |
| Succès        | `green-100`    | `green-800`    | ![Success Badge](https://via.placeholder.com/100x30/d1fae5/065f46?text=Succès) |
| Avertissement | `yellow-100`   | `yellow-800`   | ![Warning Badge](https://via.placeholder.com/100x30/fef3c7/92400e?text=Attention) |
| Erreur        | `red-100`      | `red-800`      | ![Error Badge](https://via.placeholder.com/100x30/fee2e2/991b1b?text=Erreur) |
