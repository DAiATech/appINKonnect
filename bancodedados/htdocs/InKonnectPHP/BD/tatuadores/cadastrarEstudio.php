<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

require_once("../conexao.php");
include('../url.php');

$tabela = 'estudio';


$tatuadorId = $_POST['tatuadoriD'];
$nomeEstudio = $_POST['nomeEstudio'];
$nomeEndereco = $_POST['nomeEndereco'];
$enderecoLat = $_POST['enderecoLat'];
$enderecoLong = $_POST['enderecoLong'];

//MOVE FILE TO SERVER
$stmt = $pdo->prepare("INSERT INTO estudio SET nome = :nome, EnderecoNome =:EnderecoNome, EnderecoValor = POINT( $enderecoLong, $enderecoLat)");
/* if ($id == "" || $id == "0") { */
$res = $pdo->prepare("UPDATE tatuador SET tatuador.estudio = :estudio WHERE tatuador.id = $tatuadorId");

$stmt->bindValue(":nome", "$nomeEstudio");
$stmt->bindValue(":EnderecoNome", "$nomeEndereco");

/* $stmt->bindValue(":EnderecoValor", "POINT( -24.7285597, -48.1053889)");  
----NAO FUNCIONA, A FUNCAO POINT TEVE QUE FICAR DIRETO NOT INSERT*/ 

$stmt->execute();
$lastIdEstudio = $pdo->lastInsertId();

/* POINT($enderecoLat,$enderecoLong) */

$res->bindValue(":estudio", "$lastIdEstudio");

$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));

echo $result;

?>