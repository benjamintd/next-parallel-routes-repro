# Bug description

There are several bugs associated with nesting parallel routes into a route group, from what I can understand.

- The project does not build on Vercel, despite building locally with `npm run build && npm run start`
- Navigation between some pages fails to render correctly

## Steps to reproduce

- `npx vercel build` fails with the following error:

```
Error: Unable to find lambda for route: /[lang]/default
```

- When running the built (or dev) version locally (`npm run build && npm run start`):
  - Heading to "http://localhost:3000/" works
  - Heading to "http://localhost:3000/about" works
  - Navigation between the home and "/sign-in" pages works, client-side navigation included
  - However, navigation between "/about" and "/" (via the "Close" button) keeps the modal open.

This has been tested on next@14.1.0 and next@canary (14.1.1-canary.9)
