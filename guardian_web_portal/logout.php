<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include the database connection file
require_once('db.php');

// Start or resume the session
session_start();

// Destroy the session
session_destroy();

// Send a response indicating successful logout
echo json_encode(['message' => 'You have been logged out.']);

?>
