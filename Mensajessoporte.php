<?php
$file_name = 'MensajesSoporte.html';
//opens the file.txt file or implicitly creates the file
$myfile = fopen($file_name, 'a');
$mensajes = $_POST['mensaje'];


$code = "<br><div class='mensajediv'><b class='user'>Anonimo:</b><p>" . $mensajes . "<b style='display:none;' class='brespuesta'>Respuesta:</b></p></div>\n";


// write name to the file
fwrite($myfile, $code);

// close the file
fclose($myfile);

?>
<script>
window.location="Soporte.php"
</script>