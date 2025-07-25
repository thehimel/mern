# Setting Up Iconify Icons in Next.js

This guide shows how to set up build-time icon generation using Unplugin Icons in a Next.js project with Nextra and Serwist.

## Installation

Install the required dependencies:

```bash
npm install unplugin-icons @iconify/json --save-dev
```

## Configuration

Add the Unplugin Icons import and webpack configuration to your existing `next.config.mjs`:

```js
// Add this import at the top
import Icons from 'unplugin-icons/webpack'

// Add this webpack configuration to your nextraConfig
const nextraConfig = withNextra({
  webpack(config) {
    config.plugins.push(
      Icons({
        compiler: 'jsx',
        jsx: 'react'
      })
    )
    return config
  }
})
```

## Usage

### Basic Import and Usage

Import icons directly using the `~icons/` prefix:

```tsx
import CardsPlaying from '~icons/mdi/cards-playing'
import BookOpen from '~icons/lucide/book-open'
import Settings from '~icons/heroicons/cog-6-tooth'

// Use exactly like other React components
<CardsPlaying className="w-5 h-5" />
<BookOpen size={24} />
<Settings className="text-blue-500" />
```

### Integration with Navigation Items

Use generated icons in your navigation configuration:

```tsx
import CardsPlaying from '~icons/mdi/cards-playing'
import { BookOpen, Table } from "lucide-react"

export const NAV_ITEMS = {
  CARD_GAMES: {
    title: 'Card Games',
    description: 'Learn German through interactive card games',
    icon: CardsPlaying, // Direct component reference
    href: '/card-games',
  },
  LESSONS: {
    title: 'Lessons',
    icon: BookOpen,
    href: '/lessons',
  }
}
```

### Icon Naming Convention

Icons follow this pattern: `~icons/{icon-set}/{icon-name}`

- **Material Design Icons**: `~icons/mdi/icon-name`
- **Lucide Icons**: `~icons/lucide/icon-name`
- **Heroicons**: `~icons/heroicons/icon-name`
- **Font Awesome**: `~icons/fa/icon-name`

Examples:
```tsx
import PlayCard from '~icons/mdi/cards-playing'
import Email from '~icons/lucide/mail'
import Home from '~icons/heroicons/home'
import Star from '~icons/fa/star'
```

## TypeScript Support

Add type definitions for better IDE support in your `tsconfig.json` or create a `types/icons.d.ts` file:

```typescript
declare module '~icons/*' {
  import { ComponentType, SVGProps } from 'react'
  const component: ComponentType<SVGProps<SVGSVGElement>>
  export default component
}
```

## Benefits

- ✅ **Build-time generation** - Icons are generated at build time, not runtime
- ✅ **Tree-shaking** - Only used icons are included in the bundle
- ✅ **TypeScript support** - Full type safety and autocomplete
- ✅ **Consistent API** - Same props interface as other icon libraries
- ✅ **Auto-completion** - IDE support for icon discovery
- ✅ **No runtime overhead** - Pure SVG components, no JavaScript dependencies

## Available Icon Sets

With `@iconify/json` installed, you have access to 150+ icon sets:

- **mdi** - Material Design Icons (7000+ icons)
- **lucide** - Lucide Icons (1000+ icons)
- **heroicons** - Heroicons (300+ icons)
- **fa** - Font Awesome (2000+ icons)
- **bi** - Bootstrap Icons (1800+ icons)
- **tabler** - Tabler Icons (4000+ icons)

## Performance Notes

- Icons are statically generated at build time
- No runtime JavaScript required for icon rendering
- Smaller bundle sizes compared to icon fonts
- Better performance than dynamic icon loading
- Works perfectly with Next.js static optimization
