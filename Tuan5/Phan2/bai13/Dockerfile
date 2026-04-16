# Stage 1: Build React App
FROM node:18 AS builder

WORKDIR /app

# Tạo React app đơn giản
RUN npx create-react-app . || true

COPY . .

RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
