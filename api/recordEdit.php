
<?php
include 'connection.php';
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$fname = $_POST["FirstName"];
$lname = $_POST["LastName"];
$htown = $_POST["HomeTown"];
$job = $_POST["Job"];
$age = $_POST["Age"];
$usrname = $_POST["UserName"];
$usrname = $_POST["UserName"];
$statusType = $_POST["statusType"];
$qryType = $_POST["qryType"];
// echo $fname.'-'.$lname.'-'.$htown.'-'.$job.'-'.$age.'-'.$usrname.'-'.$qryType;die;
if ($qryType == "EDIT") {
	$sql = "UPDATE student SET FirstName = '".$fname."' , LastName = '".$lname."', HomeTown =  '".$htown."', Job = '".$job."', Age =  '".$age."', UserName = '".$usrname."', status = '".$statusType."'  WHERE UserName = '".$usrname."' ";
	// echo "TEST : ".$sql;die();
	$result = mysqli_query($link,$sql);
	// echo $result;die();
	//$resp =($result);
	
	
	 if ($result) {
			$status['success'] = 'Successfully Updated';

        } else {
			$status['error'] = "Error: " . $sql . "<br>" . $link->error;
        }

	echo json_encode($status);	
}
	
	mysqli_close($link);
?>