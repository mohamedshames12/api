<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
   
    include "DbConnect.php";
    $objDb = new DbConnect;
    $conn = $objDb->connect();
    
    $method = $_SERVER['REQUEST_METHOD'];
    switch($method) {
        case 'POST':
            $user = json_decode( file_get_contents('php://input') );
            $sql = 'INSERT INTO users(id, name, email, password) VALUES(null, :name, :email,:password)';
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
            if($stmt->execute()){
                $response = ['status' => 1, 'message' => 'created email successfully!'];
            }else{
                $response = ['status' => 0, 'message' => 'Failed to create email!'];
            };
            echo json_encode($response);
            break;
    }

?>