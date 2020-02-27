FROM node:10

# Create app directory
WORKDIR /app

COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
EXPOSE 5555
CMD [ "npm", "start" ]