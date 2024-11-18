# Internationalization

## Installation

### Guidelines

* [Guide](https://react.i18next.com/guides/quick-start)
* [Step-by-step guide](https://react.i18next.com/latest/using-with-hooks)
* [Localise React Applications Using I18Next](https://www.youtube.com/watch?v=txHU6lrsa3o)
* [React Localization - Internationalize with i18next](https://locize.com/blog/react-i18next/)

#### Prompts

* `How to implement automatic translations in react application with typescript project using i18next react-i18next
  i18next-http-backend i18next-browser-language-detector by setting up translations files in locales directory?`

### Implementation

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

## Type Safety for Keys

### Guidelines

* [Guide](https://www.i18next.com/overview/typescript)
* [Type-Safe Translations with i18next for your TypeScript project](https://www.youtube.com/watch?v=GLIas4DH3Ww&t)
* [i18next-typescript-examples](https://github.com/locize/i18next-typescript-examples/blob/main/4/src/%40types/i18next.d.ts)

### resources.d.ts

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

### i18next.d.ts

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
