FROM node:carbon-slim

# Create app directory
WORKDIR /auth_api

# Install app dependencies
COPY package.json /auth_api/
RUN npm install

# Bundle app source
COPY . /auth_api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
