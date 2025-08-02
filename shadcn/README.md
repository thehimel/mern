# Shadcn

## Scrollbar Flickering Fix

### Problem
shadcn/ui Select components (built on Radix UI) add `data-scroll-locked` attribute to the body element when opened, but sometimes fail to remove the scroll lock when closed, causing scrollbar flickering and layout shifts.

### Solution
Add this CSS rule to your `globals.css`:

```css
@layer base {
  /* Fix scrollbar flickering when shadcn Select components close */
  body[data-scroll-locked][data-scroll-locked] {
    overflow: auto !important;
  }
}
```

### How it works
- The double `[data-scroll-locked][data-scroll-locked]` selector increases specificity
- `!important` ensures it overrides any inline styles or other CSS rules
- Forces body overflow to remain `auto` even when scroll lock is active
- Prevents layout shifts that cause the flickering effect

### Result
✅ No more scrollbar flickering when using Select filters  
✅ Smooth UI transitions  
✅ Consistent layout behavior
