# Build stage
FROM node:22-bullseye-slim AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN rm -rf node_modules package-lock.json && npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:22-bullseye-slim AS runner

WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/.output ./

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs

# Change ownership of the app directory to the nuxtjs user
RUN chown -R nuxtjs:nodejs /app

USER nuxtjs

EXPOSE 3000

CMD ["node", "server/index.mjs"]
