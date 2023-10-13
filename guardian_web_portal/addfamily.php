<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include the database connection file
require_once('db.php');

$userpostdata= json_decode(file_get_contents("php://input"));
    $childId= $userpostdata->child_id;
    $fname= $userpostdata->firstName;
    $lname= $userpostdata->lastName;
    $address= $userpostdata->address;
    $email= $userpostdata->email;
    $relation= $userpostdata->relation;
    $contact = $userpostdata->contact;
    $result= mysqli_query($conn, "INSERT INTO family_profile (first_name, last_name, email, address, relationship, contact, child_id) VALUES('$fname', '$lname', '$email', '$address', '$relation', '$contact', '$childId')");

if($result)
        {
          echo json_encode(["success"=>"User Added Successfully"]);
          return;
        } else {
            echo json_encode(["success"=>"Please Check the User Data!"]);
            return; 
        }
?>