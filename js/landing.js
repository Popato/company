$(function(){
	

	var aa = false;
	var bb = false;
	var t = false;

	// 淡绿 #dff0d8  深绿 #3c763d 
	// 淡红 #f2dede 深红 #a94442

	// 判断用户名是否存在 
	$("#username").blur(function(){
			// 如果用户名存在
			var usernames = $("#username").val();
			if(usernames == ""){
				$("#username").addClass("inputred");

				$("span:first").css("color","#a94442");
				$("span:first").html("用户名不能为空");

				$("#icon-ren").addClass("iconred");
				
				aa = false;

			}else if(localStorage.getItem(usernames)==null){//判断是否存在
				// input边框颜色为 深红 #a94442 且 span出现
				$("#username").addClass("inputred");

				$("span:first").css("color","#a94442");
				$("span:first").html("用户名不存在");

				$("#icon-ren").addClass("iconred");
				
				aa = false;
			}else{
				$("#username").addClass("inputgreen");

				$("span:first").css("color","#3c763d");
				$("span:first").html("输入正确");

				$("#icon-ren").addClass("icongreen");
				
				aa = true;
			}
		});
	

	// 判断密码是否正确 
	$("#password").blur(function(){
			// 密码
			var passwords = $("#password").val();
			var usernames = $("#username").val();
			console.log(passwords);
			if(passwords == ""){

				$("#password").addClass("inputred");

				$("span:eq(1)").css("color","#a94442");
				$("span:eq(1)").html("密码不能为空");

				$("#icon-suo").addClass("iconred");

				bb = false;

			}else if(passwords != localStorage.getItem(usernames)){
				$("#password").addClass("inputred");

				$("span:eq(1)").css("color","#a94442");
				$("span:eq(1)").html("密码不正确");

				$("#icon-suo").addClass("iconred");

				bb = false;
			}else if(passwords == localStorage.getItem(usernames)){
				$("#password").addClass("inputgreen");

				$("span:eq(1)").css("color","#3c763d");
				$("span:eq(1)").html("输入正确");

				$("#icon-suo").addClass("icongreen");

				bb = true;
			}
		});

	// 验证码判断
	// 生成随机字符 4位
	// $(".codechange").click(function(){
		var len = 4;
	    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
	    var maxPos = chars.length;
	    var pwd = '';
	    for (i = 0; i < len; i++) {
	       	pwd += chars.charAt(Math.floor(Math.random() * maxPos));
   		}
   		console.log(pwd);
   		$(".code").html(pwd);
	// });

	 $(".codechange").click(function(){
		var len = 4;
	    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
	    var maxPos = chars.length;
	    var pwd = '';
	    for (i = 0; i < len; i++) {
	       	pwd += chars.charAt(Math.floor(Math.random() * maxPos));
   		}
   		console.log(pwd);
   		$(".code").html(pwd);
	 });
		
	//判断字符
	$("#testget").blur(function(){
		var txt = $("#testget").val();
		var yan = $(".code").html();
		if(txt == ""){
			$("#testget").addClass("testred");
			$("span:eq(2)").css("color","#a94442");
			$("span:eq(2)").html("验证码不能为空");

			t = false;

		}else if(txt != yan){
			$("#testget").addClass("testred");
			$("span:eq(2)").css("color","#a94442");
			$("span:eq(2)").html("验证码不正确");

			// 输入错误 重新生成字符
			var len = 4;
	    	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
	    	var maxPos = chars.length;
	    	var pwd = '';
	    	for (i = 0; i < len; i++) {
	       		pwd += chars.charAt(Math.floor(Math.random() * maxPos));
   			}
   			console.log(pwd);
   			$(".code").html(pwd);

			t = false;

		}else{
			$("#testget").addClass("testgreen");
			$("span:eq(2)").html("输入正确");
			$("span:eq(2)").css("color","#3c763d");

			t = true;
		}
	});

	// 登陆按钮判断
	$("#btn").click(function(){
		if(aa&&bb&&t){
			window.location.href="index.html";
			localStorage.setItem("username",$("#username").val());
		}else{
			alert("登陆失败！");
			window.location.href="landing.html";
		
		}
	});
});






