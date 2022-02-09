# 构建阶段，固定版本
FROM node:16 as build-stage
WORKDIR /app
COPY . .

RUN npm install && \
    npm run build

# 生产阶段
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]