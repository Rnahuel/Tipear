-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `apellido` VARCHAR(191) NOT NULL,
    `edad` INTEGER NOT NULL,
    `mail` VARCHAR(191) NOT NULL,
    `puntaje` INTEGER NOT NULL DEFAULT 0,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `usuario_mail_key`(`mail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
