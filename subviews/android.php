<?php
    $data = file_get_contents('data/data.json');
    $jsonData = json_decode($data,true);
    $projectToDisplay = (isset($_GET["project"])? $_GET["project"] : -1);
    $projects = $jsonData['androidprojects'];
    $number = count($projects)-1;
//    echo $projectToDisplay;
    $projectId = 4;//default
    for ($x=1; $x<=$number; $x++) {
        if($projects[$x]['code'] == $projectToDisplay){
            $projectId = $x;
            break;
        }
    }
?>

<div style="background-color: #fff; padding:20px;" class="container-fluid">
    <div class="row">
        <div style="height: 120%;margin: 0 auto;display: <?php echo (($projects[$projectId]['link']!="")? "visible" : "none");?>" id="mobileiframeWrapper" class="col-lg-8">
            <div id="phone-case" style="width: 356px; height: 700px">
                <iframe src="<?php echo $projects[$projectId]['link']?>" id="androidProjectMobiframe" width="320" height="560" initial-scale="1"></iframe>
            </div>
        </div>
    <!--    <div style="height: 120%;margin: 0 auto;display:visible;" id="mobileiframeWrapper" >-->
    <!--        <div id="phone-case">-->
    <!--            <iframe width="560" height="315" src="--><?php //echo $projects[$projectId]['link']; ?><!--" frameborder="0" allowfullscreen  data-video=""></iframe>-->
    <!--        </div>-->
    <!--    </div>-->
        <div style="display: <?php echo (($projects[$projectId]['video']!="")? "visible" : "none");?>" class="col-lg-12">
            <iframe width="560" height="315" src="<?php echo $projects[$projectId]['video']?>" frameborder="0" allowfullscreen></iframe>
        </div>

    <!--    <div id="mobileDescCont" style="color:#31393c">Select a project from the list to display its details</div>-->
        <div id="apkfileLinkcont" class="col-lg-12" style="padding:20px;">
            <a style="display: <?php echo (($projects[$projectId]['apk']!="")? "visible" : "none");?>;"
               href="<?php echo $projects[$projectId]['apk'] ?>">Download APK file</a><br>
            <a style="display: <?php echo (isset($projects[$projectId]['git'])?'visible':'none'); ?>"
               href="<?php echo $projects[$projectId]['git'] ?>"
               target="_blank" >Watch Complete Project in GitHub</a>
        </div>
    </div>
</div>