<?php

include("connection.php");

$query = $mysql -> prepare ("SELECT * FROM `news`");
$query -> execute();
$result = $query -> get_result();

while($object = $result -> fetch_assoc()){
    $data [] = $object;
}

$response = [
    "news" => $data
];

echo json_encode($response);

?>