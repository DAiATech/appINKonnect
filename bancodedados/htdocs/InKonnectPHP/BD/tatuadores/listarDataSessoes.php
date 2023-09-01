<?php

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$limite = (isset($_GET['limite'])) ? $_GET['limite'] : 5;
$tatuadorId = (isset($_GET['tatuador'])) ? $_GET['tatuador'] : 20;
$pagina = (isset($_GET['pagina'])) ? $_GET['pagina'] : 1;

$inicio = ($limite * $pagina) - $limite;

$query = $pdo->prepare("SELECT dataSessao  FROM sessao where tatuador = $tatuadorId ORDER BY dataSessao");

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i = 0; $i < count($res); $i++) {
    $dados[] = array(
        'dataSessao' => $res[$i]['dataSessao'],
    
    );
}

if (count($res) > 0) {
    $result = json_encode(array('success' => true, 'resultado' => @$dados, 'totalItems' => @count($dados) + ($inicio)));
} else {
    $result = json_encode(array('success' => false, 'resultado' => '0'));
}

echo $result;

?>