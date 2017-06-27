<?php
include "file_lib.php";
require "src/Autoloader.php";
Predis\Autoloader::register();
function procmsg($topic,$msg){
     echo $msg;
     exit(0);
}

function get_status($command){
    $client = new Predis\Client();
    $client->set($command, '1');
    sscanf($command,"command:%s",$status);
    $status=str_replace("@@>","_status",$status);
    for($i=0;$i<5;$i++){
        sleep(1);
        $value = $client->get($command);
        //echo  $value;
        if($value=="0"){
            $value = $client->get($status);
            echo $value;
            return 0;
        }

    }
    echo "time out";
}
$command = $_POST["command"];
if ($command=="EDFA_MPD_status"){
    get_status("command:IMPD@@>");
}

elseif ($command=="Misc_MPD_status"){
    get_status("command:PMPD@@>");
}


elseif ($command=="Raman_MPD_status"){
    get_status("command:VER@@>");
}


elseif($command=="get_conf"){
    $file_string=get_string_file("../pos.conf");
    echo $file_string;
}
elseif($command=="pub"){
    $mqtt = new phpMQTT("181.215.100.177", 1883, "id"); //Change client name to something unique
    if ($mqtt->connect()) {
	$mqtt->publish("topic001","Hello World! at ",0);
	$mqtt->close();
    }
    echo "return status";
}
elseif($command=="add_user"){
   // echo $_POST["name"];
    $file_string=get_string_file("test.txt");
    $file_string.="user ".$_POST["name"]."\n";
    write_file("test.txt",$file_string);
    echo $_POST["name"];
}
?>
