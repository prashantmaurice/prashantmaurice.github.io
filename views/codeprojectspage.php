<?php
    $data = file_get_contents('data/data.json');
    $jsonData = json_decode($data,true);
    $projects = $jsonData['codeprojects'];
    $number = count($projects)-1;

    $projectcode = (isset($_GET["project"])? $_GET["project"] : "");
    $projectId = 3;//default
    for ($x=1; $x<=$number; $x++) {
        $link = "";
        if ($projects[$x]['code'] == $projectcode) {
            $link = $projects[$x]['link'];
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
                            echo '<li class="projectslist_li '.(($x==$projectId)?"active":"").' codeProject" data-link="'.$projects[$x]['link'].'">';
                            echo '<h4>'.$projects[$x]['projectName'].'</h4><h6>'.$projects[$x]['time'].'</h6><br><h5>'.$projects[$x]['description'].'<h5>';
                            echo '</li>';
                        }
                    ?>
                </ul>
            </div>
            <div class="col-lg-9" style=" padding:10px" id="codeRightCont">
                <div id="iframeWrapper"><iframe id="scaled-frame" src="<?php echo $projects[$projectId]['link'];?>"></iframe></div>
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
