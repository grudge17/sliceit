FROM node:14

ENV NODE_ENV=production

WORKDIR /slice


COPY ["package.json", "package*.json", "./"]
RUN npm install --production

COPY . .

CMD ["npm", "start"]