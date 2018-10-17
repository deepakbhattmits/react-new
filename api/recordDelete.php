
<?php
include 'connection.php';
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$usrname = $_POST["UserName"];
$statusType = $_POST["statusType"];
$qryType = $_POST["qryType"];
// echo $usrname.'-'.$qryType;die;
if ($qryType == "DELETE") {
	$sql = "UPDATE student SET status = '".$statusType."' WHERE UserName = '".$usrname."' ";
	// UPDATE student SET status = 'active' WHERE  status = 'deactive'
	// echo "TEST : ".$sql;die();
	$result = mysqli_query($link,$sql);
	// echo $result;die();
	//$resp =($result);
	
	
	 if ($result) {
			$status['success'] = 'Record Deleted';

        } else {
			$status['error'] = "Error: " . $sql . "<br>" . $link->error;
        }

	echo json_encode($status);	
}
	
	mysqli_close($link);
?>