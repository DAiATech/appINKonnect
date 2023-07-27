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
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.estudio: ~12 rows (aproximadamente)
/*!40000 ALTER TABLE `estudio` DISABLE KEYS */;
INSERT INTO `estudio` (`id`, `nome`, `EnderecoNome`, `EnderecoValor`) VALUES
	(1, 'aa', 'aaa', _binary 0x000000000101000000ffae74e382ba38c0436e2b627d0d48c0),
	(2, 'aaaaa', 'R. Iguape, 343 - Vila Vitoria, Cajati - SP, 11950-000, Brasil', NULL),
	(3, 'aaaaaaaaaaa', '1 World Way, Los Angeles, CA 90045, EUA', NULL),
	(4, 'laranjatestre', 'R. Iguape, 343 - Vila Vitoria, Cajati - SP, 11950-000, Brasil', NULL),
	(5, 'aa', 'aaa', _binary 0x000000000101000000ffae74e382ba38c0436e2b627d0d48c0),
	(6, 'teste2', 'R. Iguape, 343 - Vila Vitoria, Cajati - SP, 11950-000, Brasil', _binary 0x000000000101000000ffae74e382ba38c0436e2b627d0d48c0),
	(7, 'teste2', 'Aquisgrana, Alemanha', _binary 0x000000000101000000e6cc76853e634940af43da6be6551840),
	(8, 'teste2', 'P.Âº de los Cedros 391, Lomas de Valle Verde, 22810 Ensenada, B.C., MÃ©xico', _binary 0x00000000010100000031524a630fe23f405adf1b9e39265dc0),
	(9, 'Estudiolegal', 'R. Iguape, 343 - Vila Vitoria, Cajati - SP, 11950-000, Brasil', _binary 0x000000000101000000436e2b627d0d48c0ffae74e382ba38c0),
	(10, 'TesteNovoEstudio', 'R. Genova, 1 - Parque dos Bancarios, SÃ£o Paulo - SP, 03923-037, Brasil', _binary 0x0000000001010000006b5a73918c4147c09c2f9ba5099837c0),
	(11, 'Testadoeestudio', '1535 Broadway, New York, NY 10036, EUA', _binary 0x0000000001010000001daf9bad177f52c03519445a19614440),
	(12, 'DiegoTattoo\'s', 'Avenida Prefeito Jonas Banks Leite 57 PrÃ©dio KKKK - Centro, Registro - SP, 11900-000, Brasil', _binary 0x000000000101000000dcb639df99eb47c08bc6dadfd97c38c0);
/*!40000 ALTER TABLE `estudio` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.postagensimg
CREATE TABLE IF NOT EXISTS `postagensimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.postagensimg: ~16 rows (aproximadamente)
/*!40000 ALTER TABLE `postagensimg` DISABLE KEYS */;
INSERT INTO `postagensimg` (`id`, `imgName`, `imgRandomName`) VALUES
	(18, 'b4259724-1d91-4dc2-a949-99e6d33735d3.jpeg', '91509-b4259724-1d91-4dc2-a949-99e6d33735d3.jpeg'),
	(19, 'b6878df2-1708-41e0-a583-46738895aadb.jpeg', '400634-b6878df2-1708-41e0-a583-46738895aadb.jpeg'),
	(20, '875db912-9fa1-49d4-9436-3e25f89cd32a.jpeg', '463500-875db912-9fa1-49d4-9436-3e25f89cd32a.jpeg'),
	(21, '4e967b2f-910e-42cb-93e5-fae9df788707.jpeg', '40007-4e967b2f-910e-42cb-93e5-fae9df788707.jpeg'),
	(22, '8725e5d5-4950-4318-8d31-e243df96bb1a.jpeg', '56570-8725e5d5-4950-4318-8d31-e243df96bb1a.jpeg'),
	(23, 'e631ccdc-7cae-430d-85d6-d30352dfd53d.jpeg', '769755-e631ccdc-7cae-430d-85d6-d30352dfd53d.jpeg'),
	(24, '57d269c0-a150-481c-9d70-0b931694eac5.jpeg', '927166-57d269c0-a150-481c-9d70-0b931694eac5.jpeg'),
	(25, '140f5db7-de82-4cc6-910b-65014b4fa5e1.jpeg', '722830-140f5db7-de82-4cc6-910b-65014b4fa5e1.jpeg'),
	(26, '0fdff5d2-cd45-4b25-a436-a49fb0a42779.jpeg', '739210-0fdff5d2-cd45-4b25-a436-a49fb0a42779.jpeg'),
	(28, 'd89f6b1c-c1cc-443d-a2b0-09a79bcbe2bb.jpeg', '148088-d89f6b1c-c1cc-443d-a2b0-09a79bcbe2bb.jpeg'),
	(30, 'ccebc36b-3d1c-43ba-a2b4-b8ba1d8b488d.jpeg', '950665-ccebc36b-3d1c-43ba-a2b4-b8ba1d8b488d.jpeg'),
	(31, 'ae195a18-567c-4cc6-93fe-ac19bedcc6c0.jpeg', '71871-ae195a18-567c-4cc6-93fe-ac19bedcc6c0.jpeg'),
	(32, '2e35aaef-3a9d-4068-b4e9-6fed18e40936.jpeg', '33465-2e35aaef-3a9d-4068-b4e9-6fed18e40936.jpeg'),
	(33, 'cee73ad5-4105-4293-b98e-703a5c48aea4.jpeg', '625551-cee73ad5-4105-4293-b98e-703a5c48aea4.jpeg'),
	(34, 'b45e1f85-73b9-4a6a-8b42-e3be6cd4bba8.jpeg', '154874-b45e1f85-73b9-4a6a-8b42-e3be6cd4bba8.jpeg'),
	(35, '9c91bddc-8383-465b-aaa6-99cbe92162bd.jpeg', '404912-9c91bddc-8383-465b-aaa6-99cbe92162bd.jpeg'),
	(36, 'bc3671bd-8120-4c2b-9994-06a313a95ee9.jpeg', '96489-bc3671bd-8120-4c2b-9994-06a313a95ee9.jpeg');
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.postagenstatuadores: ~11 rows (aproximadamente)
/*!40000 ALTER TABLE `postagenstatuadores` DISABLE KEYS */;
INSERT INTO `postagenstatuadores` (`id`, `descricao`, `estilo`, `imgPostId`, `tatuadorId`) VALUES
	(21, 'Nova Tatuagem Pessoal, curtiram?', 'MAORI', 18, 23),
	(22, 'Saiu do Forno agora!!!', 'MAORI', 19, 23),
	(23, 'Mais um cliente satisfeito!', 'MAORI', 20, 23),
	(24, 'Finalizamos mais uma :)', 'OLD SCHOOL', 21, 24),
	(25, '😎😎', 'OLD SCHOOL', 22, 24),
	(26, 'Espartano!', 'REALISTA', 23, 25),
	(27, 'The fall of Icarus🎇', 'REALISTA', 24, 25),
	(28, 'FECHAMENTO DE COSTAS', 'REALISTA', 25, 25),
	(29, 'a\naa', 'PRETO E BRANCO', 26, 23),
	(31, 'ola', 'MINIMALISTA', 30, 24),
	(32, 'posteste1reload', '', 31, 24),
	(35, 'outroteste', 'TINTA VERMELHA', 34, 30),
	(36, 'letsbora', '', 35, 30),
	(37, 'cachorrinhoPensante\n#TCC\n#@w', 'REALISTA', 36, 37);
/*!40000 ALTER TABLE `postagenstatuadores` ENABLE KEYS */;

-- Copiando estrutura para tabela appinkonnect.profileimg
CREATE TABLE IF NOT EXISTS `profileimg` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `imgName` varchar(200) DEFAULT NULL,
  `imgRandomName` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.profileimg: ~9 rows (aproximadamente)
/*!40000 ALTER TABLE `profileimg` DISABLE KEYS */;
INSERT INTO `profileimg` (`id`, `imgName`, `imgRandomName`) VALUES
	(10, '6aad4943-2d4c-462b-9d81-4645557c5583.jpeg', '408724-6aad4943-2d4c-462b-9d81-4645557c5583.jpeg'),
	(11, '890ab0ed-b79f-4f6d-a21b-44c12f752e15.jpeg', '661860-890ab0ed-b79f-4f6d-a21b-44c12f752e15.jpeg'),
	(12, '2d8be740-934f-49a3-a6ba-d13c811f6583.jpeg', '125724-2d8be740-934f-49a3-a6ba-d13c811f6583.jpeg'),
	(13, 'd0cdb3ab-4251-4982-9693-452127646de2.jpeg', '131343-d0cdb3ab-4251-4982-9693-452127646de2.jpeg'),
	(14, '04f8578c-a8c9-465a-a116-87c2350407a8.jpeg', '539478-04f8578c-a8c9-465a-a116-87c2350407a8.jpeg'),
	(15, '7384d857-5faa-4b79-aa6b-704884cc8c15.jpeg', '245955-7384d857-5faa-4b79-aa6b-704884cc8c15.jpeg'),
	(16, 'b71430cc-0dea-4ec1-8e4f-c69e7fd47e4e.jpeg', '432960-b71430cc-0dea-4ec1-8e4f-c69e7fd47e4e.jpeg'),
	(17, 'b71430cc-0dea-4ec1-8e4f-c69e7fd47e4e.jpeg', '745465-b71430cc-0dea-4ec1-8e4f-c69e7fd47e4e.jpeg'),
	(18, '45d3e72e-b07f-47c5-8555-55c36885a017.jpeg', '983982-45d3e72e-b07f-47c5-8555-55c36885a017.jpeg'),
	(19, '45d3e72e-b07f-47c5-8555-55c36885a017.jpeg', '79060-45d3e72e-b07f-47c5-8555-55c36885a017.jpeg'),
	(20, '2aed9348-f6b7-4ac0-b690-d0f2fd93cfc4.jpeg', '784521-2aed9348-f6b7-4ac0-b690-d0f2fd93cfc4.jpeg');
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;

-- Copiando dados para a tabela appinkonnect.sessao: ~20 rows (aproximadamente)
/*!40000 ALTER TABLE `sessao` DISABLE KEYS */;
INSERT INTO `sessao` (`id`, `dataSessao`, `horario`, `valor`, `anotacoes`, `tatuador`, `cliente`) VALUES
	(1, '2023-07-21', '00:00:00', 1.22, 'a', 24, 'aa'),
	(2, '0000-00-00', '00:00:00', 0.00, 'aa', 24, 'nomeCliente'),
	(3, '0000-00-00', '23:59:00', 0.00, 'aa', 24, 'nomeCliente'),
	(4, '2023-07-26', '13:11:00', 0.00, 'aa', 24, 'aaaa'),
	(5, '2023-07-26', '13:11:00', 0.00, 'aa', 24, 'aaaa'),
	(6, '2023-07-26', '13:11:00', 0.00, 'aa', 24, 'aaaa'),
	(7, '2023-07-18', '00:05:00', 200.50, 'testeeeess', 24, 'LUI'),
	(8, '2023-07-26', '23:00:00', 500.20, 'assa', 24, 'teste2'),
	(9, '2023-07-25', '22:00:00', 500.00, 'notascosdoddji', 24, 'novotesdte'),
	(10, '2023-07-26', '22:00:00', 500.00, 'notascosdoddji', 24, 'novotesdteefdsfds'),
	(11, '2023-07-25', '22:00:00', 500.00, 'notascosdoddji', 24, 'novotesdteefdsfds'),
	(12, '2023-07-27', '02:05:00', 500.00, 'notascosdoddji', 24, 'reloadtestre'),
	(13, '2023-07-26', '02:05:00', 500.00, 'notascosdoddji', 24, 'reloadtestre'),
	(14, '2023-07-19', '02:05:00', 500.00, 'notascosdoddji', 24, 'reloadtestre'),
	(15, '2023-07-29', '02:05:00', 500.00, 'notascosdoddji', 24, 'reloadtestre'),
	(16, '2023-07-19', '02:05:00', 500.00, 'notascosdoddji', 24, 'reloadtestre'),
	(17, '2023-07-25', '02:05:00', 500.00, 'notascosdoddji', 24, 'reloadtestre'),
	(18, '2023-07-25', '17:17:00', 999.99, 'Ã©', 24, 'Ultimotestereload'),
	(19, '2023-07-25', '17:17:00', 999.99, 'Ã©', 24, 'Ultimotestereload'),
	(20, '2023-07-19', '09:35:00', 200.00, 'no', 24, 'sss2'),
	(21, '2023-07-20', '10:08:00', 22.00, 'a', 24, 'aaa222'),
	(22, '2023-07-20', '13:09:00', 123.00, 'anotei', 23, 'aa'),
	(23, '2023-07-28', '12:00:00', 200.00, 'aaaaaaa', 23, 'vxff'),
	(24, '2023-07-20', '02:38:00', 999.99, 'De', 23, 'Sss'),
	(25, '2023-07-20', '10:30:00', 100.00, 'Primeira tatuagem, estilo realista', 37, 'Jerson');
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.tatuador: ~15 rows (aproximadamente)
/*!40000 ALTER TABLE `tatuador` DISABLE KEYS */;
INSERT INTO `tatuador` (`id`, `nome`, `senha`, `email`, `cpf`, `especialidade`, `dataNascimento`, `profileImgId`, `estudio`, `postagem`) VALUES
	(23, 'Tatuador_1', 'abc', 'abc', '111.111.111-11', 'Maori', '2005-10-06', 10, 1, b'1'),
	(24, 'estudiotestando', 'testandoNovoEstudio', 'testandoNovoEstudio', '222.222.222-22', 'Old School', '2005-10-06', 11, 11, b'1'),
	(25, 'Tatuador_3', '123', 'usuario_3@gmail.com', '333.333.333-33', 'Realismo', '2005-10-06', 12, NULL, b'1'),
	(26, 'testeFuncionamento', 'aa', 'aa', 'aa', 'aa', '2005-10-06', 14, NULL, NULL),
	(27, 'data', 'teste', 'teste', 'aa', 'aa', '2005-10-06', 15, NULL, NULL),
	(28, 'data2', 'data2', 'data2', '123', '123', '2005-10-06', 16, NULL, NULL),
	(29, 'data3', 'data3', 'data3', 'data3', 'data3', '2005-10-06', 17, 10, NULL),
	(30, 'testeestudio', 'testeestudio', 'testeestudio', '111', '111', '1967-10-13', 18, 8, b'1'),
	(31, 'testeestudio', 'testeestudio', 'testeestudio', '111', '111', '1967-10-13', 19, NULL, NULL),
	(32, 'aa', '123', '123', '123', '123', '0000-00-00', 10, 9, NULL),
	(33, 'aa', '123', '123', '123', '123', '2005-10-06', 10, NULL, NULL),
	(34, 'aa', '123', '123', '123', '123', '2005-10-06', 10, 7, NULL),
	(35, 'aa', '123', '123', '123', '123', '2005-10-06', 10, 6, NULL),
	(36, 'aa', '123', '123', '123', '123', '2005-10-06', 10, NULL, NULL),
	(37, 'Diego Baltazar ', '123', 'dieguinhoclaudio@gmail.com', '123456789', '3D', '2005-10-06', 20, 12, b'1');
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
) ENGINE=InnoDB AUTO_INCREMENT=99 DEFAULT CHARSET=latin1;

-- Copiando dados para a tabela appinkonnect.usuarios: ~2 rows (aproximadamente)
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `nivel`, `imagemProfile`) VALUES
	(95, 'NomeUsuario', '123', '123', NULL, '3ec5daf0-f176-4e21-a14e-a1af2f971738.jpeg'),
	(96, 'AA', 'abc', 'abc', NULL, '3ec5daf0-f176-4e21-a14e-a1af2f971738.jpeg'),
	(97, 'aa', 'exemplo@gmail', '123', NULL, '3ec5daf0-f176-4e21-a14e-a1af2f971738.jpeg'),
	(98, 'Diegocliente', 'diegocliente@gmail', '123', NULL, '711f4867-bc7c-47c2-b36d-0a76b366af4f.jpeg');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
