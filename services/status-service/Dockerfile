FROM node:18
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install --production
COPY . .
EXPOSE 5002
CMD ["node", "index.js"]
