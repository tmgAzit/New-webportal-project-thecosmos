<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow requests from the frontend origin (replace with your frontend's URL)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Include the database connection file (modify as needed)
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $child_id = $_POST['child_id'];
    $reason = $_POST['reason'];
    $file = time() . $_FILES['file']['name'];
    $file_temp = $_FILES['file']['tmp_name'];
    $destination = $_SERVER['DOCUMENT_ROOT'] . '/guardian_web_portal/absent_data/' . $file;

    $result = mysqli_query($conn, "INSERT INTO `absent_data`(`reason`, `file`, `child_id`) VALUES ('$reason','$file', '$child_id')");

    if ($result) {
        move_uploaded_file($file_temp, $destination);
        echo json_encode(["message" => "Absent reason Inserted Successfully"]);
        return;
    } else {
        echo json_encode(["error" => "Absent reason Not Inserted!"]);
        return;
    }
}
?>
