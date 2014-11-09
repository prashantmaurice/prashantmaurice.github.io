<?php
    $data = file_get_contents('data.json');
    $jsonData = json_decode($data,true);
    //var_dump($jsonData);
    $projects = $jsonData['androidprojects'];
    $number = count($projects)-1;
    //echo $projects[0]['projectName'];
?>
<div id="androidprojects-page">
    <div class="container-fluid" style="height:100%; padding:0px">
        <div class="row" style="height:100%; margin:0px">
            <div class="col-lg-3" style="height:100%; padding:0px">
                <ul id="ProjectsList">
                    <?php
                        for ($x=1; $x<=$number; $x++) {
                            echo '<li class="projectslist_li androidProject" data-link="'.$projects[$x]['link'].'" data-video="'.$projects[$x]['video'].'">';
                    echo '<h5>'.$projects[$x]['projectName'].'</h5><h6>'.$projects[$x]['time'].'</h6>';
                    echo '<br>'.$projects[$x]['oneliner'].'</li>';
                    }
                    ?>
                </ul>
            </div>
            <div class="col-lg-9" style=" padding:10px; height: 100%">
                <!--<div id="wrapper"><iframe id="scaled-frame" src="http://preburn.in"></iframe></div>-->
                <div>
                    <iframe id="androidProjectVideo" width="560" height="315" src="" frameborder="0" allowfullscreen style="display: none"></iframe>
                </div>
                <div style="height: 120%" id="mobileiframeWrapper" >
                    <div id="phone-case">
                        <iframe src="./projects/preburnMobile/" id="androidProjectMobiframe" width="320" height="600" initial-scale="1"></iframe>
                    </div>

                </div>
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
