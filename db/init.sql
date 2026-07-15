CREATE TABLE IF NOT EXISTS app_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  message VARCHAR(255) NOT NULL
);

INSERT INTO app_messages (message)
VALUES ('Hello from MySQL running in Docker Compose');
