<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
require_once('db.php');

// Get the user's last name from the frontend
$userLastName = $_GET['parent_last_name'];

  $sql = "SELECT child_profile.*
          FROM `child_profile`
          JOIN family_profile ON family_profile.child_id = child_profile.child_id
          WHERE family_profile.last_name = '$userLastName'";

$result = mysqli_query($conn, $sql);

if ($result) {
  $children = [];

  while ($row = mysqli_fetch_assoc($result)) {
    $children[] = $row;
  }

  // Return the results as JSON
  http_response_code(200);
  echo json_encode(['phpresult' => $children]);
} else {
  http_response_code(500);
  echo json_encode(['message' => 'Error fetching children data']);
}
?>
