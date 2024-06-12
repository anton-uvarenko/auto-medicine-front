FROM node:17-alpine as builder
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 80
CMD npm run dev
