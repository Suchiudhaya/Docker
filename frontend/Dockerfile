# Stage 1: Build React app
FROM node:20 AS build

WORKDIR /app

# Copy package.json & package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set environment variables for React build
ARG REACT_APP_USERS_URL
ARG REACT_APP_STATUS_URL

ENV REACT_APP_USERS_URL=$REACT_APP_USERS_URL
ENV REACT_APP_STATUS_URL=$REACT_APP_STATUS_URL

# Build React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built React files
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx config if needed
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
