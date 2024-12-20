/*
  Warnings:

  - You are about to drop the column `userId` on the `berita` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `image` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `berita` DROP FOREIGN KEY `berita_userId_fkey`;

-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `image_userId_fkey`;

-- AlterTable
ALTER TABLE `berita` DROP COLUMN `userId`;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `userId`;
