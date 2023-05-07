FROM node:18.14.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

EXPOSE 5001

CMD ["npm", "start"]