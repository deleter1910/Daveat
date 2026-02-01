

## Scroll-to-Top Button und Foto-Platzhalter

### Übersicht

Zwei Verbesserungen werden implementiert:
1. Ein "Scroll-to-Top"-Button, der erscheint, wenn man nach unten scrollt
2. Ein Foto-Platzhalter auf der "Über mich"-Seite

---

### 1. Scroll-to-Top Button

**Neue Komponente: `src/components/layout/ScrollToTop.tsx`**

Ein Button, der:
- Erst erscheint, wenn man mindestens 400px nach unten gescrollt hat
- Unten rechts fixiert ist
- Beim Klick sanft nach oben scrollt
- Im Daveat-Design gestaltet ist (runder Button mit grünem Hover-Effekt)
- Eine sanfte Ein-/Ausblendanimation hat

```text
Design:
┌──────────────────────────────────┐
│                                  │
│                                  │
│                                  │
│                                  │
│                          ┌───┐   │
│                          │ ↑ │   │  <-- Runder Button,
│                          └───┘   │      unten rechts fixiert
└──────────────────────────────────┘
```

**Integration in Layout.tsx**

Der Button wird global im Layout eingebunden, sodass er auf allen Seiten verfügbar ist.

---

### 2. Foto-Platzhalter auf "Über mich"

**Datei: `src/pages/About.tsx`**

Zwischen der Hero-Section und der Story-Section wird ein Foto-Bereich eingefügt:
- Rundes Bild (passend zum modernen Daveat-Design)
- Grüner Akzent-Rahmen
- Platzhalter-Icon, bis das echte Foto hochgeladen wird

```text
Layout:
┌──────────────────────────────────┐
│  Kein Fitness-Guru.              │
│  Sondern dein Stratege...        │
│                                  │
│         ┌─────────┐              │
│         │         │              │
│         │  FOTO   │  <-- Runder Platzhalter
│         │         │              │
│         └─────────┘              │
│                                  │
│  "Ich habe Daveat gegründet..."  │
└──────────────────────────────────┘
```

---

### Technische Details

| Datei | Aktion |
|-------|--------|
| `src/components/layout/ScrollToTop.tsx` | Neu erstellen |
| `src/components/layout/Layout.tsx` | ScrollToTop-Komponente einbinden |
| `src/pages/About.tsx` | Foto-Platzhalter hinzufügen |

### Scroll-to-Top Logik

```typescript
// Pseudo-Code
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 400);
  };
  window.addEventListener("scroll", toggleVisibility);
  return () => window.removeEventListener("scroll", toggleVisibility);
}, []);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
```

### Ergebnis

- Scroll-to-Top Button erscheint auf allen Seiten beim Scrollen
- Foto-Platzhalter auf der About-Seite bereit für dein Bild
- Beide Elemente im Daveat-Design (dunkel, grüne Akzente, runde Formen)

