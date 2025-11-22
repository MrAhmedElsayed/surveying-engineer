# Surveying Engineer Platform

A comprehensive educational platform designed to teach surveyors and help them become true professionals in their field.

## About

Surveying Engineer Platform is a professional training platform that provides comprehensive education and resources for surveyors, helping them develop the skills and knowledge needed to excel in their profession.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Deployment to Cloudflare Pages

Follow the [official Nuxt Content documentation](https://content.nuxt.com/docs/deploy/cloudflare-pages) for Cloudflare Pages deployment.

### Quick Setup

1. **Build your app** using the Cloudflare Pages preset:
   ```bash
   npm run build
   ```
   Or use the preset directly:
   ```bash
   npx nuxi build --preset=cloudflare_pages
   ```

2. **Create D1 database** in Cloudflare Dashboard:
   - Go to **Workers & Pages** → **D1**
   - Click **Create database**
   - Name it (e.g., `surveying-engineer-content`)
   - Note the database ID

3. **Connect D1 to your Pages project**:
   - Go to your Cloudflare Pages project
   - Navigate to **Settings** → **Functions** → **D1 database bindings**
   - Click **Add binding**
   - **Binding name:** `DB` (must match the default)
   - **Database:** Select your D1 database
   - Save

4. **Deploy/Redeploy** your app

### GitHub Integration (Automatic)

1. **Connect your repository** to Cloudflare Pages
2. **Build settings:**
   - **Build command:** `npx nuxi build --preset=cloudflare_pages`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (leave empty)
   - **Node.js version:** `22` (or latest)

3. **D1 Database Binding:**
   - Make sure you've created and linked the D1 database as described above
   - The binding name must be `DB` (default)

The build will automatically:
- Use `better-sqlite3` during the build process to process content files
- Use D1 database at runtime on Cloudflare Pages
- Deploy automatically on every push to your main branch

### Manual Deployment (Wrangler)

If you want to deploy manually from your local machine:

```bash
# Build the project
npx nuxi build --preset=cloudflare_pages

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist
```

**Note:** Make sure you have the D1 database created and linked to your Pages project with the `DB` binding name before deploying.
