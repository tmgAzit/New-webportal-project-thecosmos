<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
include_once("core.php");
// Include necessary files
require_once('db.php');
$userpostdata= json_decode(file_get_contents("php://input"));
$post_id = $userpostdata->post_id;
$user_id = $userpostdata->user_id;
$content = $userpostdata->content;


// Insert the comment into the comments table
$insertCommentQuery = "INSERT INTO comment (`content`, `post_id`, `user_id`) VALUES ('$content', '$post_id', '$user_id')";

if (mysqli_query($conn, $insertCommentQuery)) {
    // Comment inserted successfully
    http_response_code(200);
    $newCommentId = mysqli_insert_id($conn);
    echo json_encode(['id' => $newCommentId, 'content' => $content]);
} else {
    // Handle the case where the comment insertion fails
    http_response_code(500); // Internal Server Error status code
    echo json_encode(["message" => "Error adding comment"]);
}
?>
