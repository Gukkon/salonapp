BEGIN TRANSACTION;

BEGIN;  -- Start the transaction

CREATE TABLE "user" (
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(200) NOT NULL,
    username   VARCHAR(20) NOT NULL,
    email      VARCHAR(120) NOT NULL,
    password   VARCHAR(60) NOT NULL,
    date_added TIMESTAMP,  -- Use TIMESTAMP or TIMESTAMPTZ
    UNIQUE (username),
    UNIQUE (email)
);

CREATE TABLE booking (
    id        SERIAL PRIMARY KEY,
    day       VARCHAR(50) NOT NULL,
    timeFrame VARCHAR(50) NOT NULL,
    time      VARCHAR(5) NOT NULL,
    massage   VARCHAR(50),
    facials   VARCHAR(50),
    handFoot  VARCHAR(50),
    waxing    VARCHAR(50),
    user_id   INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES "user"(id)
);

COMMIT; -- Commit the transaction


COMMIT;
