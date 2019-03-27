
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
$statusType = $_POST["statusType"];
$qryType = $_POST["qryType"];

$sql_u = "SELECT * FROM student WHERE UserName='$usrname'";
$res_u = mysqli_query($link, $sql_u);
//$respdata = array('id' => $id, 'fname' => $fname, 'lname' => $lname , 'htown' => $htown, 'job' => $job, 'age' => $age, 'usrname' => $usrname, 'QueryType' => $qryType);
if ($fname == '' || $lname == '' || $htown == '' || $job == '' || $age == ''){
	$status['empty-fields'] = 'Some Fields Are Empty';
}
else{
	
if($qryType == "INSERT") {
	if (mysqli_num_rows($res_u) > 0) {
  	  $status['error'] = "UserName Already Taken ... "; 	
  	}
	else{
		$sql = "INSERT INTO student (FirstName, LastName, HomeTown, Job, Age, UserName, status) VALUES  ('".$fname."', '".$lname."', '".$htown."', '".$job."', '".$age."', '".$usrname."',  '".$statusType."')";
        $result = mysqli_query($link,$sql);
		
        if ($result) {
			$status['success'] = 'Successfully save';

        } else {
			$status['error'] = "Error: " . $sql . "<br>" . $link->error;
        }
			

		} 
	echo json_encode($status);
    }
}
mysqli_close($link);
?>