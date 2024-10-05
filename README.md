## Live

[The live deployment for this project can be found here.](https://next-fetch-test-nine.vercel.app/)

## Features

This is a simple Next.js application for fetching a small amount of data. A client component `<UsersList>` is used to append paginated data to the initial data supplied on the server page component. Since this project has a very limited scope, I opted to just write the logic and the fetchers myself instead of relying on a larger library like SWR/React Query. If the project should scale to fetch much larger amounts of data, then these libraries should be integrated.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## View

![Screengrab](/public/view.png)
Users List
