# Loaders with UI Ball LDRS

## Next.js with Next UI

* Install: `npm install ldrs`
* Register quantum when the layout mounts only once in `app/providers.tsx`

```javascript
"use client";

import { useEffect } from "react";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { SessionProvider } from "next-auth/react";

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  // Register quantum on the client-side when the layout mounts only once
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("ldrs").then(({ quantum, tailChase }) => {
        quantum.register();
        tailChase.register();
      });
    }
  }, []);

  return (
    <SessionProvider>
      <NextUIProvider navigate={router.push}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </NextUIProvider>
    </SessionProvider>
  );
}
```

> `useEffect()` can only be used in client side. Therefore, we can't declare it in `app/layout.tsx`

* `src/components/loader.tsx`

```javascript
"use client";

import "ldrs/quantum";
import { useTheme } from "next-themes";

const Loader = () => {
  const { theme } = useTheme();
  const color = theme === "light" ? "black" : "white";

  return (
    <div className="flex items-center justify-center min-h-screen -mt-24">
      <l-quantum color={color} size="124" speed="1.8" />
    </div>
  );
};

export default Loader;
```

* Now you can just `import Loader from "@/components/Loader.tsx";` and use `<Loader />`

## React with Vite

* Install: `npm install ldrs`
* Add to `src/vite-env.d.ts`: `/// <reference types="ldrs" />`
* You must register the type of loader you are using in `App.tsx`. This can be added anywhere, but we are registering at
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
