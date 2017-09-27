$(function(){
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',

        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
    		// swiperAnimateCache(swiper); //隐藏动画元素 
    		swiperAnimate(swiper); //初始化完成开始动画
  		}, 
  		onSlideChangeEnd: function(swiper){ 
    		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
    		// $("#nav").slideDown(2000);
    		var hid = $("#nav").css("display");
    		console.log(hid);
    		if(hid == "block"){
    			$("#nav").css("display","none");
    			$("#nav").slideDown(500);
    		}
    		if(swiper.activeIndex!=0){
    			$("#nav").css("background","rgba(0,0,0,0.5)");
    			// $("#nav").css("opacity","0.5");
                $(".txt").css("color","white");
                $("ul li").css("color","#e0e1e5");
    		}else{
    			$("#nav").css("background","#dadce1");
    			$("#nav").css("opacity","1");
                $(".txt").css("color","black");
                $("ul li").css("color","#676767");

    		}
  		} 
    });

    // 判断是否有用户登陆
    var txt = localStorage.getItem("username");
    console.log(txt);
    if(txt != null){
        $("#user").html(txt);
        $(".load").css("display","block");
        $(".land").css("display","none");
    }else{
        $("#user").html();
        $(".load").css("display","none");
        $(".land").css("display","block");
    }

    // 退出
    $(".quit").click(function(){
        localStorage.removeItem("username");
        window.location.href="index.html";
    });
});




















