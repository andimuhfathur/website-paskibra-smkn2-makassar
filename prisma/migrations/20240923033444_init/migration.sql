/*
  Warnings:

  - You are about to drop the column `tanggal_update` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `tanggal_update`,
    MODIFY `image` VARCHAR(191) NULL;
