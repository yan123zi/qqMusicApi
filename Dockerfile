FROM node:10.17.0-buster-slim

WORKDIR /app
COPY . /app

RUN npm config set registry "https://registry.npm.taobao.org/" \
    && npm install

EXPOSE 3000
CMD ["node", "./bin/www"]