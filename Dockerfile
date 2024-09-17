FROM node:18-alpine AS base

# Install dependencies only when needed
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Only copy necessary files
COPY --from=base /app/node_modules /app/node_modules
COPY . .

RUN mkdir .next
RUN chown nextjs:nodejs .next

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Start command that builds the app and then starts the server
CMD ["/bin/sh", "-c", "yarn build && node server.js"]