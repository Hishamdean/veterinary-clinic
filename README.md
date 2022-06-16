This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with Typescript support.

## Getting Started

First, you will need to run this command to install all the dependencies:

```bash
npm install
```

Then to run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Setting up Postgresql

Go to the [Progresql website](https://www.postgresql.org/download/)

## Setting up prisma

You will need to install Prisma CLI:

```bash
npm install @prisma/cli --save-dev
```

The data model/schema has aleady been added so, to create a new SQL migration, run the following command:

```bash
npx prisma migrate dev --name "init" --preview-feature
```

## Description

Once all installations are complete and you are running the server.

There is a button on the top right of the screen that says `Add veterinary clinics`. This button will seed the database that you have set in the `.env` file.

Currently the `DATABASE_URL` in the `.env` file is just a sample which is:

```
DATABASE_URL="postgresql://user:password@localhost:5432/myDb?schema=public"
```

Just replace `user`, `password` and `myDB` with your local database config.

Once your database config is done, just simply click on the `Add veterinary clinics` to populate your database.
