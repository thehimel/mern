# PWA

## References

* [NextJS to Mobile and Desktop App (PWA) - Eddie Jaoude](https://youtu.be/dZXOlmNsd7o?si=hKIJALiIh5_dHY9g)
* [next-pwa](https://www.npmjs.com/package/next-pwa)

## Steps

### Install Dependencies

* Install: `npm i next-pwa`
* Configure [next.config.mjs](next.config.mjs)
  * Once you run the app, it will generate `public/sw.js` and `public/workbox-*.js` files.
* Get your icon in size `1080x1080` in SVG format.
* Using that icon, generate the PWA icons with [PWA Builder](https://www.pwabuilder.com/imageGenerator)
* Move theme in the directory [icons](public/icons)
* Create [manifest.json](public/manifest.json)
  * Set theme_color to `#18181b` (`dark zinc`)
  * Set background_color to `#09090b` (`darker zinc`)
* Set the `manifest.json` in `src/theme.config.tsx`

```typescript
import {DocsThemeConfig} from "nextra-theme-docs";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      additionalLinkTags: [
        {
          rel: 'manifest',
          href: '/manifest.json',
        }
      ],
    }
  },
}

export default config
```
