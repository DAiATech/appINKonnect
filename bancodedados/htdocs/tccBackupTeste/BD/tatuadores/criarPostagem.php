<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

require_once("../conexao.php");
include('../url.php');

$tabela = 'postagensTatuadores';


$descricao = $_POST['descricao'];
$estilo = $_POST['estilo'];
$idTatuador = $_POST['tatuadorId'];


if ($_FILES['photo'])
    ; {
    $photo_name = $_FILES["photo"]["name"];
    $photo_tmp_name = $_FILES["photo"]["tmp_name"];

    //MOVE FILE TO SERVER
    $random_name = rand(1000, 1000000) . "-" . $photo_name;
    $upload_name = $url . "/InKonnectPHP/BD/tatuadores/imgsPostagens" . $random_name;

    (move_uploaded_file($_FILES["photo"]["tmp_name"], "../tatuadores/imgsPostagens/" . $random_name));

    $stmt = $pdo->prepare("INSERT INTO PostagensImg SET imgName = :imgName, imgRandomName =:imgRandomName");
    /* if ($id == "" || $id == "0") { */
    $res = $pdo->prepare("INSERT INTO $tabela SET descricao = :descricao, estilo = :estilo, imgPostId = :imgPostId, tatuadorId = :tatuadorId ");

    $stmt2 = $pdo->prepare("UPDATE tatuador SET tatuador.postagem = :postagem
    WHERE tatuador.id = $idTatuador");
}

$stmt->bindValue(":imgName", "$photo_name");
$stmt->bindValue(":imgRandomName", "$random_name");
$stmt->execute();
$IdImagem = $pdo->lastInsertId();

$res->bindValue(":descricao", "$descricao");
$res->bindValue(":estilo", "$estilo");
$res->bindValue(":imgPostId", "$IdImagem");
$res->bindValue(":tatuadorId", "$idTatuador");

$stmt2->bindValue(":postagem", "1");
$stmt2->execute();



/* $res->bindValue(":especialidade", "$especialidade");*/
$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));

echo $result;

?>