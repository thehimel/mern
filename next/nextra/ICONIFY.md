# Add Pre-built Iconify Icons to Your Nextra Project

## 1. Install Dependencies

```bash
npm install -D @iconify/json @iconify/tailwind
```

## 2. Update `tailwind.config.js`

```javascript
const { addDynamicIconSelectors } = require('@iconify/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme.config.tsx",
  ],
  theme: {
    extend: {
      // ... your existing theme config
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    addDynamicIconSelectors(),
  ],
}
```

## 3. Use Icons in Your Code

```jsx
// Direct usage - auto-detects and bundles only used icons
<span className="icon-[mingcute--github-line]"></span>
<span className="icon-[mdi--home]"></span>
<span className="icon-[lucide--star]"></span>
```

## Examples from the Commit

**GitHub Link Button:**
```jsx
<Link href="https://github.com/..." target="_blank">
  Github
  <span className="ml-[6px] icon-[mingcute--github-line]"></span>
</Link>
```

**Other Common Usage:**
```jsx
<button className="flex items-center gap-2">
  <span className="icon-[lucide--download]"></span>
  Download
</button>

<div className="flex items-center">
  <span className="icon-[mdi--check-circle] text-green-500 mr-2"></span>
  Success message
</div>
```

## Icon Format

**Pattern:** `icon-[{set}--{name}]`

**Examples:**
- `icon-[mdi--home]`
- `icon-[lucide--star]` 
- `icon-[heroicons--bell]`
- `icon-[mingcute--github-line]`

## Find Icons

Browse at: **https://icon-sets.iconify.design/**

That's it! No configuration needed - just use any icon and it gets automatically bundled.

## References

* [nextjs-nextra-starter](https://github.com/pdsuwwz/nextjs-nextra-starter)
