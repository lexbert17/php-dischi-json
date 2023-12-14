<?php 

// prelevo il file albums
$string = file_get_contents("albums.json");


// decodifico stringa albums in array 
$list  =json_decode($string,true);


// ricodifico in stringa
$json = json_encode($list);

// invio dati al client
header("Content-Type: application/json");
echo $json;





?>