
<?php
include 'connection.php';
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$usrname = $_POST["UserName"];
$qryType = $_POST["qryType"];
if ($qryType == "SEARCH") {
	$sql = "SELECT * FROM student WHERE UserName='$usrname' ";
	
	$result = mysqli_query($link,$sql);
	$resp = mysqli_fetch_assoc($result);
		
	echo json_encode([$resp]);
}
	
	mysqli_close($link);
?>