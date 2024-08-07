FROM node:14
WORKDIR /app
COPY . .
RUN apt-get update
RUN ls -a
RUN npm install
ENTRYPOINT npm run start:dev