$(document).ready(function() {
		$(".u-poster-attach-side").hover(function(){
			$(".u-poster-attach-camera").show();
			$(".icon-camera").css("color","#E8ED23");
			$(".u-poster-attach-side").css("backgroundColor","#29AAB8");
		},function(){
			$(".u-poster-attach-camera").hide();
			$(".icon-camera").css("color","#fff");
			$(".u-poster-attach-side").css("backgroundColor","#1D8BA7");
			$(".u-poster-attach-camera").hover(function(){
				$(".u-poster-attach-camera").show();
				$(".icon-camera").css("color","#E8ED23");
				$(".u-poster-attach-side").css("backgroundColor","#29AAB8");
			},function(){
				$(".u-poster-attach-camera").hide();$(".icon-camera").css("color","#fff");$(".u-poster-attach-side").css("backgroundColor","#1D8BA7");
			});
		});
		$(".u-poster-attach-camera-1").hover(function(){
			$(".icon-desktop").css("color","#E8ED23");
		},function(){
			$(".icon-desktop").css("color","#fff");
		});
		$(".u-poster-attach-camera-2").hover(function(){
			$(".icon-picture").css("color","#E8ED23");
		},function(){
			$(".icon-picture").css("color","#fff");
		});

		$(".icon-smile").hover(function(){
			$(this).css("color","#24AADD");
			$(this).click(function() {
				$(this).css("color","#24AADD");
			});
		},function(){
			$(this).css("color","#8D917D");
		});

		$(document).bind("click",function(e){
			var target = $(e.target);
			if(target.closest('.icon-smile').length == 0){
				$(".icon-smile").css("color","#8D917D");
			}
		});
	
		$("#u-input").click(function(){
			$(".u-poster-ft").slideDown('fast');
		});		
		$(document).bind("click",function(e){ 
			var target = $(e.target);
			if(target.closest(".u-poster").length == 0){
				$(".u-poster-ft").slideUp(); 
			}
		});

		$(".icon-smile").qqFace({
			id:'facebox',
			assign:'u-input',//给输入框赋值
			path:'arclist/'//表情存放路径
		});
		$(".u-poster-sub").click(function() {
			var str = $("#u-input").val();
        	$(".u-show").html(replace_em(str)); 
		});	
		function replace_em(str){ 
			str = str.replace(/\</g,'&lt;');
			str = str.replace(/\>/g,'&gt;');
			str = str.replace(/\n/g,'<br/>');
		    str = str.replace(/\[em_([0-9]*)\]/g,'<img src="arclist/$1.gif" border="0" />');
		    return str; 
		}
});