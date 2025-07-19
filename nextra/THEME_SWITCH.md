# Moving Theme Switch to Navbar in Nextra

By default, Nextra displays the theme switch in the sidebar. This guide shows how to move it to the navbar instead.

## Configuration

Add the following configuration to your `theme.config.tsx`:

```javascript
import {DocsThemeConfig, ThemeSwitch, useConfig} from "nextra-theme-docs";

const config: DocsThemeConfig = {
  themeSwitch: {
    component: null  // Hide the theme switch from sidebar
  },
  navbar: {
      extraContent: () => {
          return <ThemeSwitch />;  // Add theme switch on the navbar
      },
  },
}
```

## How it works

1. **`themeSwitch.component: null`** - This hides the default theme switch from the sidebar
2. **`navbar.extraContent`** - This adds custom content to the navbar, in this case the `<ThemeSwitch />` component

## Result

The theme switch will now appear in the navbar instead of the sidebar, providing a cleaner sidebar experience while
keeping the theme toggle easily accessible.
