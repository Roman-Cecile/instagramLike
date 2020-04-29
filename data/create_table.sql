DROP TABLE IF EXISTS "app_user", "image", "comment";

CREATE TABLE "app_user" (

    "id" SERIAL PRIMARY KEY,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP
);

CREATE TABLE "image" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "like" INT NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "app_user_id" INT NOT NULL REFERENCES "app_user"("id")

);

CREATE TABLE "comment" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP,
    "image_id" INT NOT NULL REFERENCES "image"("id")
);