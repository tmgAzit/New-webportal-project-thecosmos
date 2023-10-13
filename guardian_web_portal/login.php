<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include the database connection file
require_once('db.php');


$userpostdata= json_decode(file_get_contents("php://input"));
	$email= $userpostdata->email;
    $password= $userpostdata->password;


$result = mysqli_query($conn, "SELECT * FROM `users` WHERE `email` = '$email' AND `password` = '$password'");
$nums = mysqli_num_rows($result);
$fetch = mysqli_fetch_array($result);
if ($nums >= 1) {
	session_start();
	header("Location: posts.php?user_id=" . $fetch["user_id"]);
	$userID=$fetch['user_id'];
	$fname=$fetch['firstName'];
	$lname=$fetch['lastName'];
	// $_SESSION['userID']=$userID;
	// $_SESSION['first_name']=$fname;
	// $_SESSION['last_name']=$lname;
	setcookie('user_id', $userID, time() + 3600, '/');
    $rs = mysqli_fetch_array($result);
	
    // Check if user data exists before accessing it
    if ($rs) {
        http_response_code(200);
        $outp = "";

        $outp .= '{"Email":"' . $rs["email"] . '",';
        $outp .= '"user_id":"' . $rs["user_id"] . '",';
        $outp .= '"user_role":"' . $rs["role"] . '",';
        $outp .= '"first_name":"' . $rs["firstName"] . '",';
        $outp .= '"last_name":"' . $rs["lastName"] . '",';
        $outp .= '"Status":"200"}';

        echo $outp;
    } else {
        // Handle the case where the query returned no results
        http_response_code(202);
    }
} else {
    http_response_code(202);
}
?>