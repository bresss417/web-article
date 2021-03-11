<?php

$conn = new mysqli('localhost','root','','my_pyple');
  mysqli_set_charset($conn,'utf8');
    if(!$conn){
      die("this not connected !");
    }
  header("Access-Control-Allow-Origin: *");
     header("Content-Type: application/json; charset=UTF-8");

     $result = mysqli_query($conn,"SELECT * FROM camera LIMIT 4");
     $num = mysqli_num_rows($result);
        if($num > 0){
            $data = array();
            
            while($row = mysqli_fetch_assoc($result)){
                $data[] = $row;
            }
            echo json_encode($data);
            mysqli_close($conn);
        }else{
            echo json_encode(null);
        }

?>