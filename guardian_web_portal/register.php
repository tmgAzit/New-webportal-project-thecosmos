<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include the database connection file
require_once('db.php');



$userpostdata= json_decode(file_get_contents("php://input"));
    $fname = $userpostdata->first_name;
    $lname = $userpostdata->last_name;
    $email= $userpostdata->email;
    $password= $userpostdata->password;


$result = mysqli_query($conn, "INSERT INTO users (firstName, lastName, email, password, createdAt, updatedAt) VALUES('$fname', '$lname', '$email', '$password', 'NOW()', 'NOW()')");
// $nums = mysqli_num_rows($result);
// $rs = mysqli_fetch_array($result);

if($result)
        {
          echo json_encode(["success"=>"User Added Successfully"]);
          return;
        } else {
            echo json_encode(["success"=>"Please Check the User Data!"]);
            return; 
        }

?>