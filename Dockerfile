FROM dockerhub.qingcloud.com/pressone/node:11

ADD . /app

WORKDIR /app

RUN npm config set registry https://registry.npm.taobao.org
RUN npm install