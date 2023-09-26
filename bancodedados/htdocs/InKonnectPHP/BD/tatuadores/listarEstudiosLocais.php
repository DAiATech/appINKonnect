<?php

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$limite = (isset($_GET['limite'])) ? $_GET['limite'] : 5;
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1;

$inicio = ($limite * $pagina) - $limite;


$query = $pdo->prepare("SELECT *, estudio.id AS estudioId,  x(EnderecoValor) AS longitude, y(EnderecoValor) AS latitude, tatuador.nome AS tatuadorNome, estudio.nome AS estudioNome, tatuador.id AS tatuadorId,tatuador.especialidade, DATE_FORMAT(tatuador.dataNascimento, '%d/%m/%Y') AS tatuadorDataNascimento, profileimg.imgRandomName
FROM estudio INNER JOIN tatuador ON estudio.id = tatuador.estudio INNER JOIN profileimg ON tatuador.profileImgId = profileimg.id WHERE EnderecoValor is NOT NULL");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i = 0; $i < count($res); $i++) {
    $dados[] = array(
        'id' => $res[$i]['id'],
        'tatuadorId' => $res[$i]['tatuadorId'],
        'estudioNome' => $res[$i]['estudioNome'],
        'tatuadorNome' => $res[$i]['tatuadorNome'],
        'enderecoNome' => $res[$i]['EnderecoNome'],
        'longitude' => $res[$i]['longitude'],
        'latitude' => $res[$i]['latitude'],
        'imgRandomName' => $res[$i]['imgRandomName'],
        'especialidade' => $res[$i]['especialidade'],
        'tatuadorNascimento' => $res[$i]['tatuadorDataNascimento'],
    );

}

if (count($res) > 0) {
    $result = json_encode(array('success' => true, 'resultado' => @$dados, 'totalItems' => @count($dados) + ($inicio)));
} else {
    $result = json_encode(array('success' => false, 'resultado' => '0'));
}

echo $result;

?>