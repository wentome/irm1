<?php
    function get_string_file($file_name){
        $fd=fopen($file_name,"r");
        $file_string=fread($fd,filesize($file_name));
        fclose($fd);
        return $file_string;
    }
    function display_file($file_name){
        $fd=fopen($file_name,"r");
        while(!feof($fd)){
            echo fgets($fd)."<br>";
	}
	fclose($fd);
    }
    function write_file($file_name,$file_string){
        $fd=fopen($file_name,"w");
        fwrite($fd,$file_string);
        fclose($fd);
    }
    function replace_file($file_name,$pattern,$replace){
        $file_string=get_string_file($file_name);
        $new_file_string=preg_filter($pattern,$replace,$file_string);
        write_file($file_name,$new_file_string);
    }
    //display_file("aclfile.conf");
    //write_file("aclfile.conf","new file string");
   // display_file("test.txt");
   // $pattern = array('/name(.+)/', '/passwd(.+)/','/date(.+)/');
   // date_default_timezone_set("Asia/Shanghai");
   // $now_data=date("Y/m/d-h:i:s  a");
   // $replace = array('name pi', 'passwd pi123',"date $now_data");
   // replace_file("test.txt",$pattern,$replace);

?>
