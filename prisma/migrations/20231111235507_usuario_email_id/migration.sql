/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Usuario` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "senha" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "cargo" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("cargo", "email", "genero", "nome", "senha") SELECT "cargo", "email", "genero", "nome", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
