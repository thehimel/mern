# Redux Toolkit with Persist

* Configure store. Suppose you are configured the base app. Then you need:
  * store.ts
  * hooks.ts
  * constant.ts
  * base/baseActions.ts
  * base/Slice.ts
* Then configure your provider.tsx
* Make sure the provider is properly used in main.tsx
* You may encounter errors related to types of "redux-persist/lib/storage". Configure "src/redux-persist.d.ts" to resolve that.

```typescript
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

## Resources

* https://redux-toolkit.js.org/tutorials/quick-start
* https://www.dhiwise.com/post/how-to-use-redux-persist-in-react-applications
