-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           10.1.38-MariaDB - mariadb.org binary distribution
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

-- Copiando estrutura para tabela appinkonnect.estudio
CREATE TABLE IF NOT EXISTS `estudio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) DEFAULT NULL,
  `EnderecoNome` varchar(300) DEFAULT NULL,
  `EnderecoValor` point DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.estudio: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `estudio` DISABLE KEYS */;
INSERT INTO `estudio` (`id`, `nome`, `EnderecoNome`, `EnderecoValor`) VALUES
	(14, 'Estudio - Rock\'nRoll', 'Av. Dep. Ulisses GuimarÃ£es, 501 - Jardim das Palmeiras, Registro - SP, 11900-000, Brasil', _binary 0x00000000010100000073b515fbcbeb47c0991a57128f8438c0),
	(15, 'ArtStudio', 'Av. Clara Gianotti de Souza, 1500 - Vila Nova Ribeira, Registro - SP, 11900-000, Brasil', _binary 0x000000000101000000e2f3797bc6ed47c0a3956a55018138c0);
/*!40000 ALTER TABLE `estudio` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.postagensimg
CREATE TABLE IF NOT EXISTS `postagensimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.postagensimg: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `postagensimg` DISABLE KEYS */;
INSERT INTO `postagensimg` (`id`, `imgName`, `imgRandomName`) VALUES
	(41, '163da261-f899-4344-93bf-2e3ce3af8422.jpeg', '745441-163da261-f899-4344-93bf-2e3ce3af8422.jpeg'),
	(42, '99560e47-0799-40b3-8124-d9fd75961e92.jpeg', '828646-99560e47-0799-40b3-8124-d9fd75961e92.jpeg'),
	(43, '67a299fc-36dd-45bf-b72d-4872b18895b7.jpeg', '446636-67a299fc-36dd-45bf-b72d-4872b18895b7.jpeg'),
	(44, 'c08f9cbb-1d22-4fa2-846f-c142c2745d3d.jpeg', '706738-c08f9cbb-1d22-4fa2-846f-c142c2745d3d.jpeg'),
	(45, '03cb72da-611e-46ba-84c1-afb90530363f.jpeg', '589494-03cb72da-611e-46ba-84c1-afb90530363f.jpeg'),
	(46, '288cc7b4-c36c-4d3d-9aee-e86ac68548f1.jpeg', '281267-288cc7b4-c36c-4d3d-9aee-e86ac68548f1.jpeg'),
	(47, '317b6f80-e8e3-4455-b3e7-776362b6c461.jpeg', '945827-317b6f80-e8e3-4455-b3e7-776362b6c461.jpeg'),
	(48, 'afa17f06-5981-403b-a371-4cad5943ff8d.jpeg', '969318-afa17f06-5981-403b-a371-4cad5943ff8d.jpeg');
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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.postagenstatuadores: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `postagenstatuadores` DISABLE KEYS */;
INSERT INTO `postagenstatuadores` (`id`, `descricao`, `estilo`, `imgPostId`, `tatuadorId`) VALUES
	(42, 'Nova tatuagem!!', 'REALISTA', 41, 44),
	(43, 'soldier Tattoo', 'REALISTA', 42, 44),
	(44, 'the fall of icarusðŸ¤˜ðŸ¤˜', 'REALISTA', 43, 44),
	(45, 'tribalzinha de qualidade\nðŸ”¥ðŸ”¥', 'MAORI', 44, 45),
	(46, 'processo completo galeraaa!!!!', 'MAORI', 45, 45),
	(47, 'curtiram??', 'MAORI', 46, 45),
	(48, 'essa ficou maneira', 'OLD SCHOOL', 47, 46),
	(49, 'braÃ§o fechado!', 'OLD SCHOOL', 48, 46);
/*!40000 ALTER TABLE `postagenstatuadores` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.profileimg
CREATE TABLE IF NOT EXISTS `profileimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.profileimg: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `profileimg` DISABLE KEYS */;
INSERT INTO `profileimg` (`id`, `imgName`, `imgRandomName`) VALUES
	(27, '83a45a56-3dff-4bc0-82f6-518490978f5e.jpeg', '436553-83a45a56-3dff-4bc0-82f6-518490978f5e.jpeg'),
	(28, '9d05fb21-408f-40ce-bc3d-1346f10db164.jpeg', '781104-9d05fb21-408f-40ce-bc3d-1346f10db164.jpeg'),
	(29, 'f8c47b89-54e0-49cd-8f26-9f50bf9e072d.jpeg', '286013-f8c47b89-54e0-49cd-8f26-9f50bf9e072d.jpeg');
/*!40000 ALTER TABLE `profileimg` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.sessao
CREATE TABLE IF NOT EXISTS `sessao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `dataSessao` date DEFAULT NULL,
  `horario` time DEFAULT NULL,
  `valor` decimal(5,2) DEFAULT NULL,
  `anotacoes` varchar(250) DEFAULT NULL,
  `tatuador` int(11) DEFAULT NULL,
  `cliente` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.sessao: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `sessao` DISABLE KEYS */;
INSERT INTO `sessao` (`id`, `dataSessao`, `horario`, `valor`, `anotacoes`, `tatuador`, `cliente`) VALUES
	(29, '2023-09-30', '12:30:00', 200.00, 'Estilo tribal - antebraÃ§o', 45, 'usuario_1'),
	(30, '2023-10-04', '18:10:00', 500.00, 'Fechamento de Costas', 45, 'usuario_2'),
	(31, '2023-10-10', '23:04:00', 50.00, 'panturrilha', 44, 'usuario_1');
/*!40000 ALTER TABLE `sessao` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.tatuador
CREATE TABLE IF NOT EXISTS `tatuador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `senha` varchar(256) DEFAULT NULL,
  `email` varchar(256) NOT NULL DEFAULT '',
  `cpf` varchar(256) NOT NULL,
  `especialidade` varchar(50) NOT NULL,
  `dataNascimento` date DEFAULT NULL,
  `profileImgId` int(11) DEFAULT NULL,
  `estudio` int(11) DEFAULT NULL,
  `postagem` bit(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_profileImgId` (`profileImgId`),
  KEY `estudio` (`estudio`),
  CONSTRAINT `FK_estudio` FOREIGN KEY (`estudio`) REFERENCES `estudio` (`id`),
  CONSTRAINT `FK_profileImgId` FOREIGN KEY (`profileImgId`) REFERENCES `profileimg` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.tatuador: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `tatuador` DISABLE KEYS */;
INSERT INTO `tatuador` (`id`, `nome`, `senha`, `email`, `cpf`, `especialidade`, `dataNascimento`, `profileImgId`, `estudio`, `postagem`) VALUES
	(44, 'tatuador_1', 'senha1', 'tatuador1@gmail.com', '506201998-22', 'Realismo', '1989-06-06', 27, 15, b'1'),
	(45, 'tatuador_2', 'senha2', 'tatuador2@gmail.com', '503122563-33', 'Tribal', '2005-10-06', 28, NULL, b'1'),
	(46, 'tatuador_3', 'senha3', 'tatuador3@gmail.com', '233245679-77', 'Alternativo', '1977-11-18', 29, 14, b'1');
/*!40000 ALTER TABLE `tatuador` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `email` varchar(60) NOT NULL,
  `senha` varchar(20) NOT NULL,
  `dataNascimento` date DEFAULT NULL,
  `nivel` int(11) DEFAULT NULL,
  `imagemProfile` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.usuarios: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `dataNascimento`, `nivel`, `imagemProfile`) VALUES
	(100, 'usuario_1', 'usuario1@gmail.com', 'senha1', '1997-04-07', NULL, '16421d2b-a164-440b-a13b-aaff521be600.jpeg'),
	(101, 'usuario_2', 'usuario2@gmail.com', 'senha2', '1992-01-01', NULL, 'e69ff2c6-2f76-4600-b22c-f9af73cd7645.jpeg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
