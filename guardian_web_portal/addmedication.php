<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
// Include the database connection file
require_once('db.php');


if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $child_id = $_POST['child_id'];
    $medicineName = $_POST['medicineName'];
    $instructions = $_POST['instructions'];
    $expiryDate = $_POST['expiryDate'];
    $dosageperday = $_POST['dosagePerDay'];
    $timePerDay = $_POST['timesPerDay'];
    $guardianSignature = $_POST['guardianSignature'];
    // Generate a unique file name (you can modify this logic)
    $file = time() . $_FILES['file']['name'];
    $file_temp = $_FILES['file']['tmp_name'];
    $destination = $_SERVER['DOCUMENT_ROOT'] . '/guardian_web_portal/medication/' . $file;

    $result = mysqli_query($conn, "INSERT INTO `medication`(`medName`, `instr`, `expiryDate`, `dosagePerDay`, `timesPerDay`, `guardianSignature`, `mfile`, `child_id`) VALUES ('$medicineName','$instructions','$expiryDate','$dosageperday','$timePerDay','$guardianSignature','$file','$child_id')");

    if ($result) {
        move_uploaded_file($file_temp, $destination);
        echo json_encode(["message" => "Medication Inserted Successfully"]);
        return;
    } else {
        echo json_encode(["error" => "Medication Not Inserted!"]);
        return;
    }
}
?>
