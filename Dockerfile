FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
run yarn install 

COPY . .
EXPOSE 3000
CMD yarn run dev