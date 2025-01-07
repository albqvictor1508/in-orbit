FROM node:20

WORKDIR /server
COPY . .

RUN rm -rf node_modules
RUN npm install
RUN npm run build

CMD ["npm", "start"]