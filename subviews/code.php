<?php
$data = file_get_contents('data/data.json');
$jsonData = json_decode($data,true);
$projects = $jsonData['codeprojects'];
$number = count($projects)-1;

$projectcode = (isset($_GET["project"])? $_GET["project"] : "");

for ($x=1; $x<=$number; $x++) {
    $link = "";
    if ($projects[$x]['code'] == $projectcode) {
        $link = $projects[$x]['link'];
        break;
    }
}
?>

<div style="" id="iframeWrapper">
    <iframe id="scaled-frame" src="<?php echo $link; ?>" width="100%" height="100%"></iframe>
</div>