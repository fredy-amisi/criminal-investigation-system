<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Abi";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle GET request to fetch suspects
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM Suspects";
    $result = mysqli_query($conn, $sql);

    $suspects = array();
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $suspects[] = $row;
        }
        echo json_encode($suspects);
    } else {
        echo json_encode([]);
    }
}

// Handle DELETE request to delete suspect by ID
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    parse_str(file_get_contents("php://input"), $_DELETE);

    $suspectId = $_DELETE['id'];

    $sql = "DELETE FROM Suspects WHERE id = '$suspectId'";

    if (mysqli_query($conn, $sql)) {
        echo json_encode(["message" => "Suspect deleted successfully"]);
    } else {
        echo json_encode(["error" => mysqli_error($conn)]);
    }
}

// Close database connection
mysqli_close($conn);
?>
