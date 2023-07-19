INSERT INTO sessao SET dataSessao = 2023-07-09, horario = '23:59:00', 
valor = 'aa', anotacoes = 'aa', sessao.tatuador = 24, cliente = 'nomeCliente'


SELECT *  FROM sessao ORDER BY dataSessao ASC;

SELECT *  FROM sessao where tatuador = 24 ORDER BY dataSessao ASC

SELECT *  FROM sessao where tatuador = 24 ORDER BY dataSessao ASC LIMIT 10


ALTER TABLE tatuador ADD CONSTRAINT FK_estudio FOREIGN KEY (estudio) REFERENCES estudio(id);

SELECT tatuador.*, DATE_FORMAT(tatuador.dataNascimento, '%d/%m/%Y') 
AS dataNascimentoFormatada,profileimg.id AS imageId, profileimg.imgName, profileimg.imgRandomName 
FROM tatuador INNER JOIN profileimg ON profileImgId = profileimg.id where email = 'testeestudio' 
and senha = 'testeestudio';

INSERT INTO estudio SET nome = 'aa', EnderecoNome = 'aaa', EnderecoValor = POINT( -24.7285597, -48.1053889)

SELECT *, x(EnderecoValor) AS longitude, y(EnderecoValor) AS latitude FROM estudio 
INNER JOIN tatuador ON estudio.id = tatuador.estudio 
INNER JOIN profileimg ON tatuador.profileImgId = profileimg.id WHERE EnderecoValor is NOT null

SELECT *, x(EnderecoValor) AS longitude, y(EnderecoValor) AS latitude FROM estudio

UPDATE tatuador SET tatuador.estudio = 1 
WHERE tatuador.id = 35