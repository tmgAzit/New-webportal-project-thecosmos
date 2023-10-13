<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET, OPTIONS"); // Allow both GET and OPTIONS methods
header("Access-Control-Allow-Headers: Content-Type");

// Include the database connection file
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetch medication records from the database
    $sql = "SELECT medication.*, child_profile.child_id, child_profile.first_name 
            FROM `medication` 
            JOIN `child_profile` ON medication.child_id = child_profile.child_id ORDER BY medication.med_id DESC;";
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
