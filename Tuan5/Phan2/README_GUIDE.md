# Hướng dẫn Docker Compose - Bài 9 đến Bài 15

## Bài 9: Flask với Docker Compose

**Mục đích:** Chạy ứng dụng Flask trong container

**Cấu trúc:**
```
bai9/
├── app/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
└── docker-compose.yml
```

**Chạy:**
```bash
cd bai9
docker-compose up -d
curl http://localhost:5000
curl http://localhost:5000/api/status
```

---

## Bài 10: MySQL với Docker Volumes

**Mục đích:** Chạy MySQL và lưu trữ dữ liệu bằng Docker Volumes

**Cấu trúc:**
```
bai10/
├── docker-compose.yml
├── init.sql
└── mysql_data/  (được tạo tự động)
```

**Chạy:**
```bash
cd bai10
docker-compose up -d
docker exec -it mysql_with_volume mysql -u appuser -p appdb
```

**Kiểm tra dữ liệu:**
```sql
SHOW TABLES;
SELECT * FROM users;
SELECT * FROM products;
```

---

## Bài 11: PostgreSQL với Adminer

**Mục đích:** Chạy PostgreSQL và quản lý database qua Adminer Web UI

**Cấu trúc:**
```
bai11/
├── docker-compose.yml
├── init.sql
└── postgres_data/  (được tạo tự động)
```

**Chạy:**
```bash
cd bai11
docker-compose up -d
```

**Truy cập:**
- Adminer: http://localhost:8083
  - Server: postgres
  - Username: user
  - Password: password
  - Database: mydb

---

## Bài 12: Prometheus, Grafana và Node Exporter

**Mục đích:** Giám sát hệ thống bằng Prometheus + Grafana + Node Exporter

**Cấu trúc:**
```
bai12/
├── docker-compose.yml
├── prometheus.yml
├── prometheus_data/  (được tạo tự động)
└── grafana_data/     (được tạo tự động)
```

**Chạy:**
```bash
cd bai12
docker-compose up -d
```

**Truy cập:**
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3000 (admin/admin)
- Node Exporter: http://localhost:9100/metrics

**Cấu hình Grafana:**
1. Đăng nhập: admin / admin
2. Add Data Source: http://prometheus:9090
3. Import Dashboard từ Grafana Library

---

## Bài 13: React với Nginx

**Mục đích:** Build React App và serve qua Nginx

**Cấu trúc:**
```
bai13/
├── Dockerfile
├── nginx.conf
└── docker-compose.yml
```

**Chạy:**
```bash
cd bai13
docker-compose up -d
# Build sẽ mất 2-5 phút
```

**Truy cập:**
- http://localhost:8080

---

## Bài 14: Mạng riêng giữa Containers

**Mục đích:** Hai container giao tiếp với nhau trong mạng riêng

**Cấu trúc:**
```
bai14/
├── app1/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
├── app2/
│   ├── app.py
│   ├── requirements.txt
│   └── Dockerfile
└── docker-compose.yml
```

**Chạy:**
```bash
cd bai14
docker-compose up -d
```

**Test:**
```bash
# App1
curl http://localhost:5001
curl http://localhost:5001/api/data

# App2
curl http://localhost:5002
curl http://localhost:5002/api/call-app1  # Gọi app1 từ app2
```

---

## Bài 15: Giới hạn tài nguyên cho Redis

**Mục đích:** Giới hạn CPU (0.5 core) và RAM (256MB) cho Redis

**Cấu trúc:**
```
bai15/
├── docker-compose.yml
└── redis_data/  (được tạo tự động)
```

**Chạy:**
```bash
cd bai15
docker-compose up -d
```

**Test:**
```bash
# Kết nối Redis
docker exec -it redis_limited redis-cli
> PING
PONG
> SET key1 "Hello"
> GET key1
```

**Kiểm tra giới hạn tài nguyên:**
```bash
docker stats redis_limited
```

---

## Các lệnh hữu ích

### Xem logs
```bash
docker-compose logs app
docker-compose logs -f app  # Follow logs
```

### Xem container đang chạy
```bash
docker ps
docker-compose ps
```

### Dừng container
```bash
docker-compose down
docker-compose down -v  # Với volumes
```

### Xóa tất cả container/image
```bash
docker container prune
docker image prune
```

### Inspect container
```bash
docker inspect container_name
docker stats  # Xem resource usage
```

---

## Ghi chú quan trọng

1. **Port conflicts:** Nếu port đã được sử dụng, thay đổi port trong docker-compose.yml
2. **Volumes:** Dữ liệu được lưu ở `docker volume ls`
3. **Networks:** Docker Compose tự tạo mạng bridge cho các service
4. **Environment variables:** Có thể override bằng `.env` file hoặc `docker-compose.override.yml`
