<?php

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$limite = (isset($_GET['limite'])) ? $_GET['limite'] : 5;
$tatuadorId = (isset($_GET['ab'])) ? $_GET['ab'] : 19;
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1;

$inicio = ($limite * $pagina) - $limite;

$query = $pdo->prepare("SELECT postagenstatuadores.*, tatuador.nome,postagensimg.imgRandomName AS postagemImgRandomName, 
profileimg.imgRandomName AS profileImgRandomName  
FROM postagenstatuadores 
INNER JOIN postagensimg ON imgPostId = postagensimg.id
INNER JOIN tatuador ON tatuadorId = tatuador.id
INNER JOIN profileimg ON tatuador.profileImgId = profileimg.id
WHERE postagenstatuadores.tatuadorId = $tatuadorId
/*  DESC LIMIT $inicio, $limite */");
/* $query = $pdo->prepare("SELECT * FROM tatuador inner join profileimg on  profileImgId = profileimg.id ORDER BY tatuador.id DESC LIMIT $inicio, $limite"); */
/* $query = $pdo->prepare("SELECT * FROM tatuador ORDER BY id DESC LIMIT $inicio, $limite"); */

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i = 0; $i < count($res); $i++) {
    $dados[] = array(
        'id' => $res[$i]['id'],
        'nome' => $res[$i]['nome'],
        'descricao' => $res[$i]['descricao'],
        'estilo' => $res[$i]['estilo'],
        'postagemImgRandomName' => $res[$i]['postagemImgRandomName'],
        'profileImgRandomName' => $res[$i]['profileImgRandomName'],
    );
}
/* for ($i = 0; $i < count($res); $i++) {
    $dados[] = array(
        'id' => $res[$i]['id'],
        'nome' => $res[$i]['nome'],
        'especialidade' => $res[$i]['especialidade'],
        'profileImgId' => $res[$i]['profileImgId'],
        'imgRandomName' => $res[$i]['imgRandomName'],
    );
} */

if (count($res) > 0) {
    $result = json_encode(array('success' => true, 'resultado' => @$dados, 'totalItems' => @count($dados) + ($inicio)));
} else {
    $result = json_encode(array('success' => false, 'resultado' => '0'));
}

echo $result;

?>