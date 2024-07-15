<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// CORS headers
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
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

// Handle GET request to fetch crime records
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $sql = "SELECT * FROM CrimeRecords";
    $result = mysqli_query($conn, $sql);

    $crimeRecords = array();
    if (mysqli_num_rows($result) > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            $crimeRecords[] = $row;
        }
        echo json_encode($crimeRecords);
    } else {
        echo json_encode([]);
    }
}

// Close database connection
mysqli_close($conn);
?>
