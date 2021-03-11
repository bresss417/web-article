<?php
header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");	
header("Cache-Control: post-check=0, pre-check=0", false);	
header("Pragma: no-cache");
include('../Database/Connect.php');
 $getID = $_GET['av_id'];
 
  $result = "SELECT * FROM logkey_doctor D INNER JOIN profile_doctor P ON P.id_logkey = D.doctor_id WHERE D.doctor_id='$getID'";
  $avQuery = mysqli_query($db,$result)or die(mysqli_error());
 
   $av_num = mysqli_num_rows($avQuery);
  if($av_num > 0){
      $av_data = array();
      foreach($avQuery as $av_result){
          $av_data = $av_result;
      }
      echo json_encode($av_data);
      mysqli_close($db);
  }else{
      echo json_encode(null);
  } 

?>