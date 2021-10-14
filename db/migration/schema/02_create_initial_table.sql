CREATE TABLE kokutou.users
(
    id           INT AUTO_INCREMENT NOT NULL PRIMARY KEY UNIQUE,
    firebase_uid VARCHAR(255) NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    photo_url    VARCHAR(255) NOT NULL,
    created_at   TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

-- CREATE TABLE kokutou.photos
-- (
--     id         VARCHAR(255) NOT NULL PRIMARY KEY UNIQUE,
--     user_id    INT          NOT NULL,
--     FOREIGN KEY fk_photos_user_id (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
--     filename   VARCHAR(255) NOT NULL,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );
--
-- CREATE TABLE kokutou.comments
-- (
--     id         INT AUTO_INCREMENT NOT NULL PRIMARY KEY UNIQUE,
--     photo_id   VARCHAR(255) NOT NULL,
--     FOREIGN KEY fk_comments_photo_id (photo_id) REFERENCES photos (id) ON DELETE CASCADE ON UPDATE CASCADE,
--     user_id    INT          NOT NULL,
--     FOREIGN KEY fk_comments_user_id (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
--     content    TEXT,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );
--
-- CREATE TABLE kokutou.likes
-- (
--     id         INT AUTO_INCREMENT NOT NULL PRIMARY KEY UNIQUE,
--     photo_id   VARCHAR(255) NOT NULL,
--     FOREIGN KEY fk_likes_photo_id (photo_id) REFERENCES photos (id) ON DELETE CASCADE ON UPDATE CASCADE,
--     user_id    INT          NOT NULL,
--     FOREIGN KEY fk_likes_user_id (user_id) REFERENCES users (id) ON DELETE CASCADE ON UPDATE CASCADE,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );
--
