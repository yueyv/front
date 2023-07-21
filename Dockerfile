# /usr/src/nodejs/hello-docker/Dockerfile
FROM node

# 在容器中创建一个目录
RUN mkdir -p /usr/src/front/

# 定位到容器的工作目录
WORKDIR /usr/src/front/

# RUN/COPY 是分层的，package.json 提前，只要没修改，就不会重新安装包
COPY package.json /usr/src/front/package.json
COPY yarn.lock /usr/src/front/yarn.lock
COPY dist /usr/src/front/dist
COPY server /usr/src/front/server
RUN cd /usr/src/front/
RUN yarn install
RUN yarn add pm2





EXPOSE 3000
CMD pm2 start npm run server:prod