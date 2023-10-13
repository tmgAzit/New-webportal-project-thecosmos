<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: *");
// include_once("core.php");
// // Include the database connection file
// require_once('db.php');

// // Replace 'users' with your actual users table name
// $sql = "SELECT * FROM `users`";
// $result = mysqli_query($conn, $sql);

// if ($result) {
//     while ($row = mysqli_fetch_array($result)) {
//         $user[] = $row;
//         http_response_code(200);
//         $user_role[] = $row["role"];
//     }
//     echo json_encode($user);
//     echo json_encode($user_role);
// } else {
//     http_response_code(500); // Internal Server Error status code
//     echo json_encode(['message' => 'Error fetching user data']);
// }

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include the database connection file
require_once('db.php');

// Replace 'users' with your actual users table name
$sql = "SELECT * FROM `users`";
$result = mysqli_query($conn, $sql);

if ($result) {
    $users = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $users[] = $row;
    }

    http_response_code(200);
    echo json_encode($users);
} else {
    http_response_code(500); // Internal Server Error status code
    echo json_encode(['message' => 'Error fetching user data']);
}

?>
