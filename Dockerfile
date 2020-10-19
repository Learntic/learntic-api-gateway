FROM node:carbon-slim

# Create app directory
WORKDIR /learntic_api
# Install app dependencies
COPY package.json /learntic_api/
RUN npm install

# Bundle app source
COPY . /learntic_api/
RUN npm run prepublish

CMD [ "npm", "run", "runServer" ]
