-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.4.25-MariaDB - mariadb.org binary distribution
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para appinkonnect
CREATE DATABASE IF NOT EXISTS `appinkonnect` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `appinkonnect`;

-- Copiando estrutura para tabela appinkonnect.postagensimg
CREATE TABLE IF NOT EXISTS `postagensimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.postagensimg: ~11 rows (aproximadamente)
DELETE FROM `postagensimg`;
/*!40000 ALTER TABLE `postagensimg` DISABLE KEYS */;
INSERT INTO `postagensimg` (`id`, `imgName`, `imgRandomName`) VALUES
	(18, 'b4259724-1d91-4dc2-a949-99e6d33735d3.jpeg', '91509-b4259724-1d91-4dc2-a949-99e6d33735d3.jpeg'),
	(19, 'b6878df2-1708-41e0-a583-46738895aadb.jpeg', '400634-b6878df2-1708-41e0-a583-46738895aadb.jpeg'),
	(20, '875db912-9fa1-49d4-9436-3e25f89cd32a.jpeg', '463500-875db912-9fa1-49d4-9436-3e25f89cd32a.jpeg'),
	(21, '4e967b2f-910e-42cb-93e5-fae9df788707.jpeg', '40007-4e967b2f-910e-42cb-93e5-fae9df788707.jpeg'),
	(22, '8725e5d5-4950-4318-8d31-e243df96bb1a.jpeg', '56570-8725e5d5-4950-4318-8d31-e243df96bb1a.jpeg'),
	(23, 'e631ccdc-7cae-430d-85d6-d30352dfd53d.jpeg', '769755-e631ccdc-7cae-430d-85d6-d30352dfd53d.jpeg'),
	(24, '57d269c0-a150-481c-9d70-0b931694eac5.jpeg', '927166-57d269c0-a150-481c-9d70-0b931694eac5.jpeg'),
	(25, '140f5db7-de82-4cc6-910b-65014b4fa5e1.jpeg', '722830-140f5db7-de82-4cc6-910b-65014b4fa5e1.jpeg');
/*!40000 ALTER TABLE `postagensimg` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.postagenstatuadores
CREATE TABLE IF NOT EXISTS `postagenstatuadores` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(200) NOT NULL,
  `estilo` varchar(200) NOT NULL,
  `imgPostId` int(11) NOT NULL,
  `tatuadorId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_imgPostId` (`imgPostId`),
  KEY `FK_tatuadorId` (`tatuadorId`),
  CONSTRAINT `FK_imgPostId` FOREIGN KEY (`imgPostId`) REFERENCES `postagensimg` (`id`),
  CONSTRAINT `FK_tatuadorId` FOREIGN KEY (`tatuadorId`) REFERENCES `tatuador` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.postagenstatuadores: ~2 rows (aproximadamente)
DELETE FROM `postagenstatuadores`;
/*!40000 ALTER TABLE `postagenstatuadores` DISABLE KEYS */;
INSERT INTO `postagenstatuadores` (`id`, `descricao`, `estilo`, `imgPostId`, `tatuadorId`) VALUES
	(21, 'Nova Tatuagem Pessoal, curtiram?', 'MAORI', 18, 23),
	(22, 'Saiu do Forno agora!!!', 'MAORI', 19, 23),
	(23, 'Mais um cliente satisfeito!', 'MAORI', 20, 23),
	(24, 'Finalizamos mais uma :)', 'OLD SCHOOL', 21, 24),
	(25, '😎😎', 'OLD SCHOOL', 22, 24),
	(26, 'Espartano!', 'REALISTA', 23, 25),
	(27, 'The fall of Icarus🎇', 'REALISTA', 24, 25),
	(28, 'FECHAMENTO DE COSTAS', 'REALISTA', 25, 25);
/*!40000 ALTER TABLE `postagenstatuadores` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.profileimg
CREATE TABLE IF NOT EXISTS `profileimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.profileimg: ~6 rows (aproximadamente)
DELETE FROM `profileimg`;
/*!40000 ALTER TABLE `profileimg` DISABLE KEYS */;
INSERT INTO `profileimg` (`id`, `imgName`, `imgRandomName`) VALUES
	(10, '6aad4943-2d4c-462b-9d81-4645557c5583.jpeg', '408724-6aad4943-2d4c-462b-9d81-4645557c5583.jpeg'),
	(11, '890ab0ed-b79f-4f6d-a21b-44c12f752e15.jpeg', '661860-890ab0ed-b79f-4f6d-a21b-44c12f752e15.jpeg'),
	(12, '2d8be740-934f-49a3-a6ba-d13c811f6583.jpeg', '125724-2d8be740-934f-49a3-a6ba-d13c811f6583.jpeg');
/*!40000 ALTER TABLE `profileimg` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.tatuador
CREATE TABLE IF NOT EXISTS `tatuador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `senha` varchar(256) DEFAULT NULL,
  `email` varchar(256) NOT NULL DEFAULT '',
  `cpf` varchar(256) NOT NULL,
  `especialidade` varchar(50) NOT NULL,
  `profileImgId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_profileImgId` (`profileImgId`),
  CONSTRAINT `FK_profileImgId` FOREIGN KEY (`profileImgId`) REFERENCES `profileimg` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.tatuador: ~5 rows (aproximadamente)
DELETE FROM `tatuador`;
/*!40000 ALTER TABLE `tatuador` DISABLE KEYS */;
INSERT INTO `tatuador` (`id`, `nome`, `senha`, `email`, `cpf`, `especialidade`, `profileImgId`) VALUES
	(23, 'Usuario_1', '123', 'usuario_1@gmail.com', '111.111.111-11', 'Maori', 10),
	(24, 'Usuario_2', 'abc', 'usuario_2@gmail.com', '222.222.222-22', 'Old School', 11),
	(25, 'Usuario_3', '321', 'usuario_3@gmail.com', '333.333.333-33', 'Realismo', 12);
/*!40000 ALTER TABLE `tatuador` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `nivel` int(11) DEFAULT NULL,
  `imagemProfile` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.usuarios: ~6 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
