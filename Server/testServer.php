<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<?php

$conn = new mysqli('localhost','root','','my_pyple');
  mysqli_set_charset($conn,'utf8');
    if(!$conn){
      die("this not connected !");
    }
     $result = mysqli_query($conn,"SELECT * FROM profile_doctor");
        $allowed_types=array('jpg','jpeg','gif','png');
        $dir    ="Upload/ProfileJob/";
        $files1 = scandir($dir);
    $numarr = mysqli_num_rows($result);
    echo $numarr;
        foreach($files1 as $key=>$value){
            $file_parts = explode('.',$value);
            $ext = strtolower(array_pop($file_parts));
            
            if(in_array($ext,$allowed_types)){
                //echo "<img style='width:100px;' src='".$dir.$value."'/>&nbsp;<br>"; 
                echo $value,"<br>"; 
                
            }           
        }
        
        
    

?>

</body>
</html>