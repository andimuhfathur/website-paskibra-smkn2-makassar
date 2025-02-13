/*
  Warnings:

  - You are about to drop the column `nraAnggota` on the `anggota` table. All the data in the column will be lost.
  - You are about to drop the column `id_penulis` on the `berita` table. All the data in the column will be lost.
  - You are about to drop the `gallery_paskibra` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `anggota` DROP FOREIGN KEY `anggota_nraAnggota_fkey`;

-- DropForeignKey
ALTER TABLE `berita` DROP FOREIGN KEY `berita_id_penulis_fkey`;

-- DropForeignKey
ALTER TABLE `gallery_paskibra` DROP FOREIGN KEY `gallery_paskibra_id_upload_fkey`;

-- DropIndex
DROP INDEX `anggota_nraAnggota_fkey` ON `anggota`;

-- DropIndex
DROP INDEX `berita_id_penulis_fkey` ON `berita`;

-- AlterTable
ALTER TABLE `anggota` DROP COLUMN `nraAnggota`;

-- AlterTable
ALTER TABLE `berita` DROP COLUMN `id_penulis`;

-- DropTable
DROP TABLE `gallery_paskibra`;

-- CreateTable
CREATE TABLE `image` (
    `id_image` INTEGER NOT NULL AUTO_INCREMENT,
    `judulImage` VARCHAR(191) NOT NULL,
    `urlImage` VARCHAR(191) NOT NULL,
    `tanggalUploadImage` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_image`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
