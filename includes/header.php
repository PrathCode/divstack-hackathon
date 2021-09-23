<!DOCTYPE html>

<html lang="en">
  <head>
  <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

        <!-- CSS -->
        <link rel="stylesheet" href="public/css/index.css">
        <link rel="stylesheet" href="public/css/contact.css">
        <link rel="stylesheet" href="public/css/course.css">

        <!-- Font Awesome -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">

        <!-- Google Captcha -->
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>

    <title>Document</title>
  </head>
  <body>
    <div>
      <nav class="navbar sticky-top navbar-expand-lg custom-navbar">
        <div class="container-fluid cust-navbar-div">
          <a class="navbar-brand" href="#">
            <img
              src="public/images/logo.png"
              alt="a"
              width="250"
              height="70"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav w-50">
              <a class="nav-link custom-nav-links" href="home.php">Home</a>
              <a class="nav-link custom-nav-links" href="coursedetails.php">Course</a>
              <a class="nav-link custom-nav-links" href="#">Pricing</a>
              
              <button type="button" class="btn btn-warning" id="signUp" onclick="myFunction()">
                <a href="login.php" style="text-decoration: none; color: black;">Signin</a>
              </button>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
    <script>
      function myfunction(){

      }
    </script>
  </body>
</html>
