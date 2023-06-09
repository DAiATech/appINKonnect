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

-- Copiando estrutura para tabela appinkonnect.profileimg
CREATE TABLE IF NOT EXISTS `profileimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.profileimg: ~4 rows (aproximadamente)
DELETE FROM `profileimg`;
/*!40000 ALTER TABLE `profileimg` DISABLE KEYS */;
INSERT INTO `profileimg` (`id`, `imgName`, `imgRandomName`) VALUES
	(1, 'd8096542-7b26-4c4a-b500-f122593d235d.jpeg', '705637-d8096542-7b26-4c4a-b500-f122593d235d.jpeg'),
	(2, 'aaa', 'aa'),
	(3, '311ed0d3-a80d-49f4-ae3e-2e6d16ab9b42.jpeg', '802148-311ed0d3-a80d-49f4-ae3e-2e6d16ab9b42.jpeg'),
	(4, 'bf57a565-a37e-4239-814f-bca482b0c2dc.jpeg', '770219-bf57a565-a37e-4239-814f-bca482b0c2dc.jpeg');
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.tatuador: ~3 rows (aproximadamente)
DELETE FROM `tatuador`;
/*!40000 ALTER TABLE `tatuador` DISABLE KEYS */;
INSERT INTO `tatuador` (`id`, `nome`, `senha`, `email`, `cpf`, `especialidade`, `profileImgId`) VALUES
	(15, 'testeastIdIMAGEM', 'AA', 'AA', 'AA', 'AA', 1),
	(16, 'testeidimg2', 'AA', 'AaA', 'AA', 'AA', 3),
	(17, 'testeidimg3', 'AA', 'AaA', 'AA', 'AA', 4);
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
) ENGINE=InnoDB AUTO_INCREMENT=93 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.usuarios: ~6 rows (aproximadamente)
DELETE FROM `usuarios`;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `nivel`, `imagemProfile`) VALUES
	(7, 'adm1', 'adm1@', '123', NULL, '0'),
	(88, 'teste222', 'dssdad', '1', NULL, '89e84d68-0d34-4005-a4c1-c5b6e35816e6.jpeg'),
	(89, 'teste222', 'dssdad', '1', NULL, '89e84d68-0d34-4005-a4c1-c5b6e35816e6.jpeg'),
	(90, 'teste222', 'dssdad', '1', NULL, '89e84d68-0d34-4005-a4c1-c5b6e35816e6.jpeg'),
	(91, 'teste01', 'teste02', '123', NULL, '33bcfebb-8d16-474e-b107-5fe03f991c41.jpeg'),
	(92, 'testetattoo', 'tatu', '7', NULL, '9d57686b-3f33-46a1-b476-943a42746089.jpeg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;

SELECT * FROM tatuador inner join profileimg on  profileImgId = profileimg.id;

CREATE TABLE IF NOT EXISTS `PostagensImg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE postagensTatuadores (
	id INT(11) PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(200) NOT NULL,
	estilo VARCHAR(200) NOT NULL,
	imgPostId INT(11) NOT null,
	CONSTRAINT FK_imgPostId FOREIGN KEY (imgPostId) REFERENCES PostagensImg(id)
);

ALTER TABLE postagenstatuadores ADD
	CONSTRAINT FK_tatuadorId
	FOREIGN KEY(tatuadorId) REFERENCES tatuador (id);