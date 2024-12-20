/*
  Warnings:

  - Added the required column `userId` to the `berita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `berita` ADD COLUMN `userId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `image` ADD COLUMN `userId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `berita` ADD CONSTRAINT `berita_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `image` ADD CONSTRAINT `image_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
