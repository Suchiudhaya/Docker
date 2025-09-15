FROM node:18 AS build
WORKDIR /app

# copy package.json files
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# copy all frontend code
COPY frontend/. .
RUN npm run build

# nginx stage
FROM nginx:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
