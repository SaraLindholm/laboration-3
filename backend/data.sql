CREATE TABLE clothes(clothes_id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
description TEXT NOT NULL,
brand TEXT,
size TEXT NOT NULL,
color TEXT NOT NULL,
condition_comment TEXT,
category_id INTEGER,
uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (category_id) REFERENCES categories (category_id)
);

CREATE TABLE categories (
category_id SERIAL PRIMARY KEY,
name TEXT UNIQUE NOT NULL
);

-- Lägg till några exempelkategorier

INSERT INTO categories (name) VALUES
    ('Tröjor'),
    ('Byxor'),
    ('Klänningar'),
    ('Linnen'),
    ('Ytterkläder'),
    ('Jeans'),
    ('Träningskläder'),
    ('Badkläder'),
    ('T-shirts');


INSERT INTO clothes (name, description, brand, size, color, condition_comment, category_id)
VALUES
('Snygg bikini', 'Galet fin bikini!!', 'zummertime', 'L', 'Rosa', 'Liten fläck vid spännet i ryggen', (SELECT category_id FROM categories WHERE name = 'Badkläder'));

CREATE TABLE users(
user_id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL,
created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CHECK (LENGTH(password) >=6),
CHECK (LENGTH(name) >=2 )
);


    ('Alma', 'almaa@gmail.com', 'password1'),
    ('Berit', 'beritb@gmail.com', 'password2'),
    ('Calle', 'calle@gmail.com', 'password3'),
    ('Dugge', 'dugge@gmail.com', 'password4');

CREATE TABLE loan(
loan_id SERIAL PRIMARY KEY,
clothes_id INTEGER NOT NULL,
user_id INTEGER NOT NULL,
loan_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
return_date DATE NOT NULL DEFAULT CURRENT_DATE + INTERVAL '7 days',
FOREIGN KEY (clothes_id) REFERENCES clothes(clothes_id),
FOREIGN KEY (user_id) REFERENCES users (user_id)
);
