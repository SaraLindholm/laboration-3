
--Users

CREATE TABLE public.users(
user_id SERIAL PRIMARY KEY,
surname TEXT NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT NOT NULL,
created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
number INTEGER
lastname TEXT NOT NULL,
CHECK (LENGTH(password) >=6),
CHECK (LENGTH(surname) >=2 )
);

INSERT INTO public.users (user_id, surname, email, password, created, number, lastname) VALUES (10, 'Andreas', 'andreas@hotmail.com', 'testtest', '2024-05-21 21:33:38.920085', NULL, NULL);
INSERT INTO public.users (user_id, surname, email, password, created, number, lastname) VALUES (40, 'Sara', 'sara.lindholm@iths.se', '123456', '2024-05-28 10:39:30.679945', NULL, 'Lindholm');
INSERT INTO public.users (user_id, surname, email, password, created, number, lastname) VALUES (41, 'Siri', 'siri@gmail.com', 'Redskins44', '2024-05-30 09:37:40.968036', NULL, 'Hagström');
INSERT INTO public.users (user_id, surname, email, password, created, number, lastname) VALUES (42, 'Maria', 'maria@gmail.com', '123456', '2024-05-31 09:17:05.486782', NULL, 'Danstål');

CREATE TABLE clothes(clothes_id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
description TEXT NOT NULL,
brand TEXT,
size TEXT NOT NULL,
color TEXT NOT NULL,
condition_comment TEXT,
category_id INTEGER,
uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (category_id) REFERENCES public.categories (category_id)
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



--blev aldrig att jag kom så långt att jag kunde använda denna tabell

CREATE TABLE loan(
loan_id SERIAL PRIMARY KEY,
clothes_id INTEGER NOT NULL,
user_id INTEGER NOT NULL,
loan_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
return_date DATE NOT NULL DEFAULT CURRENT_DATE + INTERVAL '7 days',
FOREIGN KEY (clothes_id) REFERENCES clothes(clothes_id),
FOREIGN KEY (user_id) REFERENCES users (user_id)
);
