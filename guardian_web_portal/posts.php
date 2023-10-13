<?php
session_start(); 
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin (not recommended for production)
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allow the specified HTTP methods
header("Access-Control-Allow-Headers: Content-Type"); // Allow the Content-Type header

// Include the database connection file
require_once('db.php');
// API endpoint for creating a new blog post with an image upload
    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $method = $_SERVER['REQUEST_METHOD'];
        //echo "test----".$method; die;
        switch($method)
        {
            case "GET": 
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[4]) && is_numeric($path[4]))
            {
                 echo "Get Single Row"; die;
            }   else {
                 //echo "return all Data"; die;
                $destination= $_SERVER['DOCUMENT_ROOT']."/guardian_web_portal/images/"."/";
                $allstatus= mysqli_query($conn, "SELECT * FROM posts ORDER BY post_id DESC");
                if(mysqli_num_rows($allstatus) > 0)
                {
                    while($row= mysqli_fetch_array($allstatus))
                    {
                        $json_array["statusdata"][] = array("id"=>$row['post_id'], 
                        "ptitle"=>$row["title"],
                        "pcontent"=>$row["content"],
                        "pimage"=>$row["imageUrl"]
                    );
                }
                echo json_encode($json_array["statusdata"]);
                return;
                } 
                else {
                    echo json_encode(["result"=>"please check the post data"]);
                    return;
               }
        }
          
           
    break;

    case "POST":
      if(isset($_FILES['pfile']))
      {      
        $ptitle = $_POST['ptitle'];
        $pcontent = $_POST['pcontent'];
        $pfile = time().$_FILES['pfile']['name'];
        $pfile_temp = $_FILES['pfile']['tmp_name'];
        $destination = $_SERVER['DOCUMENT_ROOT'].'/guardian_web_portal/images/'."/".$pfile;

        $result= mysqli_query($conn,"INSERT INTO posts (title, content, imageUrl)
        VALUES('$ptitle','$pcontent','$pfile')");

        if($result)
        { 
        move_uploaded_file($pfile_temp, $destination);
        echo json_encode(["Post Inserted Successfully"]);
        $user_id = $_GET['user_id'];
            return;
        } else{
        echo json_encode(["Post Not Inserted!"]);
            return;
        }

        }
    break;
}
}

?>