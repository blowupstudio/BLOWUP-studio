# BLOWUP studio

A Create React App rebuild of `blowupstudio.dk` with downloaded public assets,
optimized video, valid booking/social links, Spotify embed, YouTube artist
playlist, prices, reviews, and responsive layout.

## Run locally

```bash
npm install --prefix frontend
npm start --prefix frontend
```

## Validate

```bash
npm run build --prefix frontend
```

## Deploy on Vercel

The deployable app lives in `frontend/`. The root `vercel.json` tells Vercel to
install and build that app, publish `frontend/build`, and route SPA paths back to
`index.html`.

If you configure the project manually in Vercel, use:

```text
Install Command: npm install --prefix frontend
Build Command: npm run build --prefix frontend
Output Directory: frontend/build
```
