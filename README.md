# Unzoomed

Unzoomed is a game about guessing cities on a satellite map.

## Technologies

This app is written in Next.js (App router), using Tailwind for styling. It is hosted on Vercel.
The list of cities is stored in Vercel KV (Redis).
The game data is stored in Firebase with anonymous sessions.

## Installation

```
$ npm install
$ npm run dev
```

## Updating the data

The data comes from a Wikidata query, along with the list of cities contained in the [Global Cities](https://en.wikipedia.org/wiki/Globalization_and_World_Cities_Research_Network) article.

To fetch new source data, run

```
$ bun run src/data/fetchDataSources.ts
```

In order to turn this data into a finalized list of cities, run

```
$ bun run src/data/preprocess.ts
```

All those files are under version control to make sure they are deployed along with the code.
