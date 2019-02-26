//记住用户名点击出现勾选
$(".usecheck").click(function() {
	$("#usecheck").toggle();
});
//点击xx和确定关闭图层
$(".chacha").click(function() {
	$(".shadow").css({
		"display": "none"
	});
});
usenameshow();
//show用户名
function usenameshow(){
	$('#usename').val(localStorage.getItem("usename"));
}
//点击登录
$(".loadbut").click(function() {
	//不管怎么样如果点击的时候没勾选保存用户名就清空localStorage
	if($("#usecheck").css("display")=="none"){
		localStorage.clear();
	}
	// 用户名不空时判断是否要存入本地内存
	if($('#usename').val() != ""&& $("#usecheck").css("display")=="block"){
		localStorage.setItem("usename", $('#usename').val());
		usenameshow();
	}
	//先判断用户名和密码是否为空
	if ($('#usename').val() == ""||$('#usecode').val() == "") {
		$(".shadow").css({"display": "block"});
	}else{
	}
});
