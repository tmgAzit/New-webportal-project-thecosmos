<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Allow requests from the frontend origin (replace with your frontend's URL)
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

// Other headers
header("Content-Type: application/json");

// Include the database connection file 
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetch events from the database (modify SQL query as needed)
    $query = "SELECT * FROM bookings";
    $result = mysqli_query($conn, $query);

    if ($result) {
        $events = array();

        while ($row = mysqli_fetch_assoc($result)) {
            $events[] = $row;
        }

        echo json_encode($events);
    } else {
        echo json_encode(['error' => 'Failed to fetch events']);
        http_response_code(500);
    }
} else {
    // Invalid request method
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
}
?>