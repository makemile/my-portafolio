FROM nginxinc/nginx-unprivileged:1.27-alpine

# Path: /usr/share/nginx/html
COPY /dist /usr/share/nginx/html