-- CreateTable
CREATE TABLE `Member` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `sex` INTEGER NOT NULL,
    `birth` DATETIME(3) NOT NULL,
    `avatar_url` MEDIUMTEXT NULL,
    `phone` VARCHAR(11) NULL,
    `relationship` VARCHAR(10) NULL,
    `emergency_name` VARCHAR(100) NULL,
    `emergency_phone` VARCHAR(11) NULL,
    `emergency_rela` VARCHAR(10) NULL,
    `is_delete` VARCHAR(2) NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `update_at` DATETIME(3) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Member` ADD CONSTRAINT `Member_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
