-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: xpay
-- ------------------------------------------------------
-- Server version	5.6.28

CREATE DATABASE `planets`;
USE `planets`;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Volcado de tabla orbits
# ------------------------------------------------------------

DROP TABLE IF EXISTS `orbits`;

CREATE TABLE `orbits` (
  `id_day` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `x` double NOT NULL,
  `y` double NOT NULL,
  `id_planet` int(11) unsigned NOT NULL,
  `id_weather` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id_day`, `id_planet`),
  KEY `fk_planet` (`id_planet`),
  KEY `fk_weather` (`id_weather`),
  CONSTRAINT `fk_planet` FOREIGN KEY (`id_planet`) REFERENCES `planets` (`id`),
  CONSTRAINT `fk_weather` FOREIGN KEY (`id_weather`) REFERENCES `weather` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;



# Volcado de tabla planets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `planets`;

CREATE TABLE `planets` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

LOCK TABLES `planets` WRITE;
/*!40000 ALTER TABLE `planets` DISABLE KEYS */;

INSERT INTO `planets` (`id`, `name`)
VALUES
	(1,'Ferengi');

INSERT INTO `planets` (`id`, `name`)
VALUES
	(2,'Vulcano');

INSERT INTO `planets` (`id`, `name`)
VALUES
	(3,'Betasoide');

/*!40000 ALTER TABLE `planets` ENABLE KEYS */;
UNLOCK TABLES;


# Volcado de tabla weather
# ------------------------------------------------------------

DROP TABLE IF EXISTS `weather`;

CREATE TABLE `weather` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

LOCK TABLES `weather` WRITE;
/*!40000 ALTER TABLE `weather` DISABLE KEYS */;

INSERT INTO `weather` (`id`, `name`)
VALUES
	(1,'drought');

INSERT INTO `weather` (`id`, `name`)
VALUES
	(2,'rain');

INSERT INTO `weather` (`id`, `name`)
VALUES
	(3,'unknown');

INSERT INTO `weather` (`id`, `name`)
VALUES
	(4,'optimum');

/*!40000 ALTER TABLE `weather` ENABLE KEYS */;
UNLOCK TABLES;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
