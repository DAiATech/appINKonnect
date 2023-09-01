<?php 
include_once('../conexao.php');

$postjson = json_decode(file_get_contents("php://input"), true);
$senha = $postjson['senha'];
$query_buscar = $pdo->prepare("SELECT tatuador.*, DATE_FORMAT(tatuador.dataNascimento, '%d/%m/%Y') AS dataNascimentoFormatada,profileimg.id AS imageId, profileimg.imgName, profileimg.imgRandomName 
FROM tatuador INNER JOIN profileimg ON profileImgId = profileimg.id where email = :email and senha = :senha ");
$query_buscar->bindValue(":email", "$postjson[email]");
$query_buscar->bindValue(":senha", "$senha");
$query_buscar->execute();


$dados_buscar = $query_buscar->fetchAll(PDO::FETCH_ASSOC);

for ($i=0; $i < count($dados_buscar); $i++) { 
    foreach ($dados_buscar[$i] as $key => $value) {
    }
    $id_user = $dados_buscar[$i]['id'];

    $dados[] = array(
        'id' => intVal($dados_buscar[$i]['id']),
        'nome' => $dados_buscar[$i]['nome'],  
        'email' => $dados_buscar[$i]['email'],  
        'cpf' => $dados_buscar[$i]['cpf'],  
        'especialidade' => $dados_buscar[$i]['especialidade'],  
        'profileImgId' => $dados_buscar[$i]['profileImgId'],  
        'imgRandomName' => $dados_buscar[$i]['imgRandomName'],  
        'dataNascimento' => $dados_buscar[$i]['dataNascimentoFormatada'],  
        'estudio' => $dados_buscar[$i]['estudio'],  
    );
}

if(@count($dados_buscar) > 0){
    $result = json_encode(array('result'=>$dados));
    echo $result;  

}else{
    $result = json_encode(array('result'=>'Dados Incorretos!'));
 	echo $result;
}
?>