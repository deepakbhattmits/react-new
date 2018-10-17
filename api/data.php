<?php 

include 'connection.php';

if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$statusType = 'active';

$sql = "SELECT * FROM student WHERE status = '".$statusType."' ";
$result = mysqli_query($link,$sql);
while($rows = mysqli_fetch_assoc($result)){
	$resp[] = array(
							'id' => $rows['id'], 
							'FirstName' => $rows['FirstName'], 
							'LastName'=> $rows['LastName'], 
							'HomeTown'=> $rows['HomeTown'],
							'Job'=> $rows['Job'],
							'Age' => $rows['Age'],
							"UserName" => $rows['UserName']
						);
}
// print_r($resp); die();
echo json_encode($resp);
mysqli_close($link);

