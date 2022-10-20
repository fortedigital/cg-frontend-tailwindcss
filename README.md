# CG Frontend - Intro til Tailwind CSS

![Skjermbilde av ferdig app](/docs/screenshot.png)

## Setup

1. Last ned repoet og gå inn i prosjektmappen
   ```
   git clone https://github.com/fortedigital/cg-frontend-tailwindcss.git
   cd cg-frontend-tailwindcss
   ```
2. Installer dependencies

   ```
   npm install
   ```

3. Bytt til start-branch

   ```
   git checkout start
   ```

4. Start dev server
   ```
   npm run start
   ```

## Installer Tailwind

1. Gå til https://tailwindcss.com/docs/guides/create-react-app

2. Gjør steg 2-4

3. Legg til følgende under theme i tailwind.config.js

   ```
   colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "retro-white": "#FFF8EA",
      "retro-coral": "#9E7676",
      "retro-brown": {
        DEFAULT: "#594545",
        light: "#815B5B",
        dark: "#3e3030",
      },
    },
   ```

### Valgfritt (men anbefalt)

Installer følgende extensions i VS Code:

- Tailwind CSS IntelliSense
- Prettier - Code formatter

Installer Prettier plugin for Tailwind CSS

```
npm install -D prettier-plugin-tailwindcss
```
