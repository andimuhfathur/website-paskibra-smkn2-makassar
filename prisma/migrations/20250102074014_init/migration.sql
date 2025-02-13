/*
  Warnings:

  - Added the required column `id_penulis` to the `berita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_upload` to the `gallery_paskibra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `berita` ADD COLUMN `id_penulis` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `gallery_paskibra` ADD COLUMN `id_upload` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `anggota` (
    `NRA` VARCHAR(191) NOT NULL,
    `username_anggota` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NULL,
    `tempat_lahir` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `no_hp` INTEGER NOT NULL,
    `nraAnggota` INTEGER NOT NULL,

    UNIQUE INDEX `anggota_NRA_key`(`NRA`),
    PRIMARY KEY (`NRA`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `anggota` ADD CONSTRAINT `anggota_nraAnggota_fkey` FOREIGN KEY (`nraAnggota`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `berita` ADD CONSTRAINT `berita_id_penulis_fkey` FOREIGN KEY (`id_penulis`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `gallery_paskibra` ADD CONSTRAINT `gallery_paskibra_id_upload_fkey` FOREIGN KEY (`id_upload`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
