-- Tạo bảng posts
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tạo bảng comments
CREATE TABLE IF NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  post_id INT REFERENCES posts(id),
  text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Chèn dữ liệu mẫu
INSERT INTO posts (title, content) VALUES ('First Post', 'Hello World!');
INSERT INTO posts (title, content) VALUES ('Second Post', 'PostgreSQL with Adminer');
INSERT INTO comments (post_id, text) VALUES (1, 'Great post!');
