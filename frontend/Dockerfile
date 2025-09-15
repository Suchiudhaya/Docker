# Stage 1: Build React app
FROM node:18 AS build
WORKDIR /app

# Copy package files from frontend folder
COPY frontend/package*.json ./
RUN npm install

# Copy source code
COPY frontend/ ./
RUN npm run build

# Stage 2: Nginx server
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Copy nginx config from root/nginx folder
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
