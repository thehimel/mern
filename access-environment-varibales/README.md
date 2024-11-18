## Access Environment Variables in React with Vite

* `npm install vite-plugin-environment`
  * https://next-auth.js.org/getting-started/example
* Route Handlers (`app/`)

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
