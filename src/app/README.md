# Drive

## Setup

```bash
$ npm install
```

```bash
$ cp .env.sample .env
```

## Run

```bash
$ npm run dev
```

## Start

```bash
$ npm run build
$ npm run start
```

## Lint

```bash
$ npm run lint
```

## Backend

- `.env`の`DATABASE_URL`に自分の環境の適したものを設定してください。

```bash
$ npx prisma migrate dev
```

- DBの管理画面起動

```bash
$ npx prisma studio
```
