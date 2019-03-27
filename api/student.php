
<?php
include 'connection.php';
if (!$link) {
    die('Could not connect: ' . mysqli_error());
}
$sql = "SELECT * FROM student";
$result = mysqli_query($link,$sql);
while($row = mysqli_fetch_array($result)){
	$all_data[] = $row['FirstName'];
}
/* $sql1 = 'SELECT * FROM product';
$result1 = mysqli_query($link,$sql1);
while($row = mysqli_fetch_array($result1)){

	$all_data1[] = array(
							'id' => $row['id'], 
							'name' => $row['product-name'], 
							'price'=> $row['product-price'], 
							'desc'=> $row['product-description'],
							'stock'=> $row['stock']
						);
} */
// $resp = array('student' => $all_data, 'product' => $all_data1 );
$resp = array('student' => $all_data);
echo json_encode($resp);
mysqli_close($link);
?>