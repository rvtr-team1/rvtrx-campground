FROM nginx:stable-alpine
COPY nginx.conf /etc/nginx/conf.d/
COPY dist /usr/share/nginx/html
CMD [ "nginx", "-g", "daemon off;" ]
