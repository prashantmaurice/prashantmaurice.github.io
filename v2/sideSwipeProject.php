<?php
    $data = file_get_contents('data.json');
    $jsonData = json_decode($data,true);
    //var_dump($jsonData);
    $projects = $jsonData['visualprojects'];
    $number = count($projects)-1;
    //echo $projects[0]['projectName'];
?>
<div id="sideswipe-page" style="height: 100%">
    <div class="container-fluid" style="height:100%; padding:0px;">
        <!-- Page Heading -->
        <div class="sideswipe-heading">
            <?php echo $projects[$_GET["projectId"]]['projectName']; ?>
            <span style="font-size:12px;color:#b2b6b7"><?php echo $projects[$_GET["projectId"]]['role']; ?></span>
        </div>
        <div class="sideswipe-postbody" style="height:100%;">
            <div class="col-lg-8" style="overflow-y: scroll;height:100%;padding: 0px; padding-bottom: 100px">
                <div class="row" style="margin:auto">
                    <!--<iframe width="853" height="480" src="//www.youtube.com/embed/bZSQ10xjVe0" frameborder="0" allowfullscreen ></iframe>--->
                    <!--<div class="video-container" style="width:100%;">-->
                        <!--<iframe id="player" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/bZSQ10xjVe0?rel=0&amp;autoplay=0&amp;loop=1&amp;controls=0&amp;start=0&amp;hd720=1&amp;autohide=1&amp;wmode=opaque&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fwww.wethechangemission.org/maurice"></iframe>-->
                    <!--</div>-->
                </div>
                <?php
                if($projects[$_GET["projectId"]]['videoLink']!=""){
                    //echo '<h3>Video</h3>';
                    //echo '<hr>';
                    echo '<div class="video-container" style="width:100%;">';
                    echo '<iframe width="560" height="315" src="'.$projects[$_GET["projectId"]]['videoLink'].'" frameborder="0" allowfullscreen></iframe>';
                    echo '</div>';
                }
                echo '<h3>Gallery</h3>';
                echo '<hr>';
                for ($x=1; $x<=$projects[$_GET["projectId"]]['images']; $x++) {
                    echo '<img class="sideswipe-images" src="img/projects/web'.$_GET["projectId"].'_'.$x.'.png" alt="The official HTML5 Icon">';
                }

                ?>
            </div>
            <div class="col-lg-4" style="background-color: #ebedf2; height: 100%">
                Description<br>
                <?php echo $projects[$_GET["projectId"]]['description'] ?>
            </div>

        </div>
    </div>
</div>