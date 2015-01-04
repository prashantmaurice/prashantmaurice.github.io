<?php
    $data = file_get_contents('data.json');
    $jsonData = json_decode($data,true);
    //var_dump($jsonData);
    $projects = $jsonData['activity'];
    $number = count($projects);
    //echo count($projects);
?>
<div id="activity-page" style="min-height: 100%">
    <div class="container-fluid" style="height:100%;background-color: #394346;">
        <ul class="cbp_tmtimeline">
            <?php
            $months = ['jan','feb','mar','apr','may','jun','july','aug','sep','oct','nov','dec'];
            for ($x=0; $x<$number; $x++) {
                $temp_time = $projects[$x]['time'];
                $date = explode("-",$temp_time);
                if (!isset($projects[$x]['head'])) $header = "";
                else $header = '<h2>'.$projects[$x]['head'].'</h2>';
//                if ($projects[$x]['head']=="") $header = "";
                $temp = '<li>
                            <time class="cbp_tmtime" datetime="'.$temp_time.'">
                                <span>'.(int)$date[1].' '.$months[(int)$date[2]-1].' '.$date[0].'</span>
                            </time>
                            <div class="cbp_tmicon"></div>
                            <div class="cbp_tmlabel" data-link="'.$projects[$x]['link'].'">
                                '.$header.'
                                <p>'.$projects[$x]['body'].'</p>
                            </div>
                        </li>';
                echo $temp;
            }
            ?>
        </ul>
    </div>
</div>