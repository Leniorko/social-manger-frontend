# Social Manager Frontend

**IMPORTANT NOTE:** Currently under heavy development and completely unfinished.

There is [backend part](https://github.com/Leniorko/social-manager-backend)

### Tech stack

Every technology was chosen just because author wanted to. Without particular clear reason for it.

- React
- Recoil
- TS
- MUI
- Formik
- Vite
- pnpm

### Decisions made so far

- Perform styling via `sx` prop.
  - Probably later do theming via mui themes. To provide way for custom themes.
- Pages are **not** components. Technically they are, but for organization purpose they are not.
  - Pages must be built with React components. Author goal is to completely avoid plain html tags and heavely rely on mui in terms of spacing and styling.
  - Although in components it's okay. But prefer mui `Box` and `Container` over plain `div`
