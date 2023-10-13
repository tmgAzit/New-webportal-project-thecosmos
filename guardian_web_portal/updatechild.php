<?php
// Allow requests from the localhost:5173 origin
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, OPTIONS"); // Allow POST and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type");

// Other headers
header("Content-Type: application/json"); // Set the content type to JSON

// Include the database connection file
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Respond to the preflight request with a 200 status
    http_response_code(200);
    exit();
}
$childId = $_GET['child_id'];
// Check if it's a POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the child_id and updated data from the request
    $updatedFirstName = $_POST['first_name'];
    $updatedLastName = $_POST['last_name'];
    $updatedAge = $_POST['age'];
    $updatedAddress = $_POST['address']; // Add address
    $updatedEmergencyContact = $_POST['emergency_contact']; // Add emergency contact

    // Construct the SQL query to update child details
    $sql = "UPDATE `child_profile` 
            SET `first_name` = '$updatedFirstName', 
                `last_name` = '$updatedLastName', 
                `age` = '$updatedAge',
                `address` = '$updatedAddress',
                `emergency_contact` = '$updatedEmergencyContact'
            WHERE `child_id` = $childId";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        http_response_code(200);
        echo json_encode(['message' => 'Child details updated successfully']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to update child details']);
    }
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request method']);
}

?>