<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include the database connection file
require_once('db.php');

$userpostdata= json_decode(file_get_contents("php://input"));
    $fname= $userpostdata->firstName;
    $lname= $userpostdata->lastName;
    $address= $userpostdata->address;
    $age= $userpostdata->age;
    $sex= $userpostdata->sex;
    $father_name= $userpostdata->parent_name;
    $em_contact = $userpostdata->emergency_contact;
    $result= mysqli_query($conn, "INSERT INTO child_profile (first_name, last_name, age, sex, address, parent_name, emergency_contact) VALUES('$fname', '$lname', '$age', '$sex', '$address', '$father_name', '$em_contact')");
     
    $child_id = mysqli_insert_id($conn);
    $checkinResult = mysqli_query($conn, "INSERT INTO checkin (child_id, status) VALUES ('$child_id', 0)");
if($result)
        {
          echo json_encode(["success"=>"User Added Successfully"]);
          return;
        } else {
            echo json_encode(["success"=>"Please Check the User Data!"]);
            return; 
        }
?>