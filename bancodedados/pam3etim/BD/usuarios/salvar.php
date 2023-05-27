<?php
require_once("../conexao.php");
$tabela = 'tatuador';

$postjson = json_decode(file_get_contents('php://input'), true);

$id = @$postjson['id'];
$nome = @$postjson['nome'];
$telefone = @$postjson['telefone'];
$endereco = @$postjson['endereco'];
$especialidade = @$postjson['especialidade'];


//validar email
$query = $pdo->query("SELECT * FROM $tabela where telefone = '$telefone'");
$res = $query->fetchAll(PDO::FETCH_ASSOC);
$total_reg = @count($res);
if ($total_reg > 0 and $res[0]['id'] != $id) {
	$result = json_encode(array('mensagem' => 'Número de telefone já foi Cadastrado, escolha Outro!', 'sucesso' => false));
	echo $result;
	exit();
}

if ($id == "" || $id == "0") {
	$res = $pdo->prepare("INSERT INTO $tabela SET nome = :nome, telefone = :telefone, endereco = :endereco, especialidade = :especialidade");
} else {
	$res = $pdo->prepare("UPDATE $tabela SET nome = :nome, telefone = :telefone, endereco = :endereco, especialidade = :especialidade where id = '$id'");

}


$res->bindValue(":nome", "$nome");
$res->bindValue(":telefone", "$telefone");
$res->bindValue(":endereco", "$endereco");
$res->bindValue(":especialidade", "$especialidade");

$res->execute();


$result = json_encode(array('mensagem' => 'Salvo com sucesso!', 'sucesso' => true));

echo $result;


?>