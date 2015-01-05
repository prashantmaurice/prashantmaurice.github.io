<?php
$mobileSite = (isset($_GET["mobilePhone"])? $_GET["mobilePhone"] : "");
?>


<div style="height: 120%;margin: 0 auto;display: none" id="mobileiframeWrapper" >
    <div id="phone-case">
        <iframe src="../projects/preburnMobile" id="androidProjectMobiframe" width="320" height="600" initial-scale="1"></iframe>
    </div>

</div>
<div>
    <iframe id="androidProjectVideo" width="560" height="315" src="" frameborder="0" allowfullscreen style="display: none"></iframe>
</div>

<div style="background-color: #fff; padding:20px;margin-top: 20px;">
    <div id="mobileDescCont" style="color:#31393c">Select a project from the list to display its details</div>
    <div id="apkfileLinkcont" style="display: none;background-color: #fff; padding:20px;padding-left:0px;margin-top: 20px; margin-bottom: 10px;width: inherit"><a>Download APK file</a></div>
</div>