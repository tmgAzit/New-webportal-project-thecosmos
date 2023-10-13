<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Include the database connection file
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (!isset($_GET['childId'])) {
        http_response_code(400);
        echo json_encode(['error' => 'Child ID is required']);
        return;
    }

    $childId = $_GET['childId'];

    // Query the database to get the check-in status for the child
    $checkinQuery = "SELECT `status` FROM `checkin` WHERE `child_id` = $childId";
    $checkinResult = mysqli_query($conn, $checkinQuery);

    if (!$checkinResult) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to fetch check-in status']);
        return;
    }

    $row = mysqli_fetch_assoc($checkinResult);
    $status = isset($row['status']) ? $row['status'] : null;

    // Return the check-in status as JSON
    echo json_encode(['status' => $status]);
} else {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
}
?>
