FROM node:10-alpine

RUN npm install -g yarn@1.12

ENV NODE_ENV=production
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install --prod

# Bundle app source
COPY src ./src

EXPOSE 3000
CMD [ "yarn", "start" ]
