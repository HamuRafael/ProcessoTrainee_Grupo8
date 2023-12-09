/*
  Warnings:

  - The primary key for the `Usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cargo` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `genero` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Usuario` table. All the data in the column will be lost.
  - Added the required column `id` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "emailAutor" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Post_emailAutor_fkey" FOREIGN KEY ("emailAutor") REFERENCES "Usuario" ("email") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "postId" INTEGER NOT NULL,
    "DataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "texto" TEXT NOT NULL,
    CONSTRAINT "Comentario_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "usuario" TEXT NOT NULL
);
INSERT INTO "new_Usuario" ("email", "senha") SELECT "email", "senha" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Post_emailAutor_key" ON "Post"("emailAutor");
