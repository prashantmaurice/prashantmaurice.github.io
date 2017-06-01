<?php

    $data = file_get_contents('data/data.json');
    $jsonData = json_decode($data,true);
    //var_dump($jsonData);
    $projects = $jsonData['visualprojects'];
    $number = count($projects)-1;
    //echo $projects[0]['projectName'];
?>
<div id="projects-page">
    <div class="container-fluid" style="height:100%; padding:0px">
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
                    echo $temp;
                }
            ?>
        </ul>
    </div>
</div>
