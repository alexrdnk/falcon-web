# Use Node.js 18 Alpine image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "run", "preview"]
