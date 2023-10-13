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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the attendance data from the request body
    $data = json_decode(file_get_contents("php://input"));

    // Extract date and attendance data
    $date = $data->date;
    $attendanceData = (array) $data->attendance;

    foreach ($attendanceData as $childId => $status) {
        // Check if the child with the given ID exists in the database
        $checkChildQuery = "SELECT * FROM `child_profile` WHERE `child_id` = $childId";
        $childResult = mysqli_query($conn, $checkChildQuery);

        if (mysqli_num_rows($childResult) === 0) {
            echo json_encode(['error' => 'Child not found for ID: ' . $childId]);
            http_response_code(404);
            return;
        }

        // Insert a new attendance record for the child
        $insertAttendanceQuery = "INSERT INTO `attendance` (`child_id`, `date`, `status`) VALUES ($childId, '$date', $status)";
        $attendanceResult = mysqli_query($conn, $insertAttendanceQuery);

        if (!$attendanceResult) {
            echo json_encode(['error' => 'Failed to insert attendance for child ID: ' . $childId]);
            http_response_code(500);
            return;
        }
    }

    echo json_encode(['success' => 'Attendance inserted successfully']);
} else {
    // Invalid request method
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
}
?>
