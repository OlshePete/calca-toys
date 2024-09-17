# Base stage
FROM node:18-alpine AS base

# Install dependencies
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Install dependencies
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copy application files
COPY . .

# Set up build stage
FROM base AS builder

# Create and set correct permissions for the .next directory
RUN mkdir -p .next && chown -R node:node /app

# Set working directory
WORKDIR /app

# Build the application
RUN yarn build

# Production stage
FROM node:18-alpine AS runner

# Set environment
ENV NODE_ENV=production
ENV PORT=3000

# Set working directory
WORKDIR /app

# Create and set up user/group
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 --ingroup nodejs nextjs

# Copy necessary files from the build stage
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public

# Set permissions
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]