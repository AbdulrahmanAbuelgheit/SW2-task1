FROM node:14-alpine
WORKDIR /app
COPY task1.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD node task1.js