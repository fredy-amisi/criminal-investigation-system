<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: POST");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "Abi";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$rawPostData = file_get_contents("php://input");

// Debugging: Log raw POST data
error_log("Raw POST data: " . $rawPostData);

$data = json_decode($rawPostData, true);

// Debugging: Check if json_decode was successful
if (json_last_error() !== JSON_ERROR_NONE) {
    error_log("JSON decode error: " . json_last_error_msg());
    die(json_encode(array("status" => "error", "message" => "Invalid JSON data received")));
}

// Debugging lines to check if data is received
if (is_null($data)) {
    die(json_encode(array("status" => "error", "message" => "No data received or JSON is invalid")));
}

if (!isset($data['crimeType']) || !isset($data['location']) || !isset($data['date']) || !isset($data['description'])) {
    die(json_encode(array("status" => "error", "message" => "Incomplete data received")));
}

$crimeType = $data['crimeType'];
$location = $data['location'];
$date = $data['date'];
$description = $data['description'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO crimerecords (crimeType, location, date, description) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $crimeType, $location, $date, $description);

if ($stmt->execute()) {
    $response = array("status" => "success", "message" => "Crime report added successfully");
} else {
    $response = array("status" => "error", "message" => "Error adding crime report: " . $stmt->error);
}

echo json_encode($response);

$stmt->close();
$conn->close();
?>
