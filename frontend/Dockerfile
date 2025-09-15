FROM node:18 AS build
WORKDIR /app

# copy package.json files from frontend folder
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# copy frontend source
COPY frontend/. .
RUN npm run build

# nginx stage
FROM nginx:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf   # ✅ works now
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
