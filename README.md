# EasySocial

EasySocial is a production-ready SaaS social media scheduler built with **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Prisma + MySQL**, and **Stripe**.

## Features

- User auth: register, login, forgot password (+ Google optional via NextAuth)
- OAuth social connections: Facebook Pages, Instagram Business, LinkedIn, X
- Post composer with media, multi-platform selection, instant publishing, scheduling
- Cron-style scheduler and publish retry logging
- SaaS dashboard with analytics, calendar, post status pages
- Billing/subscriptions with Stripe Checkout + webhook endpoint
- Admin panel with users/plans/moderation/platform stats

## Tech stack

- Next.js 14 App Router
- React + TypeScript
- Tailwind CSS + reusable UI components
- Prisma ORM + MySQL
- Stripe Billing
- Node-based API routes

## Project structure

```txt
app/
  (marketing)/
  auth/
  dashboard/
  admin/
  api/
components/
lib/
prisma/
scripts/
```

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure environment:

```bash
cp .env.example .env
```

3. Update `.env` values for:
- MySQL (`DATABASE_URL`)
- OAuth provider keys (Google, Meta, LinkedIn, X)
- Stripe keys + plan price IDs
- App URL settings

4. Generate Prisma client + migrate:

```bash
npm run prisma:generate
npm run prisma:migrate
npm run db:seed
```

5. Start development:

```bash
npm run dev
```

## OAuth notes

- `/api/social/connect` starts connection flow.
- `/api/social/callback` receives OAuth callback and stores account token (replace placeholder with encrypted token handling and refresh logic for production).

## Stripe setup

- Create recurring prices in Stripe for Starter/Pro/Agency.
- Put corresponding price IDs in `.env`.
- Use `/api/billing/checkout` for subscription checkout session.
- Configure webhook endpoint `/api/billing/webhook` and set `STRIPE_WEBHOOK_SECRET`.

## Scheduler / cron jobs

You can run scheduled publishing in two ways:

- Trigger route (`POST /api/cron/publish`) from hosted cron (Vercel cron or external scheduler)
- Run local worker command:

```bash
npm run cron
```

## Deployment

### Vercel
- Connect GitHub repo in Vercel.
- Set all environment variables.
- Provision MySQL (PlanetScale/RDS/etc) and run migrations.
- Configure Vercel Cron to call `/api/cron/publish`.

### Node hosting / VPS
- Build: `npm run build`
- Start: `npm run start`
- Run cron via system cron or PM2 to invoke `npm run cron` periodically.

## Production hardening checklist

- Add NextAuth session strategy + CSRF protection
- Encrypt tokens at rest (e.g., libsodium/KMS)
- Implement provider-specific refresh token workflows
- Add rate limits and audit logging
- Add integration tests for OAuth + post publishing
