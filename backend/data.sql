--Vanja jag har som sagt gjort vad jag tror är korrekt sätt att lägga till dataabsen i Render. Men OM de inte fungerar så hoppas jag att de fungerar att jag gör såhär? Då kan du kanske bara kopiera in detta i konsollen bara. Hoppas hoppas.! Skriv annars så får jag försöka lista ut vad jag ska göra.


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

INSERT INTO public.users (user_id, surname, email, password, created, number, lastname) VALUES (40, 'Sara', 'sara.lindholm@iths.se', '123456', '2024-05-28 10:39:30.679945', NULL, 'Lindholm');
INSERT INTO public.users (user_id, surname, email, password, created, number, lastname) VALUES (41, 'Siri', 'siri@gmail.com', 'Redskins44', '2024-05-30 09:37:40.968036', NULL, 'Hagström');
INSERT INTO public.users (user_id, surname, email, password, created, number, lastname) VALUES (42, 'Maria', 'maria@gmail.com', '123456', '2024-05-31 09:17:05.486782', NULL, 'Danstål');




                    --Clothes

CREATE TABLE public.clothes(
clothes_id SERIAL PRIMARY KEY,
name TEXT NOT NULL,
description TEXT NOT NULL,
brand TEXT,
size TEXT NOT NULL,
color TEXT NOT NULL,
condition_comment TEXT,
category_id INTEGER,
uploaded TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
image_url text,
FOREIGN KEY (category_id) REFERENCES public.categories (category_id)
);

INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (47, 'Snygg baddräkt', 'Jättefin! Smickrande.', 'WaterDropz', 'L', 'Mönstrad', '', 8, '2024-05-21 14:41:16.968123', 'f000ab58052fd03a8f0ff4bf11487b4e');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (5, 'Cool T-shirt', 'En snygg och bekväm t-shirt, mitt favoritplagg!', 'StreetStyle', 'M', 'Svart/vit
', NULL, 9, '2024-05-07 14:46:23.870438', 'id_5.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (8, 'Träningsshorts', 'Short som verkligen andas, har varit perfekt att ha för löpturen på sommaren.', 'ActiveWear', 'L', 'Grön', 'Lite slitna insida lår.', 7, '2024-05-07 14:46:23.870438', 'id_8.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (3, 'Klassiska jeans', 'Snygga, bekväma och smickrande jeans.', 'Levi', 'S', 'Blå', NULL, 6, '2024-05-07 14:39:19.160679', 'id_3.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (48, 'Krispigt vit tisha!', 'Snygg änna för bövelen', 'Shoulderzz', 'L', 'Vit', '', 9, '2024-05-21 14:44:50.023469', 'b188e49b5746b9c5706cd827d473c21e');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (93, 'Mönstrad baddräkt', 'Fin och bekväm, blir inte genomskinlig.', 'Zummer', 'L', 'Svart vas', '', 8, '2024-05-31 08:32:24.66059', '534d3c984e777b443f054f4b3003ba3f');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (2, 'Gosig tröja', 'En mysig tröja för kalla dagar.', 'Tröjbutiken', 'L', 'Blå', 'Inga synliga skador', 1, '2024-05-07 14:39:19.160679', 'id_2.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (7, 'Svinsnygg klänning', 'En elegant klänning för speciella tillfällen', 'Glamour', 'L', 'Ljusblå', NULL, 3, '2024-05-07 14:46:23.870438', 'id_7.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (9, 'Randig tröja', 'En mysig tröja med randigt mönster, smickarande form. ', 'FashionCo', 'S', 'Vit/Blå/Svart/Brun', NULL, 1, '2024-05-07 14:46:23.870438', 'id_9.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (10, 'Klassiska byxor', 'Bekväma byxor till vardags eller jobb.
', 'EverydayWear', 'M', 'Grön', NULL, 2, '2024-05-07 14:46:23.870438', 'id_10.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (11, 'Långärmad topp', 'En mjuk och skön långärmad topp.', 'CasualWear', 'M', 'Grön
', NULL, 4, '2024-05-07 14:46:23.870438', 'id_11.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (12, 'Regnjacka', 'En klassisk regnjacka, bekväm och snygg!', 'RainGear', 'L', 'Gul', NULL, 5, '2024-05-07 14:46:23.870438', 'id_12.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (13, 'Sport-bh', 'En stödjande sport-bh. Inget att anmärka på.', 'ActiveWear', 'S', 'Aprikos', NULL, 7, '2024-05-07 14:46:23.870438', 'id_13.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (1, 'Svart klänning', 'En klänning som verkligen passar till alla tillfällen.', 'Lindex', 'M', 'Svart', NULL, 3, '2024-05-07 14:38:43.561206', 'id_1.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (50, 'Jacka', 'Jackan andas och är lagom tjock. ', 'Omärkt', 'L', 'Gul', '', 5, '2024-05-22 10:41:34.508713', 'dcf676535120de672a38c034a051b4dd');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (4, 'Snygg bikini', 'Galet fin bikini!!', 'zummertime', 'L', 'Rosa', 'Fläck vid spännet på ryggen. ', 8, '2024-05-07 14:43:41.017745', 'id_4.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (6, 'Jeansjacka', 'Jeansjacka som går att matcha med precis allt.', 'DenimCo', 'S', 'Blå', 'Lite sliten i armarna', 5, '2024-05-07 14:46:23.870438', 'id_6.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (14, 'T-shirt', 'En bekväm T-shirt i bomull', 'Nike', 'Large', 'Blue', 'Inga synliga skador', 9, '2024-05-15 21:32:31.976166', 'id_14.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (15, 'Snyggaste byxorna i stan', 'Så otroligt bra passform och lätta att matcha till exakt allt.', 'Ah''Clothes', 'Large', 'Blue', 'Skavda vid vänster häl', 2, '2024-05-15 21:39:47.185746', 'id_15.png');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (90, 'Fräcka byxor', 'Snygga byxor som sticker ut!', 'Oh''Wow', 'L', 'Orange', '', 2, '2024-05-30 10:20:00.6637', 'fbb735e8a1102806dc1d536a62456c5c');
INSERT INTO public.clothes (clothes_id, name, description, brand, size, color, condition_comment, category_id, uploaded, image_url) VALUES (91, 'Brun kofta', 'Snygg myskofta som passat till både dressade tillfällen och för en mysig dag hemma.', '', 'M', 'Begie', '', 1, '2024-05-30 10:35:43.259716', '9c1a726f5131acd86bf8db2627635477');

                    --Tabell för klädkategorier

CREATE TABLE categories (
category_id SERIAL PRIMARY KEY,
name TEXT UNIQUE NOT NULL
);


INSERT INTO public.categories (category_id, name) VALUES (1, 'Tr”jor');
INSERT INTO public.categories (category_id, name) VALUES (2, 'Byxor');
INSERT INTO public.categories (category_id, name) VALUES (3, 'Kl„nningar');
INSERT INTO public.categories (category_id, name) VALUES (4, 'Linnen');
INSERT INTO public.categories (category_id, name) VALUES (5, 'Ytterkl„der');
INSERT INTO public.categories (category_id, name) VALUES (6, 'Jeans');
INSERT INTO public.categories (category_id, name) VALUES (8, 'Badkl„der');
INSERT INTO public.categories (category_id, name) VALUES (9, 'T-shirts');
INSERT INTO public.categories (category_id, name) VALUES (10, 'Övrigt');
INSERT INTO public.categories (category_id, name) VALUES (7, 'Träningskläder');





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
