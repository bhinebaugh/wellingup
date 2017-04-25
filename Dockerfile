# very small base image
FROM node:alpine

# make directory in container for our code
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy in the recipe for the Angular app
# and install dependencies
COPY package.json /usr/src/app/
RUN npm install
RUN npm install -g typescript

# make container dir available for mapping from host
VOLUME /usr/src/app

EXPOSE 3000

# CMD [main command for starting app]
CMD ["npm", "start"]
