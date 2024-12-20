/*
  Warnings:

  - A unique constraint covering the columns `[id_berita]` on the table `berita` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `berita_id_berita_key` ON `berita`(`id_berita`);
