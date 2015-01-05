<?php
    $data = file_get_contents('data/data.json');
    $jsonData = json_decode($data,true);
    $projectToDisplay = (isset($_GET["project"])? $_GET["project"] : -1);
    $projects = $jsonData['androidprojects'];
    $number = count($projects)-1;
    //echo $projects[0]['projectName'];
//    echo $projectToDisplay;

    $projectId = 4;//default
    for ($x=1; $x<=$number; $x++) {
        if($projects[$x]['code'] == $projectToDisplay){
            $projectId = $x;
            break;
        }
    }


?>

<div id="androidprojects-page">
    <div class="container-fluid" style="height:100%; padding:0px">
        <div class="row" style="height:100%; margin:0px">
            <div class="col-lg-3" style="height:100%; padding:0px">
                <ul id="ProjectsList">
                    <?php
                        for ($x=1; $x<=$number; $x++) {
                            if(!isset($projects[$x]['time'])) $var_time = "";
                            else $var_time = $projects[$x]['time'];
                            echo '
                            <a href="android.php?project='.$projects[$x]['code'].'"><li class="projectslist_li '.(($x==$projectId)?"active":"").' androidProject"
                            data-apk="'.$projects[$x]['apk'].'"
                            data-desc="'.$projects[$x]['description'].'" data-link="'.$projects[$x]['link'].'" data-video="'.$projects[$x]['video'].'" data-subnav="project'.$x.'">
                            <h4>'.$projects[$x]['projectName'].'</h4><h6>'.$var_time.'</h6><br><h5>'.$projects[$x]['oneliner'].'<h5></li></a>';
                        }
                    ?>
                </ul>
            </div>
            <div class="col-lg-9" style=" padding:10px; height: 100%">
                <?php include('subviews/android.php'); ?>
            </div>
        </div>
        <ul id="Grid" style="padding:0">
            <?php
               for ($x=1; $x<=$number; $x++) {
                    $temp='';
                    $temp .= '<li class="mix web" data-name="Abby" data-value="'.$x.'"  data-num="5">';
            $temp .= '<div style="position:relative"><div class="projects_overlay">';
            $temp .= '<div  align="center"><div  class="project_expandicon col-md-12" style="float:inherit"></div></div>';
            $temp .= '<div class="project_name">'.$projects[$x]['projectName'].'</div>';
            $temp .= '<div class="project_desc">'.$projects[$x]['role'].'</div>';
            $temp .= '</div><img  class="media-object img-responsive" src="img/projects/dpm_project'.$x.'.jpg"></div>';
            $temp .= '</li>';
            //echo $temp;
            }
            ?>
        </ul>
    </div>
</div>
