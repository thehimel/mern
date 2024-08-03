# mern

## How-Tos

* [How to set up TypeScript with Node.js and Express (2023)](https://dev.to/cristain/how-to-set-up-typescript-with-nodejs-and-express-2023-gf)
* [Serve a React app from an Express server | React frontend and Express API setup in 1 project!](https://youtu.be/4pUBO31nkpk)
* [Translations - Localise React Applications Using I18Next](https://youtu.be/txHU6lrsa3o)
  * ChatGPT Prompt: How to implement automatic translations in react application using i18next react-i18next i18next-http-backend i18next-browser-languagedetector by setting up translations files in locales directory?

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
