<?php
include('../Database/Connect.php');

// set path image to name on database
function setImgpath($imageName){
  $ext = pathinfo(basename($_FILES[$imageName]["name"]), PATHINFO_EXTENSION);
    if($ext !=""){
        $new_img_name = "img_".uniqid().".".$ext;
        $path = "../Upload/ProfileJob/";
        $uploadPath = $path.$new_img_name;
        move_uploaded_file($_FILES[$imageName]["tmp_name"],$uploadPath);
        $newImage = $new_img_name;
    }else{
        $newImage = "";
    }
    return $newImage; 
}
 //end set image 

 $Fullname = $_POST['Fullname'];
 $Email = $_POST['Email'];
 $sex = $_POST['Sex'];
 $Age = $_POST['Age'];
 $Address = $_POST['Address'];
 $position = $_POST['Position'];
 $Workplace = $_POST['Workpalce'];
 $doctorId = $_POST['Id'];
    
  $Check = "SELECT * FROM logkey_doctor WHERE doctor_id!='$doctorId' && user_name='$Email'";
  $QeuryCheck = mysqli_query($db,$Check)or die(mysqli_error());
  $RowCheck = mysqli_num_rows($QeuryCheck);
    if($RowCheck > 0){
        $msgResponseUpdate = array(
            'status'=>403,
            'icons'=>'warning',
            'title'=>'Warning Alert',
            'msg'=>'Email ซํ้ากัน โปรดใช้ Email อื่น'
        );
        print json_encode($msgResponseUpdate);
    }else{
         if(isset($_FILES["Image"]["tmp_name"]) == ""){
            $CodeUpdateL = "UPDATE logkey_doctor
              SET user_name='$Email',fullname='$Fullname',sex='$sex'
            WHERE doctor_id='$doctorId'";

            $CodeUpdateP = "UPDATE profile_doctor 
              SET age='$Age',position='$position',address='$Address',work_place='$Workplace'
            WHERE id_logkey='$doctorId'";
         }else{
            $CodeUpdateL = "UPDATE logkey_doctor
              SET user_name='$Email',fullname='$Fullname',sex='$sex'
            WHERE doctor_id='$doctorId'";
            $CodeUpdateP = "UPDATE profile_doctor 
              SET age='$Age',position='$position',address='$Address',doctor_profile='".setImgpath("Image")."',work_place='$Workplace'
            WHERE id_logkey='$doctorId'";
         }
        $QueryUpdateL = mysqli_query($db,$CodeUpdateL)or die(mysqli_error());
        $QueryUpdateP = mysqli_query($db,$CodeUpdateP)or die(mysqli_error());
          if($QueryUpdateL && $QueryUpdateP){
               $msgSuccess = array(
                   'status'=> 200,
                   'msg'=> 'Update ข้อมูลเรียบร้อยแล้ว',
                   'icons'=>'success',
                   'title'=>'Update Success Fully'
               );
               print json_encode($msgSuccess);
          }else{
              $msgErr = array(
                  'status'=> 404,
                  'iconst'=>'error',
                  'title'=> 'Update Error Is not Update Fully',
                  'msg'=> 'เกิดข้อผิดพลาด ทางระบบ ไม่สามารถ update ข้อมูลได้'
              );
              print json_encode($msgErr);
          }
    }
?>
