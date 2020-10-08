FROM node:carbon-slim

# Create app directory
WORKDIR /logros_api

# Install app dependencies
COPY package.json /logros_api/
RUN npm install

# Bundle app source
COPY . /logros_api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
