# 第一阶段 - 构建Node.js应用程序
FROM node AS build-stage
# 在容器中创建一个目录
RUN mkdir -p /usr/src/front/


# 第二阶段 - 使用NGINX托管静态文件
FROM nginx
# 移除默认的NGINX配置
RUN rm /etc/nginx/conf.d/default.conf

# 复制NGINX配置文件到容器中
ADD default.conf /etc/nginx/conf.d/


# 暴露NGINX的80端口
EXPOSE 80
