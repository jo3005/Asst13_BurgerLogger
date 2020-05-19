drop database if exists burgers_db;
create DATABASE burgers_db;
use burgers_db;

CREATE TABLE `burgers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `burger_name` varchar(255) DEFAULT NULL,
  `devoured` boolean default false,
  PRIMARY KEY (`id`)
) 