<?php
header('Access-Control-Allow-Origin: *');
header('Content-type: application/json');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header('Content-Type: application/json; charset=utf-8');

require_once("../conexao.php");
include('../url.php');

$tabela = 'tatuador';

/* $postjson = json_decode(file_get_contents('php://input'), true);
 *//* $id = @$postjson['id'];

$nome = @$postjson['nome'];
$telefone = @$postjson['telefone'];
$endereco = @$postjson['endereco'];
$especialidade = @$postjson['especialidade']; */


/* $id = @$postjson['id']; */

/* $nome = @$postjson['nome'];
$email = @$postjson['email'];
$senha = @$postjson['senha']; */

$nome = $_POST['nome'];
$email = $_POST['email'];
$senha = $_POST['senha'];
$cpf = $_POST['cpf'];
$especialidade = $_POST['especialidade'];
$dataNascimento = $_POST['data'];


//validar email
/* $query = $pdo->query("SELECT * FROM $tabela where id = '$id'");
$res = $query->fetchAll(PDO::FETCH_ASSOC); */
/* $total_reg = @count($res);
if ($total_reg > 0 and $res[0]['id'] != $id) {
    $result = json_encode(array('mensagem' => 'Número de telefone já foi Cadastrado, escolha Outro!', 'sucesso' => false));
    echo $result;
    exit();
}
 */
if ($_FILES['photo'])
    ; {
    $photo_name = $_FILES["photo"]["name"];
    $photo_tmp_name = $_FILES["photo"]["tmp_name"];

    //MOVE FILE TO SERVER
    $random_name = rand(1000, 1000000) . "-" . $photo_name;
    $upload_name = $url . "/InKonnectPHP/BD/tatuadores/imgsTatuadores" . $random_name;

    (move_uploaded_file($_FILES["photo"]["tmp_name"], "../tatuadores/imgsTatuadores/" . $random_name));

    $stmt = $pdo->prepare("INSERT INTO profileimg SET imgName = :imgName, imgRandomName =:imgRandomName");
    /* if ($id == "" || $id == "0") { */
    $res = $pdo->prepare("INSERT INTO $tabela SET nome = :nome, senha = :senha, email = :email, cpf = :cpf, especialidade = :especialidade, dataNascimento = :dataNascimento, profileImgId = :profileImgId");
    /*}  else {
              $res = $pdo->prepare("UPDATE $tabela SET nome = :nome, email = :email, senha = :senha, imagemProfile = :imagemProfile where id = '$id'");
          } */

}

$stmt->bindValue(":imgName", "$photo_name");
$stmt->bindValue(":imgRandomName", "$random_name");
$stmt->execute();
$IdImagem = $pdo->lastInsertId();

$res->bindValue(":nome", "$nome");
$res->bindValue(":senha", "$senha");
$res->bindValue(":email", "$email");
$res->bindValue(":cpf", "$cpf");
$res->bindValue(":especialidade", "$especialidade");
$res->bindValue(":dataNascimento", "$dataNascimento");
$res->bindValue(":profileImgId", "$IdImagem");


/* $res->bindValue(":especialidade", "$especialidade");*/
$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));

echo $result;

?>