# Phan 3 - Docker Compose

Thư mục này chứa lời giải cho các bài 1, 2, 4, 5, 7, 8, 10 của phần 3.

## Danh sách bài

- `bai1`: WordPress + MySQL
- `bai2`: Node.js + MongoDB
- `bai4`: Prometheus + Grafana + cAdvisor
- `bai5`: Multi-tier Voting App
- `bai7`: Elasticsearch + Kibana
- `bai8`: Django + Celery + Redis
- `bai10`: Traefik reverse proxy cho Flask + WordPress

## Cách chạy

Di chuyển vào từng thư mục bài và chạy:

```bash
docker compose up -d --build
```

Kiểm tra cấu hình trước khi chạy:

```bash
docker compose config
```

Xem log:

```bash
docker compose logs -f
```

Dọn toàn bộ container, network và volume của bài:

```bash
docker compose down -v
```

## Ghi chú nhanh

- `bai4` dùng `cAdvisor` để Prometheus thu thập metrics container.
- `bai5` dùng các image mẫu từ Docker Docs cho voting app.
- `bai7` cấu hình credentials ngay trong `docker-compose.yml` để dễ demo.
- `bai10` dùng host rule của Traefik:
  - `http://flask.localhost`
  - `http://blog.localhost`
