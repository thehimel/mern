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

### Redux Toolkit with Persist

* Configure store. Suppose you are configured the base app. Then you need:
  * store.ts
  * hooks.ts
  * constant.ts
  * base/baseActions.ts
  * base/Slice.ts
* Then configure your provider.tsx
* Make sure the provider is properly used in main.tsx
* You may encounter errors related to types of "redux-persist/lib/storage". Configure "src/redux-persist.d.ts" to resolve that.

```javascript
// redux-persist.d.ts

declare module "redux-persist/lib/storage" {
  import { WebStorage } from "redux-persist";

  const storage: WebStorage;
  export default storage;
}
```

```javascript
// provider.tsx

import { NextUIProvider } from "@nextui-org/system";
import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "@/store/store.ts";

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NextUIProvider navigate={navigate}>{children}</NextUIProvider>
      </PersistGate>
    </ReduxProvider>
  );
}
```

#### Resources

* https://redux-toolkit.js.org/tutorials/quick-start
* https://www.dhiwise.com/post/how-to-use-redux-persist-in-react-applications

### Internationalization

#### Installation

##### Guidelines

* [Guide](https://react.i18next.com/guides/quick-start)
* GPT Prompt: `How to implement automatic translations in react application with typescript project using
  i18next react-i18next i18next-http-backend i18next-browser-language-detector by setting up translations
  files in locales directory?`
* [Localise React Applications Using I18Next](https://www.youtube.com/watch?v=txHU6lrsa3o)

##### Implementation

* `npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector`
* Created `src/lib/i18n.ts`
* Imported `i18n.ts` in `main.tsx`
* Configured `Suspense` in `main.tsx`
* Created `translation.json` files in `/public/static/locales/{languageCode}/`
  * Example: `public/static/locales/en/translation.json`

```json
{
  "common": {
    "welcome": "Welcome",
    "loading": "Loading..."
  }
}
```

> `main.tsx` is equivalent to `index.tsx`

#### Type Safety for Keys

##### Guidelines

* [Guide](https://www.i18next.com/overview/typescript)
* [Type-Safe Translations with i18next for your TypeScript project](https://www.youtube.com/watch?v=GLIas4DH3Ww&t)
* [i18next-typescript-examples](https://github.com/locize/i18next-typescript-examples/blob/main/4/src/%40types/i18next.d.ts)

##### resources.d.ts

* You must include all default translations in the Resources interface.

```typescript
// src/client/src/@types/resources.d.ts

import translation from '../../public/static/locales/en/translation.json';

type Translation = typeof translation;

export interface Resources {
  translation: Translation;
}

export type resources = Resources;
```

##### i18next.d.ts

```typescript
// src/client/src/@types/i18next.d.ts

import "i18next";
import { resources } from "@/@types/resources.d.ts";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: resources; // This should match your resources type
  }
}
```

* Now, when you want to access any key, you'll get the recommendations from IDE. Example: `{t('common.welcome')}`.

### Loaders with UI Ball LDRS

* `npm install ldrs`
* Add to `src/vite-env.d.ts`: `/// <reference types="ldrs" />`
* You must register the type of loader you are using in App.tsx. This can be added anywhere, but we are registering at
the app level as we want to register this once globally.

```javascript
import {quantum} from "ldrs";
import {useEffect} from "react";

const App = () => {
  useEffect(() => {
    quantum.register(); // Register quantum once when App mounts
  }, []);

  return (
    <></>
  );
};

export default App;
```

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

### Access Environment Variables

* `npm install vite-plugin-environment`

```typescript
// vite.config.ts

import { defineConfig } from 'vite'
import EnvironmentPlugin from "vite-plugin-environment";

const API_URL = process.env.API_URL || 'http://127.0.0.1:8000';
const CLIENT_ENV = {
  API_URL: API_URL,
  DEBUG: process.env.DEBUG || 'False',
};

export default defineConfig({
  plugins: [
    EnvironmentPlugin(CLIENT_ENV)
  ],
})
```

* Now you can access the variables via `process.env.API_URL`.
* Example: `export const DEBUG: boolean = process.env.DEBUG === 'True';`
* You can not access the variables via `import.meta.env.API_URL`.
* If you are in local environment, the `.env` file must be at the same level of `vite.config.ts`.
* Installing the library `dotenv` is not required.

### React Hook Form with Zod

* [React Hook Form (+ Zod) - Complete Tutorial](https://youtu.be/u6PQ5xZAv7Q)
* [react-hook-form-with-zod-and-server-side](https://github.com/ByteGrad/react-hook-form-with-zod-and-server-side)




