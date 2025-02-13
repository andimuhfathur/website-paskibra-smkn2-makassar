/*
  Warnings:

  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
DROP TABLE `image`;

-- CreateTable
CREATE TABLE `gallery_paskibra` (
    `id_image` INTEGER NOT NULL AUTO_INCREMENT,
    `judulImage` VARCHAR(191) NOT NULL,
    `urlImage` VARCHAR(191) NOT NULL,
    `tanggalUploadImage` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_username_key` ON `user`(`username`);
