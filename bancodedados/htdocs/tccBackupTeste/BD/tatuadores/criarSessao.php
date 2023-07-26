<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

require_once("../conexao.php");
include('../url.php');

$tabela = 'sessao';

$getTatuador = $_POST['tatuador'];
$getCliente = $_POST['cliente'];
$getData = $_POST['data'];
$getHorario = $_POST['horario'];
$getValor = $_POST['valor'];
$getAnotacoes = $_POST['anotacoes'];

$stmt = $pdo->prepare("INSERT INTO $tabela SET dataSessao = :dataSessao, horario = :horario, valor = :valor, anotacoes = :anotacoes, tatuador = :tatuador, cliente = :cliente");

$stmt->bindValue(":dataSessao", "$getData");
$stmt->bindValue(":horario", "$getHorario");
$stmt->bindValue(":valor", "$getValor");
$stmt->bindValue(":anotacoes", "$getAnotacoes");
$stmt->bindValue(":tatuador", "$getTatuador");
$stmt->bindValue(":cliente", "$getCliente");

$stmt->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));

echo $result;

?>