/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP DATABASE IF EXISTS `mobilecrudetim`;
CREATE DATABASE IF NOT EXISTS `mobilecrudetim` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `mobilecrudetim`;

CREATE TABLE IF NOT EXISTS `tatuador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `telefone` int(11) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `especialidade` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

DELETE FROM `tatuador`;
/*!40000 ALTER TABLE `tatuador` DISABLE KEYS */;
INSERT INTO `tatuador` (`id`, `nome`, `telefone`, `endereco`, `especialidade`) VALUES
	(1, 'LuizaoDaMassa', 2147483647, 'RuaIguape', 'Mestre'),
	(2, 'Nome Completo', 2147483647, 'Abc', 'acid'),
	(3, 'Diego', 123, 'rUA bALNEARIO', 'hehe'),
	(4, 'Ramon', 12345, 'Rua Iguape', 'mAIA'),
	(5, 'fds', 0, 'fs', 'dsfa');
/*!40000 ALTER TABLE `tatuador` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `nivel` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `nivel`) VALUES
	(1, 'Luizinho', 'luizinho@gmail.com', 'luizinho123', 'admin'),
	(2, 'Diego', 'dieguinhoclaudio@gmail.com', 'dieguinho2017', 'adm');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
alunos