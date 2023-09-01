<?php

include_once('../conexao.php');

$postjson = json_decode(file_get_contents('php://input'), true);

$buscar = '%' . @$_GET['buscar'] . '%';

/* $query = $pdo->prepare("SELECT tatuador.*, profileimg.imgRandomName FROM tatuador 
inner join profileimg on  profileImgId = profileimg.id 
WHERE tatuador.nome like '$buscar'
ORDER BY tatuador.id "); */

/* $query = $pdo->prepare("SELECT postagenstatuadores.*, tatuador.nome, tatuador.email, postagensimg.imgRandomName AS postagemImgRandomName, 
profileimg.imgRandomName AS profileImgRandomName  
FROM postagenstatuadores 
INNER JOIN postagensimg ON imgPostId = postagensimg.id
INNER JOIN tatuador ON tatuadorId = tatuador.id
INNER JOIN profileimg ON tatuador.profileImgId = profileimg.id where nome LIKE '$buscar' order by id desc"); */

$query = $pdo->prepare("SELECT tatuador.*, profileimg.imgRandomName FROM tatuador 
inner join profileimg on  profileImgId = profileimg.id 
where nome LIKE '$buscar' and tatuador.postagem = 1
ORDER BY tatuador.id");
/* $query = $pdo->prepare("SELECT tatuador.*, profileimg.imgRandomName FROM tatuador 
inner join profileimg on  profileImgId = profileimg.id 
WHERE tatuador.postagem = 1
ORDER BY tatuador.id"); */
/* $query = $pdo->prepare("SELECT * from usuarios where nome LIKE '$buscar' or email LIKE '$buscar' order by id desc"); */

$query->execute();

$res = $query->fetchAll(PDO::FETCH_ASSOC);

for ($i = 0; $i < count($res); $i++) {
    foreach ($res[$i] as $key => $value) {
    }

    $dados[] = array(
        'id' => $res[$i]['id'],
        'nome' => $res[$i]['nome'],
        'especialidade' => $res[$i]['especialidade'],
        'profileImgId' => $res[$i]['profileImgId'],
        'imgRandomName' => $res[$i]['imgRandomName'],
    );
}
/* for ($i = 0; $i < count($res); $i++) {
    foreach ($res[$i] as $key => $value) {
    }

    $dados[] = array(
        'id' => $res[$i]['id'],
        'nome' => $res[$i]['nome'],
        'email' => $res[$i]['email'],
        'descricao' => $res[$i]['descricao'],
        'estilo' => $res[$i]['estilo'],
        'postagemImgRandomName' => $res[$i]['postagemImgRandomName'],
        'profileImgRandomName' => $res[$i]['profileImgRandomName'],
    );
} */

if (count($res) > 0) {
    $result = json_encode(array('success' => true, 'resultado' => $dados));
} else {
    $result = json_encode(array('success' => false, 'resultado' => '0'));
}

echo $result;

?>