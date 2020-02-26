# base image
FROM node:12-slim

# set working directory
WORKDIR /app
COPY package.json .
RUN npm install

# start app
CMD ["npm", "start"]