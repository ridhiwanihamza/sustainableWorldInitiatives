<?php
$con = mysqli_connect('localhost','root','','youtubeuserdata');

if($con){
    echo "Connection Successfully";
}else{
    echo "No connection";
}

mysqli_select_db($con,'youtubeuserdata');

$user = $_POST['user'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$comments = $_POST['comments'];

$query = "insert into userinfodata (user,email,mobile,comment) values('$user','$email','$mobile','$comments')";

mysqli_query($con,$query);
header("location:index.php"); 
?>