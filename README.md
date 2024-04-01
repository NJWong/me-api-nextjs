# ME-API NextJS

Mass Effect API written in NextJS using the App Router model.

# Pre-requisites
This project uses NodeJS 21.6.2 as specified in the `.tool-versions` file.

## Using asdf
If you have [`asdf`](https://asdf-vm.com/) installed, run this command to installed the target NodeJS version:

```bash
asdf install
```

## Other version managers (e.g. NVM)
Install NodeJS 21.6.2 using your preferred version manager before continuing.

# Setup
Install dependencies:

```bash
npm install
```

Run the application on `localhost:3000`:

```bash
npm run dev
```

# Features
This is a direct port of the original [`me-api`](https://github.com/NJWong/me-api) written in Go and deployed to **Fly.io**.

The database was originally hosted using **Planetscale**. However, due to the company [retiring their Hobby tier](https://planetscale.com/blog/planetscale-forever) I've decided to make the following changes:

* Host the database for *free* using [Turso](https://turso.tech/) (sqlite)
* Host the Docs website for *free* on Vercel (static Next website)
* Host the API for *free* on Vercel (functions)

## Characters
| Endpoint | Description | Access | Status
| --- | --- | --- | ---
| `GET /api/characters` | Get all characters (paginated) | 🔓 Public | ✅ 
| `GET /api/characters/:id` | Get character by ID | 🔓 Public | ✅
| `POST /api/characters` | Create a new character | 🔐 Private | ❌
| `PUT /api/characters/:id` | Update an entire character | 🔐 Private | ❌
| `PATCH /api/characters/:id` | Update part of a character | 🔐 Private | ❌ 
| `DELETE /api/characters/:id` | Delete a character | 🔐 Private | ❌

## Genders
| Endpoint | Description | Access | Status
| --- | --- | --- | ---
| `GET /api/genders` | Get all genders (paginated) | 🔓 Public | ✅
| `GET /api/genders/:id` | Get gender by ID | 🔓 Public | ✅
| `POST /api/genders` | Create a new gender | 🔐 Private | ❌
| `PUT /api/genders/:id` | Update an entire gender | 🔐 Private | ❌
| `PATCH /api/genders/:id` | Update part of a gender | 🔐 Private | ❌ 
| `DELETE /api/genders/:id` | Delete a gender | 🔐 Private | ❌

## Species
| Endpoint | Description | Access | Status
| --- | --- | --- | ---
| `GET /api/species` | Get all species (paginated) | 🔓 Public | ✅
| `GET /api/species/:id` | Get species by ID | 🔓 Public | ✅
| `POST /api/species` | Create a new species | 🔐 Private | ❌
| `PUT /api/species/:id` | Update an entire species | 🔐 Private | ❌
| `PATCH /api/species/:id` | Update part of a species | 🔐 Private | ❌ 
| `DELETE /api/species/:id` | Delete a species | 🔐 Private | ❌