

function click_action(name,func){
    $(document).ready(function(){
        $("#"+name).click(function(){
        eval(func);
        })
    })
}


function ajax_send(target,command,data,func){
	$.post(target,
	    {
		command:command,
		data:data
	    },
	function(data,status){
	    eval(func);
	});

}
