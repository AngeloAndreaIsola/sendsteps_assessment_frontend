FROM node:16
WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm i
EXPOSE 3000
CMD ["npm", "start"]