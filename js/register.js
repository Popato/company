$(function(){
	var u = false;
	var p = false;
	var pp = false;
	var t = false;
	// 手机号码判断是否合法
	$("#username").blur(function(){
		var reg=/^1\d{10}$/;
		var phone=$("#username").val();
		if (phone == "") {
			$("#username").addClass('inputred');
			$("#icon-shouji").addClass('iconred');
			$("span:eq(0)").html("手机号码不能为空");

			u = false;
	
		}else if(!reg.test(phone)){
			$("#icon-shouji").addClass('iconred');
			$("#username").addClass('inputred');
			$("span:eq(0)").html("手机号码不合法");
			$("span:eq(0)").css("color","#a94442");

			u = false;	
			
		}else if( localStorage.getItem( phone ) ){
			$("#username").addClass('inputred');
			$("#icon-shouji").addClass('iconred');
			$("span:eq(0)").html("手机号码已存在");
			$("span:eq(0)").css("color","#a94442");

			u = false;

		}else{
			$("#username").addClass('inputgreen');
			$("#icon-shouji").addClass('icongreen');
			$("span:eq(0)").html("输入合法");
			$("span:eq(0)").css("color","#3c763d");

			u = true;
		}
	});

	// 密码判断是否合法
	$("#password").blur(function(){
		//密码只能由数字和字母 组成，长度为6-10位
		var reg=/^[\da-z]{6,10}$/;
		var password = $("#password").val();
		if(password == ""){
			$("#password").addClass("inputred");
			$("#icon-suo").addClass("iconred");
			$("span:eq(2)").html("密码不能为空");
			$("span:eq(2)").css("color","#a94442");

			p = false;

		}else if(!reg.test(password)){
			$("#password").addClass("inputred");
			$("#icon-suo").addClass("iconred");
			$("span:eq(2)").html("密码不合法");
			$("span:eq(2)").css("color","#a94442");

			p = false;

		}else{
			$("#password").addClass("inputgreen");
			$("#icon-suo").addClass("icongreen");
			$("span:eq(2)").html("输入合法");
			$("span:eq(2)").css("color","#3c763d");

			p = true;
		}
	});

	// 判断两次输入是否一致
	$("#agan").blur(function(){
		var password = $("#password").val();
		var agan = $("#agan").val();

		if(agan == ""){
			$("#agan").addClass("inputred");
			$("#icon-suo2").addClass("iconred");
			$("span:eq(3)").html("密码不能为空");
			$("span:eq(3)").css("color","#a94442");

			pp = false;

		}else if(agan != password){
			$("#agan").addClass("inputred");
			$("#icon-suo2").addClass("iconred");
			$("span:eq(3)").html("两次密码不一致");
			$("span:eq(3)").css("color","#a94442");

			pp = false;

		}else{
			$("#agan").addClass("inputgreen");
			$("#icon-suo2").addClass("icongreen");
			$("span:eq(3)").html("输入一致");
			$("span:eq(3)").css("color","#3c763d");

			pp = true ;
		}
	});


	// 验证码判断
	$(".get").click(function(){
			// 生成随机字符 4位
			var len = 4;
	    	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
	    	var maxPos = chars.length;
	    	var pwd = '';
	    	for (i = 0; i < len; i++) {
	       	 	pwd += chars.charAt(Math.floor(Math.random() * maxPos));
   			 }
   			 $(".get").val(pwd);
	});


	//判断验证码
	$("#testget").blur(function(){
		var txt = $("#testget").val();
		if(txt == ""){
			$("#testget").addClass("inputred");
			$("#icon-erweima").addClass("iconred");
			$("span:eq(1)").html("验证码不能为空");
			$("span:eq(1)").css("color","#a94442");

			t = false;

		}else if(txt != $(".get").val()){
			$("#testget").addClass("inputred");
			$("#icon-erweima").addClass("iconred");
			$("span:eq(1)").html("验证码不正确");
			$("span:eq(1)").css("color","#a94442");

			t = false;

			// 输入错误 重新生成字符
			var len = 4;
	    	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
	    	var maxPos = chars.length;
	    	var pwd = '';
	    	for (i = 0; i < len; i++) {
	       	 	pwd += chars.charAt(Math.floor(Math.random() * maxPos));
   			 }
   			 console.log(pwd);
   			 $(".get").val(pwd);
		}else{
			$("#testget").addClass("inputgreen");
			$("#icon-erweima").addClass("icongreen");
			$("span:eq(1)").html("输入正确");
			$("span:eq(1)").css("color","#3c763d");

			t = true;
		}
	});
	// 点击查看密码
	$("#firstA").click(function(){
		if($("#password").attr("type") == "password"){
			$("#password").attr("type","text");
		}else{
			$("#password").attr("type","password");
		}
	});
	$("#secondA").click(function(){
		if($("#agan").attr("type") == "password"){
			$("#agan").attr("type","text");
		}else{
			$("#agan").attr("type","password");
		}
	});


	// 确认按钮 注册
	$("#btn").click(function(){
		if(u&&pp&&t){
			localStorage.setItem($("#username").val(),$("#agan").val());
			alert("恭喜你，注册成功！");
			window.location.href="landing.html";
		}else{
			alert("注册失败！");
			window.location.href="register.html";
		}	
	});



});










