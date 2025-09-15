# Stage 1: Build React app
FROM node:18 AS build

WORKDIR /app

# Copy package files first for caching
COPY frontend/package*.json ./
RUN npm install

# Copy rest of frontend source
COPY frontend/ ./
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy custom nginx config (path relative to project root)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Copy build output from previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
