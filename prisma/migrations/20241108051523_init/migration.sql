-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `unionid` VARCHAR(100) NOT NULL,
    `openid` VARCHAR(100) NOT NULL,
    `openid_coll` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(11) NOT NULL,
    `nickname` VARCHAR(45) NOT NULL,
    `avatar_url` MEDIUMTEXT NOT NULL,
    `type` VARCHAR(20) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Order` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `payer_id` VARCHAR(50) NOT NULL,
    `order_number` VARCHAR(191) NOT NULL,
    `status` VARCHAR(3) NOT NULL,
    `amount` DOUBLE NOT NULL,
    `order_mode` VARCHAR(3) NOT NULL,
    `order_type` VARCHAR(3) NOT NULL,
    `description` VARCHAR(100) NOT NULL,
    `currentcy` VARCHAR(10) NOT NULL,
    `transaction_id` VARCHAR(50) NOT NULL,
    `trade_status` VARCHAR(20) NOT NULL,
    `success_at` DATETIME(3) NOT NULL,
    `cancel_at` VARCHAR(50) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Order_order_number_key`(`order_number`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AIService` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `start_date` DATETIME(3) NOT NULL,
    `end_data` DATETIME(3) NOT NULL,

    UNIQUE INDEX `AIService_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DocService` (
    `id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `total_num` INTEGER NOT NULL,
    `curr_num` INTEGER NOT NULL,
    `use_num` INTEGER NOT NULL,
    `create_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `DocService_user_id_key`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AIService` ADD CONSTRAINT `AIService_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DocService` ADD CONSTRAINT `DocService_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
