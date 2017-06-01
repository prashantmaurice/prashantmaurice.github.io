<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Maurice Portfolio</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/bootstrap-social.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="font-awesome-4.1.0/css/font-awesome.min.css" rel="stylesheet" type="text/css">
    <link href='http://fonts.googleapis.com/css?family=Sintony' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Fjalla+One' rel='stylesheet' type='text/css'>
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div id="wrapper">
    <?php $activePage = "showreel";//useful for nav color code?>
    <?php include('views/nav.php'); ?>
    <div id="page-wrapper">
        <?php include('views/showreelpage.php'); ?>
    </div>
    <div id="sideswipe-shadow"></div>
    <div id="sideswipe-content">
        <div id="sideswipe">
        </div>
    </div>
    <div style="overflow: hidden; width:100%; height:4px; top:0px; position: fixed;left:0px;">
        <div id="loadingCont"></div>
    </div>

    <!-- /#page-wrapper -->
</div>
<!-- /#wrapper -->
<!-- lazy load scripts -->
<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<!--<script src="http://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js"></script>-->
<script src="js/main.js"></script>
</body>
</html>
