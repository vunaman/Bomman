// JavaScript Document

$(document).ready(function(){
	$("#div1").click(SCROLL);
});

function SCROLL(){
	$("#div3").replaceWith('<div id="main"></div>');
	$("#main").append('<div id="scroll"></div>');
	$('body').append('<div id="line"></div>');
	$('body').append('<audio id="audio" autoplay="autoplay"></audio>');
	$('#audio').append('<source src="../Sound/My sound 2.mp3" type="audio/mpeg" />');
	
	for(var i = 1; i <= 10; i++){
		$("#scroll").append('<img class="img" id="img'+i+'"/>');
		$("#img"+i).attr("src","../Pic/item"+i+".PNG");
		if(i > 1)
			$("#img"+i).css("margin-left",125*(i-1));
	}
	
	for(var i = 1; i <= 10; i++){
		$("#scroll").append('<img class="img" id="img'+(10+i)+'"/>');
		$("#img"+(10+i)).attr("src","../Pic/item"+(10+i)+".PNG");
		$("#img"+(10+i)).css("margin-left",1125+125*(i));
	}
	
	for(var i = 1; i <= 10; i++){
		$("#scroll").append('<img class="img" id="img'+(20+i)+'"/>');
		$("#img"+(20+i)).attr("src","../Pic/item"+(20+i)+".PNG");
		$("#img"+(20+i)).css("margin-left",2375+125*(i));
	}
	
	for(var i = 1; i <= 10; i++){
		$("#scroll").append('<img class="img" id="img'+(30+i)+'"/>');
		$("#img"+(30+i)).attr("src","../Pic/item"+(30+i)+".PNG");
		$("#img"+(30+i)).css("margin-left",3625+125*(i));
	}
	
	for(var i = 1; i <= 10; i++){
		$("#scroll").append('<img class="img" id="img'+(40+i)+'"/>');
		$("#img"+(40+i)).attr("src","../Pic/item"+(40+i)+".PNG");
		$("#img"+(40+i)).css("margin-left",4875+125*(i));
	}
	
	for(var i = 1; i <= 10; i++){
		$("#scroll").append('<img class="img" id="img'+(50+i)+'"/>');
		$("#img"+(50+i)).attr("src","../Pic/item"+(50+i)+".PNG");
		$("#img"+(50+i)).css("margin-left",6125+125*(i));
	}
	
	for(var i = 1; i <= 5; i++){
		$("#scroll").append('<img class="img" id="img'+(60+i)+'"/>');
		$("#img"+(60+i)).attr("src","../Pic/item"+i+".PNG");
		$("#img"+(60+i)).css("margin-left",7375+125*(i));
	}
	
	$("#img"+(63)).attr("src","../Pic/item"+10+".PNG");
	
	$("#scroll").animate({left: -7500},4000,'swing',Ketthuc);
}

function Ketthuc(){
	$('body').append('<div id="minhnghi"></div>');
	$('#minhnghi').append('<div id="border"></div>');
	$('#minhnghi').append('<img id="minhnghi-pic" src="../Pic/MinhNghi.png" />');
	$("#minhnghi").animate({top: -212.5},500,'swing');
}
