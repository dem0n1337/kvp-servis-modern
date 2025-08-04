# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy built application from builder stage
COPY --from=builder /app/.output ./

# Install only production dependencies for the server
RUN npm pkg delete scripts.prepare && npm ci --only=production && npm cache clean --force

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nuxtjs
USER nuxtjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server/index.mjs"]