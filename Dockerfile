FROM nginx
# 移除默认的NGINX配置
RUN rm /etc/nginx/conf.d/default.conf

# 复制NGINX配置文件到容器中
ADD default.conf /etc/nginx/conf.d/
COPY dist/ /usr/share/nginx/html/

# 暴露NGINX的80端口
EXPOSE 80
