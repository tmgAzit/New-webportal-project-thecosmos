<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include the database connection file
require_once('db.php');

$childId = $_GET['child_id'];


$sql = "SELECT * FROM family_profile WHERE `child_id` = '$childId'";
$mysqli = mysqli_query($conn,$sql);
$json_data = array();

while($row = mysqli_fetch_assoc($mysqli)){
	$json_data[] = $row;
}

echo json_encode(['phpresult'=>$json_data]);