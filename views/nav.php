<!-- Navigation -->
<nav class="navbar navbar-fixed-top" role="navigation">
    <!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens -->
    <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav side-nav">
            <a href="index.php"><li id="side-logo">MAURICE</li></a>
            <li><a <?php echo (($activePage=="about")?'class="active"':'')?> href="index.php">ABOUT ME</a></li>
            <li><a <?php echo (($activePage=="visuals")?'class="active"':'')?> href="visuals.php">VISUALS</a></li>
            <li><a <?php echo (($activePage=="android")?'class="active"':'')?> href="android.php">ANDROID</a></li>
            <li><a <?php echo (($activePage=="code")?'class="active"':'')?> href="code.php">CODE</a></li>
            <li><a <?php echo (($activePage=="timeline")?'class="active"':'')?> href="timeline.php">TIMELINE</a></li>
            <li><a <?php echo (($activePage=="resume")?'class="active"':'')?> href="resume.php">RESUME</a></li>
            <li><a <?php echo (($activePage=="skills")?'class="active"':'')?> href="skills.php">SKILLS</a></li>
            <li><a <?php echo (($activePage=="showreel")?'class="active"':'')?> href="showreel.php">SHOWREEL</a></li>
            <li><a <?php echo (($activePage=="contact")?'class="active"':'')?> href="contact.php">CONTACT</a></li>
            <li>
                <div style="text-align: center">
                    <a class="btn btn-social-icon btn-facebook" target="_blank" href="https://www.facebook.com/sabertoothmaurice">
                        <i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon btn-linkedin" target="_blank" href="http://in.linkedin.com/in/prashantmaurice">
                        <i class="fa fa-linkedin"></i></a>
                    <a class="btn btn-social-icon btn-github" target="_blank" href="https://github.com/prashantmaurice/">
                        <i class="fa fa-github"></i></a>
                    <a class="btn btn-social-icon btn-bitbucket" target="_blank" href="https://bitbucket.org/PrashantMaurice">
                        <i class="fa fa-bitbucket"></i></a>
<!--                    <a class="btn btn-social-icon btn-twitter" target="_blank" href="https://twitter.com/MauricePrashant">-->
<!--                        <i class="fa fa-twitter"></i></a>-->
                </div>
            </li>
        </ul>
    </div>
    <!-- /.navbar-collapse -->
</nav>