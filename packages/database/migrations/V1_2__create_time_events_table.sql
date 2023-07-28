CREATE TABLE time_events (
	`_id` INT NOT NULL AUTO_INCREMENT,
	`_user_id` INT NOT NULL,
	`_day` TINYINT UNSIGNED NOT NULL,
	`_month` TINYINT UNSIGNED NOT NULL,
	`_year` TINYINT UNSIGNED NOT NULL,
	`_hour` TINYINT UNSIGNED NOT NULL,
	`_minute` TINYINT UNSIGNED NOT NULL,
	`_type` ENUM('arrive', 'break', 'return', 'exit') NOT NULL,
	`_deletable` TINYINT UNSIGNED NOT NULL,
	`_updatable` TINYINT UNSIGNED NOT NULL,
	`_tracked_at` TIMESTAMP NOT NULL,
	`_created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`_updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	PRIMARY KEY (`_id`),
	INDEX `time_events_idx_tracked_at` (`_tracked_at`),
	INDEX `time_events_idx_crc_type` (`_type`),
	CONSTRAINT `time_events_fk_user` FOREIGN KEY (`_user_id`) REFERENCES `users`(`_id`) ON DELETE CASCADE ON UPDATE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;