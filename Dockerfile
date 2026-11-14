FROM node:26-alpine

WORKDIR /the/workdir/path

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3000

CMD [ "node" ,"server.js"]