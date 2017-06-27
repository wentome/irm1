
function MPD_status(){
    update_MPD();
    //ajax_send("php/irm1.php","EDFA_MPD_status","data","update_MPD(data)");
}


function Misc_MPD_status(){
    update_Misc_MPD();
    //ajax_send("php/irm1.php","Misc_MPD_status","data","update_Misc_MPD(data)");
}


function Raman_MPD_status(){
    update_Raman_MPD();
    //ajax_send("php/irm1.php","Raman_MPD_status","data","update_Raman_MPD(data)");
}


var myVar;
function scan_action(){
    //$("#txt_display").text("scan");
    if ($("#scan_BT").is(':checked')) {
        //alert("scan_work");
	myVar=setInterval(function(){myTimer()},3000);

    }else{
        //alert("stop_sccan");
	clearInterval(myVar);
    }
}


function myTimer()
{
    var d=new Date();
    var t=d.toLocaleTimeString();
    $("#time_display").text(t);

}


function update_MPD(data){
    var EDFA_index=1,Raman_index=1,Misc_index=1;
    for(member in conf){
	if(member==("Raman_MPD"+String(Raman_index))){
            Raman_index++;
            draw_01(member,member,60,"red");
        }
        else if(member==("EDFA_MPD"+String(EDFA_index))){
	    EDFA_index++;
	    draw_01(member,member,60,"green");
	}
        else if(member==("Misc_MPD"+String(Misc_index))){
            Misc_index++;
            draw_01(member,member,60,"blue");
        }

    }
}

function update_Misc_MPD(data){
    var i=1;
    for(member in conf){
        if(member==("Misc_MPD"+String(i))){
            i++;
            draw_01(member,"Misc",50,);
            //$("#txt_display").text(conf[member].per);
        }
    }
}

function update_Raman_MPD(data){
    var i=1;
    for(member in conf){
        if(member==("Raman_MPD"+String(i))){
            i++;
            draw_01(ctx,member,member,conf[member].per,conf[member].x,conf[member].y);
            //$("#txt_display").text(conf[member].per);
        }
    }
}

function get_conf(data){
    var list=data.match(/.+/g);
    for(var i=0;i<list.length;i++){
        var member=list[i].split(":");
	var img=ctx.getImageData(member[2],member[3],member[4],member[5]);
	conf[member[0]]={"type":member[1],"x":member[2],"y":member[3],"w":member[4],"h":member[5],"img":img};   
    }
}
