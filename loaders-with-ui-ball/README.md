# Loaders with UI Ball LDRS

## Next.js with Next UI

* Install: `npm install ldrs`
* Register quantum when the layout mounts only once in `src/layouts/Default.tsx`

```javascript
import { Link } from "@nextui-org/link";
import React, { useEffect } from "react";
import { Toaster } from "sonner";
import { quantum } from "ldrs";

import { HeartFilledIcon } from "@/components/Icons.tsx";
import { Navbar } from "@/components/Navbar.tsx";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Register quantum when the layout mounts
  useEffect(() => {
    quantum.register(); // Register quantum only once
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <Toaster expand={true} position="top-center" />
      <main className="container mx-auto px-6 flex-grow ">{children}</main>
    </div>
  );
}
```

* `src/components/Loader.tsx`

```javascript
import "ldrs/quantum";
import { useAppSelector } from "@/store/hooks.ts";

const Loader = () => {
  const theme = useAppSelector((state) => state.base.theme);
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
