function get_ctx(){
    var c=document.getElementById("myCanvas");
    return c.getContext("2d"); 
}
function draw_img(ctx){
    var img=new Image();
    img.src='irm1.png';
    //img.onload = function() {
    ctx.drawImage(img,10,10);
    //ctx.fillRect(200,200,100,100);
    //}
}

function draw_back_img(){
    for(member in conf){
        ctx.putImageData(conf[member].img,conf[member].x,conf[member].y);
    }
}
function draw_01(obj,value,per,color){
    //debugger;
    ctx.save();
    var w1=7;
    var h1=50;
    //ctx.fillRect(100,100,100,100);
    //ctx.putImageData(conf[obj].img,conf[obj].x,conf[obj].y);
    if(color=="red"){
        ctx.fillStyle="#ff0000";
    }else if(color=="green"){
        ctx.fillStyle="#00ff00";
    }else if(color=="blue"){
	ctx.fillStyle="#0000ff";
    }
    ctx.font="10px Arial";
    if(conf[obj].type=="A"){
	//ctx.strokeRect(Number(conf[obj].x), Number(conf[obj].y), Number(conf[obj].w), Number(conf[obj].h));
        ctx.fillText(value,Number(conf[obj].x)+Number(conf[obj].w)/3, Number(conf[obj].y)+Number(conf[obj].h)-h1-2);
        ctx.strokeRect(  Number(conf[obj].x)+(Number(conf[obj].w)-w1)/2,  Number(conf[obj].y)+Number(conf[obj].h)-h1, w1, h1);
        ctx.fillRect( Number(conf[obj].x)+(Number(conf[obj].w)-w1)/2, Number(conf[obj].y)+Number(conf[obj].h)-(Number(per))*h1/100, w1, Number(per)*h1/100);
    }else if(conf[obj].type=="B"){
        //ctx.strokeRect(Number(conf[obj].x), Number(conf[obj].y), Number(conf[obj].w), Number(conf[obj].h));
        ctx.fillText(value,Number(conf[obj].x), Number(conf[obj].y)+(Number(conf[obj].h)-w1)/2-2);
        ctx.strokeRect(    Number(conf[obj].x), Number(conf[obj].y)+(Number(conf[obj].h)-w1)/2, h1, w1);
        ctx.fillRect(      Number(conf[obj].x), Number(conf[obj].y)+(Number(conf[obj].h)-w1)/2, per*h1/100, w1);
    }
    ctx.restore();
}

