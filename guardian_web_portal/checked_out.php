<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Max-Age: 3600"); // Cache preflight requests for 1 hour

// Include the database connection file
require_once('db.php');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Respond to the preflight request
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the child ID from the request body
    $data = json_decode(file_get_contents("php://input"));

    if (empty($data->childId)) {
        echo json_encode(['error' => 'Child ID is required']);
        http_response_code(400);
        return;
    }

    $childId = $data->childId;

    // Check if the child with the given ID exists in the database
    $checkChildQuery = "SELECT * FROM `child_profile` WHERE `child_id` = $childId";
    $childResult = mysqli_query($conn, $checkChildQuery);

    if (mysqli_num_rows($childResult) === 0) {
        echo json_encode(['error' => 'Child not found']);
        http_response_code(404);
        return;
    }

    // Check if the child is already checked out
    $checkoutStatusQuery = "SELECT `status` FROM `checkin` WHERE `child_id` = $childId";
    $checkoutStatusResult = mysqli_query($conn, $checkoutStatusQuery);
    $checkoutStatus = mysqli_fetch_assoc($checkoutStatusResult);

    if ($checkoutStatus['status'] === 0) {
        // The child is already checked out
        echo json_encode(['error' => 'Child is already checked out']);
        http_response_code(400);
        return;
    }

    // Update the check-out status for the child
    $updateCheckoutQuery = "UPDATE `checkin` SET `status` = 0 WHERE `child_id` = $childId";
    $checkoutResult = mysqli_query($conn, $updateCheckoutQuery);

    if ($checkoutResult) {
        echo json_encode(['success' => 'Child has been checked out']);
    } else {
        echo json_encode(['error' => 'Failed to check out child']);
        http_response_code(500);
    }
} else {
    // Invalid request method
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
}
?>
