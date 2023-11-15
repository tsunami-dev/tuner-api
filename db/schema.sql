DROP DATABASE IF EXISTS colors_dev;
CREATE DATABASE colors_dev;

\c colors_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    run_time INTEGER,
    is_favorite BOOLEAN DEFAULT false
);