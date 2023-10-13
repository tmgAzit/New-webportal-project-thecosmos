<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: *");
// header("Access-Control-Allow-Methods: *");

// // Include necessary files
// require_once('db.php');

// // Retrieve the postId from the GET request
// $userpostdata= json_decode(file_get_contents("php://input"));
//     $postId = $userpostdata->post_id;
// // Query the database to get comments for the specified post
// // $sql = "SELECT user_id, content FROM comments WHERE post_id = '$postId'";

// $res = "SELECT comments.user_id, comments.content
//         FROM comments
//         WHERE comments.post_id = '$postId'";

// $result = mysqli_query($conn, $res);
// if ($result) {
//     $comments = [];
//     while ($row = mysqli_fetch_assoc($result)) {
//          $json_array["comments"][] = array("user_id" => $row["user_id"],  "firstName" => $row["firstName"], "lastName" => $row["lastName"],
//         "content" => $row["content"]);
//     }

//     http_response_code(200);
//     echo json_encode($comments);
// } else {
//     http_response_code(500); // Internal Server Error status code
//     echo json_encode(["message" => "Error fetching comments"]);
// }
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

// Include necessary files
require_once('db.php');

// Retrieve the postId from the GET request
$post_id = $_GET['post_id'];

// Query the database to get comments for the specified post
$sql = "SELECT comment.user_id, comment.content, users.firstName, users.lastName
        FROM comment
        JOIN users ON comment.user_id = users.user_id
        WHERE comment.post_id = '$post_id'
        ORDER BY comment.comment_id ASC;";

$result = mysqli_query($conn, $sql);

if ($result) {
    $comments = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $comments[] = $row;
    }
    http_response_code(200);
    echo json_encode($comments);
} else {
    http_response_code(500); // Internal Server Error status code
    echo json_encode(["message" => "Error fetching comments"]);
}

?>
