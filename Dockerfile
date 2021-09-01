#Dockerfile for the demo-microservice app
FROM node:slim
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json .
RUN npm install
COPY ./ .
EXPOSE 80
CMD ["npm","run", "demo"]
