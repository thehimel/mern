# How to Install Tailwind CSS and shadcn/ui in Nextra

**Important Note**

* We were having issues installing Tailwind CSS v4 with shadcn/ui. Tailwind CSS was working but shadcn/ui was not working.
* The issue was solved by installed `tailwindcss@^3.4.0`

## Tailwind CSS

Project Directory Structure:

```
project_root/
├── .next/
├── node_modules/
├── src/
│   ├── components/
│   │   ├── counters.module.css
│   │   └── counters.tsx
│   ├── pages/
│   │   ├── advanced/
│   │   ├── _app.mdx
│   │   ├── _meta.json
│   │   ├── about.mdx
│   │   ├── advanced.mdx
│   │   ├── another.mdx
│   │   └── index.mdx
│   ├── styles/
│   │   └── globals.css
│   └── theme.config.tsx
├── .gitignore
├── next.config.mjs
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── refresh.sh
├── tailwind.config.js
└── tsconfig.json
```

### 1. Install Tailwind CSS and its dependencies

```bash
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
```

### 2. Initialize Tailwind CSS

```bash
npx tailwindcss init -p
```

> This creates `tailwind.config.js` and `postcss.config.js` files.

`postcss.config.js` (auto-configured):

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3. Configure `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme.config.tsx",
  ],
  theme: {
      extend: {},
  },
  plugins: [],
}
```

### 4. Add Tailwind directives to your CSS

Create a CSS file (e.g., `src/styles/globals.css`) or add to your existing one:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Import the CSS file

Make sure to import your CSS file in your `src/pages/_app.mdx`:

```mdxjs
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}
```

### 6. Test It Works

Try adding some Tailwind classes to test:

````mdxjs
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello from Tailwind!
</div>
````

## shadcn/ui

### 1. Setting up shadcn/ui:

Start by initializing shadcn/ui in your project:

```bash
npx shadcn init
```

### 2. Add individual components as needed. Here's how to install a card component:

```bash
npx shadcn add card
```

### 3. Once installed, you can import and use the components throughout your application:

```jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Welcome</CardTitle>
  </CardHeader>
  <CardContent>
    <p>This is a card component from shadcn/ui</p>
  </CardContent>
</Card>;
```

### 4. Sync Nextra Theme with shadcn/ui

Create the following files:

* [src/components/theme/theme-provider.tsx](theme/theme-provider.tsx)
* [src/components/theme/theme-sync.tsx](theme/theme-sync.tsx)

Configure `src/pages/_app.mdx`:

```mdxjs
import '@/styles/globals.css'
import ThemeProvider from "../components/theme/theme-provider";
import ThemeSync from "../components/theme/theme-sync";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeSync />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

## References

* For how-to steps: [How to Use Nextra with Tailwind CSS and shadcn](https://nextra-tailwind-shadcn.vercel.app/posts/tutorial)
  * [Source Code](https://github.com/ObservedObserver/nextra-docs-tailwind-shadcn-template)
* For directory structure: [nextjs-nextra-starter](https://github.com/pdsuwwz/nextjs-nextra-starter)
* Claude: Asked claude to analyse my GitHub repo and find issues using above reference.
