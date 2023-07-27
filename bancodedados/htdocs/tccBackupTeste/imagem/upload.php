<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');

header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

require_once("../BD/conexao.php");
$tabela = 'usuarios';
$postjson = json_decode(file_get_contents('php://input'), true);
$id = @$postjson['id'];


if ($_FILES['photo']) {
    $photo_name = $_FILES["photo"]["name"];
    $photo_tmp_name = $_FILES["photo"]["tmp_name"];

    //MOVE FILE TO SERVER
    $random_name = rand(1000, 1000000) . "-" . $photo_name;
    $upload_name = "http://26.191.226.215/tccBackupTeste/imagem/" . $random_name;
    $upload_name = preg_replace('/s+/', '-', $upload_name);

    if (move_uploaded_file($_FILES["photo"]["tmp_name"], "../BD/usuarios/imgsUsuarios/" . $_FILES["photo"]["name"])) {
        //file uploaded to server
        /* $sql = "UPDATE usuarios set imagemProfile ='$photo_name' where id = $id";
        mysqli_query($pdo, $sql); */

        $res = $pdo->prepare("UPDATE $tabela set imagemProfile = :imagemProfile where id = '$id'");
        $res->bindValue(":imagemProfile", "$photo_name");
        $res->execute();
        $result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));
        echo $result;
    }
}




?>