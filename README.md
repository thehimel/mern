# mern

## How-Tos

* [How to set up TypeScript with Node.js and Express (2023)](https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf)
* [Serve a React app from an Express server | React frontend and Express API setup in 1 project!](https://youtu.be/4pUBO31nkpk)
* [Translations - Localise React Applications Using I18Next](https://youtu.be/txHU6lrsa3o)
  * [Step by step guide](https://react.i18next.com/latest/using-with-hooks)
  * [React Localization - Internationalize with i18next](https://locize.com/blog/react-i18next/)
  * ChatGPT Prompt: How to implement automatic translations in react application with trypesript project using i18next react-i18next i18next-http-backend i18next-browser-languagedetector by setting up translations files in locales directory?

## Tools

* GUI For MongoDB: [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
  * Install via [brew](https://formulae.brew.sh/cask/mongodb-compass)

## Snippets

### Edit Theme in Next UI

```javascript
import {nextui} from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  // ...
  plugins: [require("tailwindcss-animate"), nextui({
    themes: {
      dark: {
        layout: {},
        colors: {
          'background': {
            DEFAULT: '#900C3F',
          },
        },
      },
    },
  })],
}
```

## Installations

### Internationalization

[Guide](https://react.i18next.com/guides/quick-start)

* `npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector`
* Created `src/lib/i18n.ts`
* Imported `i18n.ts` in `main.tsx`
* Configured `Suspense` in `main.tsx`
* Created `translation.json` files in `/public/static/locales/{languageCode}/`

> `main.tsx` is equivalent to `index.tsx`

### Loaders with UI Ball LDRS

[Guide](https://uiball.com/ldrs/)

* `npm install ldrs`
* Add to `src/vite-env.d.ts`: `/// <reference types="ldrs" />`
* Now you can use in the component:

```javascript
import 'ldrs/quantum'

const Loader = () => {
  return (
    // Certically centered. Negative margin is to subtract the space taken by the header and footer. 
    <div className="flex items-center justify-center min-h-screen -mt-36">
      <l-waveform size="35" stroke="3.5" speed="1" color="black"></l-waveform>
    </div>
  );
}

export default Loader;
```

