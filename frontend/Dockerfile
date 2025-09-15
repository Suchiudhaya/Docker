FROM node:18 AS build
WORKDIR /app

# Copy package.json files (they exist directly inside frontend/)
COPY package.json package-lock.json ./
RUN npm install

# Copy all other frontend files (src/, public/, etc.)
COPY . .
RUN npm run build

# Production nginx stage
FROM nginx:stable-alpine
COPY ../nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
