<?php
session_start();
error_reporting(0);
include('includes/dbconnection.php');

if(isset($_POST['login'])) 
  {
    $email=$_POST['email'];
    $password=md5($_POST['password']);
    $sql ="SELECT ID FROM tbluser WHERE Email=:email and Password=:password";
    $query=$dbh->prepare($sql);
    $query->bindParam(':email',$email,PDO::PARAM_STR);
    $query-> bindParam(':password', $password, PDO::PARAM_STR);
    $query-> execute();
    $results=$query->fetchAll(PDO::FETCH_OBJ);
    if($query->rowCount() > 0)
    {
      foreach ($results as $result) {
        $_SESSION['elearning']=$result->ID;
      }
      $_SESSION['login']=$_POST['email'];
      echo "<script type='text/javascript'> document.location ='AfterLogin/home2.php'; </script>";
      } else{
        echo "<script>alert('Invalid Details');</script>";
      }
    }
 if($_POST['submit'])
{
		$fname=$_POST['fname'];
		
		$email=$_POST['email'];
		$password=md5($_POST['password']);
		$ret="select Email from tbluser where Email=:email";
		$query= $dbh -> prepare($ret);
		$query-> bindParam(':email', $email, PDO::PARAM_STR);
		$query-> execute();
		$results = $query -> fetchAll(PDO::FETCH_OBJ);
	if($query -> rowCount() == 0)
	{
	$sql="Insert Into tbluser(FullName,Email,Password)Values(:fname,:email,:password)";
	$query = $dbh->prepare($sql);
	$query->bindParam(':fname',$fname,PDO::PARAM_STR);
	$query->bindParam(':email',$email,PDO::PARAM_STR);

	$query->bindParam(':password',$password,PDO::PARAM_STR);
	$query->execute();
	$lastInsertId = $dbh->lastInsertId();
	if($lastInsertId)
	{
	
	echo "<script>alert('You have signup  Scuccessfully');</script>";
	}
	else
	{
	
	echo "<script>alert('Something went wrong.Please try again');</script>";
	}
	}
	 else
	{
	
	echo "<script>alert('Email-id already exist. Please try again');</script>";
	}
}

?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script
      src="https://kit.fontawesome.com/64d58efce2.js"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="public/css/login.css" />
    <title>Sign in & Sign up Form</title>
  </head>
  <body>
    <div class="container">
      <div class="forms-container">
        <div class="signin-signup">

          <form action="#" class="sign-in-form" method="post" name="login">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="email" class="form-control" placeholder="Email" required="true" name="email">
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" class="form-control" placeholder="Password" name="password" required="true">
            </div>
            <input type="submit" value="Sign-IN" class="btn solid" name="login" />
            <a href="home.php" style="text-decoration: none; color: #00587a">back to home</a>
             
          </form>


          <form action="" class="sign-up-form"  method="post">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input id="fname" type="text" class="form-control" placeholder="Full Name" name="fname" required="true">
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input id="email" type="email" class="form-control" placeholder="Email" name="email" required="true">
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
			        <input id="password" type="password" class="form-control" placeholder="Password" name="password" required="true">
            </div>
            <input type="submit" class="btn btn-primary" value="Register" name="submit">
            <a href="home.php" style="text-decoration: none; color: #00587a">back to home</a>
              
          </form>
        </div>
      </div>

	    <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Create an account and start your web development journey with us.
            </p>
            <button class="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="public/images/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="public/images/register.svg" class="image" alt="" />
        </div>
      </div>
      
    </div>

    <script src="public/js/login&register.js"></script>

	 
  </body>
</html>