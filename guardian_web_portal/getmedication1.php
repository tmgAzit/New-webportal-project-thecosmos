<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET"); // Allow only the GET method
header("Access-Control-Allow-Headers: Content-Type"); // Allow the Content-Type header

// Include the database connection file
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Check if a parent's last name is provided
    if (isset($_GET['parent_last_name'])) {
        $userLastName = $_GET['parent_last_name'];
        
        // Fetch medication records with child and parent details based on parent's last name
        $sql = "SELECT m.*, c.child_id, c.first_name AS child_name, p.first_name, p.last_name
                FROM `medication` m
                JOIN `child_profile` c ON m.child_id = c.child_id
                JOIN `family_profile` p ON c.child_id = p.child_id
                WHERE p.last_name = '$userLastName'";
    // } else {
    //     // Fetch all medication records for admin
    //     $sql = "SELECT m.*, c.child_id, c.first_name AS child_name, p.first_name, p.last_name
    //             FROM `medication` m
    //             JOIN `child_profile` c ON m.child_id = c.child_id
    //             JOIN `family_profile` p ON c.child_id = p.child_id";
    // }

    $result = mysqli_query($conn, $sql);

    if (!$result) {
        echo json_encode(['error' => 'Failed to fetch medication records']);
        return;
    }

    $medicationRecords = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $medicationRecords[] = $row;
    }

    // Send the JSON response with medication records
    echo json_encode($medicationRecords);
} else {
    // Invalid request method
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
}
?>
