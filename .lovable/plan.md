

## Foto für die "Über mich"-Seite einfügen

**Aufgabe**: Dein Foto im Platzhalter auf der "Über mich"-Seite einfügen.

### Umsetzung

**1. Bild in das Projekt kopieren**

Das hochgeladene Bild wird in den `src/assets`-Ordner kopiert:
- `user-uploads://IMG_5858-2.jpeg` → `src/assets/dave-photo.jpeg`

**2. About-Seite aktualisieren: `src/pages/About.tsx`**

Der User-Icon-Platzhalter wird durch dein Foto ersetzt:
- Das Bild wird als ES6-Modul importiert
- Der runde Rahmen mit grünem Akzent bleibt erhalten
- `object-cover` sorgt für optimale Bilddarstellung im runden Format
- Der `User`-Icon-Import kann entfernt werden

### Technische Details

| Datei | Aktion |
|-------|--------|
| `src/assets/dave-photo.jpeg` | Bild speichern |
| `src/pages/About.tsx` | Platzhalter durch echtes Foto ersetzen |

### Code-Änderung

```tsx
// Import hinzufügen
import davePhoto from "@/assets/dave-photo.jpeg";

// Im JSX: Icon durch Bild ersetzen
<div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-primary/30 bg-card overflow-hidden">
  <img 
    src={davePhoto} 
    alt="Dave - Daveat Gründer"
    className="w-full h-full object-cover"
  />
</div>
```

### Ergebnis

- Dein Foto erscheint im runden Rahmen mit grünem Akzent-Glow
- Professionelle Darstellung passend zum Daveat-Design
- Optimale Bildqualität durch Vite-Bundling

