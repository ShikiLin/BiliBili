
$(document).ready(function(){
    var divColumns = [
	    {
	    	id: 'promote',
	    	title: '推广',
	    	text:'你喜欢篮球吗？'
		},
        {
        	id: 'live', 
            title: '正在直播',
            live_online_state:7417,
        },
        {
        	id: 'animation', 
            title: '动画',
            hot:'MMD区给大家拜晚年啦',
            three_days:"index/catalogy/1-3day.json",
            week:"index/catalogy/1-week.json"
        }, 
        {
        	id: 'manga', 
            title: '番剧',
            hot:'bilibili1月正版新番',
            three_days:"index/catalogy/1-3day.json",
            week:"index/catalogy/1-week.json"
        }, 
        {
        	id: 'music', 
            title: '音乐',
            hot:'我在鸟巢听国风',
            three_days:"index/catalogy/1-3day.json",
            week:"index/catalogy/1-week.json"
        }, 
        {
        	id: 'dance', 
            title: '舞蹈',
            hot:'这次真的一点也不gay了',
            three_days:"index/catalogy/1-3day.json",
            week:"index/catalogy/1-week.json"
        }, 
        { 
         	id: 'game', 
         	title: '游戏', 
         	hot:'你们唯一想要的卡都在这里！',
         	three_days:"index/catalogy/2-3day.json",
         	week:"index/catalogy/2-week.json"
        },
        {
        	id: 'technology', 
            title: '科技',
            hot:'鱼类和植物怎么熬过冬天？',
            three_days:"index/catalogy/1-3day.json",
            week:"index/catalogy/1-week.json"
        }, 
        {
        	id: 'life', 
            title: '生活',
            hot:'超满足地狱蛋！hell yes！~',
            three_days:"index/catalogy/1-3day.json",
            week:"index/catalogy/1-week.json"
        }, 
        {
        	id: 'kichiku', 
            title: '鬼畜',
            hot:'今天的鬼畜区也是年味十足',
            three_days:"index/catalogy/1-3day.json",
            week:"index/catalogy/1-week.json"
        }, 
        { 
         	id: 'fashion', 
         	title: '时尚', 
         	hot:'蓝孩纸的穿搭单品购物分享',
         	three_days:"index/catalogy/2-3day.json",
         	week:"index/catalogy/2-week.json"
        },
        { 
         	id: 'advertisement', 
         	title: '广告', 
         	hot:'我可能看到了假洗衣液广告',
         	three_days:"index/catalogy/2-3day.json",
         	week:"index/catalogy/2-week.json"
        },
        { 
         	id: 'entertainment', 
         	title: '娱乐', 
         	hot:'撒贝宁又接诈骗电话',
         	three_days:"index/catalogy/2-3day.json",
         	week:"index/catalogy/2-week.json"
        },
        { 
         	id: 'movie', 
         	title: '电影', 
         	hot:'整年的日本电影都在这',
         	three_days:"index/catalogy/2-3day.json",
         	week:"index/catalogy/2-week.json"
        },
        { 

         	id: 'teleplay', 
         	title: '电视剧', 
         	hot:'孤独的美食家登录bilibili',
         	three_days:"index/catalogy/2-3day.json",
         	week:"index/catalogy/2-week.json"
        },
        {
        	id: "recommend",
        	title: "特别推荐"
        }
    ];
    $('#myTemplate').tmpl(divColumns).appendTo('#body');

}); 
$(document).ready(function(){

	String.prototype.temp = function(obj) {
	    return this.replace(/\$\w+\$/gi, function(matchs) {
	        var returns = obj[matchs.replace(/\$/g, "")];
	        return (returns + "") == "undefined"? "": returns;
	    });
	};
    //---------------------读取数据-----------------------------
//     在遍历DOM时，通常用$(selector).each(function(index,element))函数；
//     在遍历数据时，通常用$.each(dataresource,function(index,element))函数。
    var htmlList1 = '', htmlTemp1 = $(".templet1").val();
	var htmlList2 = '', htmlTemp2 = $(".templet2").val();
    var htmlList_22 = '', htmlTemp_22 = $(".templet2-2").val();
    var htmlList3 = '', htmlTemp3 = $(".templet3").val();
    var htmlList4 = '', htmlTemp4 = $(".templet4").val();
    var htmlList5 = '', htmlTemp5 = $(".templet5").val();
    var htmlList6 = '', htmlTemp6 = $(".templet6").val();
    var htmlList7 = '';
    var htmlTemp7='<li bar="bar" class=""><a></a></li>';
	$(".container-row").each(function(index,element){
		if(element.id=='promote'|| element.id=='live'||element.id=='recommend'){
			if(element.id=='live'){
				$.getJSON("index/etc.json", function(result){

		            var target=$(element).find(".v-list");
		            $('#templet1-2').tmpl(result.live.list).appendTo(target);
                    // target=$(element).find(".billboard");
                    // $('#templet2-3').tmpl(result.live).appendTo(target);  
                    $.each(result.live.billboard,function(index,object){
                        object.number=index+1;
                         htmlList3 += htmlTemp3.temp(object);
                    })
                   $(element).find(".b-list-live:eq(0)").html(htmlList3);

                    $.each(result.live.mini_preview_list,function(index,object){
                         htmlList4 += htmlTemp4.temp(object);
                         htmlList6 += htmlTemp6.temp(object);
                         htmlList7 += htmlTemp7;
                    })
                   $(element).find(".b-list-live:eq(2) .mini-preview").html(htmlList4);
                   $(element).find(".b-list-live:eq(2) .info").html(htmlList6);
                   $(element).find(".b-list-live:eq(2) .slider-bar").html(htmlList7);

                   $.each(result.live.live_pmt_list,function(index,object){
                         htmlList5 += htmlTemp5.temp(object);
                    })
                   $(element).find(".b-list-live:eq(2) .live-pmt-list").html(htmlList5);
                  
                    $("#live .mini-preview-wrapper .slider-bar li").eq(1).addClass("on");
                    $("#live .mini-preview-wrapper .s-bottom .info-item").css({"display":"none"});
                    $("#live .mini-preview-wrapper .s-bottom .info-item").eq(1).css({"display":"block"});
                    var ii=$(".mini-preview-wrapper .slider-bar li").length;
                    var ttemp=ii*100+"%";
                    console.log("ttemp:"+ttemp);
                    $("#live .mini-preview-wrapper .mini-preview").css({"width":ttemp});
                   //----------------------------图片轮播----------------------------------
                $(".mini-preview-wrapper .slider-bar li").hover(function(){
                    var i=$(this).index();
                    console.log("i:"+i);
                    $(this).addClass("on");
                    $(this).siblings().removeClass("on");
                    $(this).parents(".s-bottom").find(".info-item").css({"display":"none"});
                    $(this).parents(".s-bottom").find(".info-item").eq(i).css({"display":"block"});
                    $(this).parents(".mini-preview-list-wrapper").find(".mini-preview").animate({"margin-left":"-"+i*100+"%"},100);
                });
				});
               
			}
			else if(element.id=='promote'){
				$.getJSON("index/etc.json", function(result){
		            // var data=eval('result.'+element.id+'.list');
		            var target=$(element).find(".v-list");
		            $('#templet1-3').tmpl(result.promote.list).appendTo(target);
		            $("#promote").find(".v-list li .title").css({"height":"40px"});
	                $("#promote .v-list li").hover(
	                	function(){$(this).find(".title").css({"color":"#00a1d6","height":"40px"});},
						function(){$(this).find(".title").css({"color":"#222","height":"40px"});}
					);
		          
                  
                    htmlList_22 = htmlTemp_22.temp(result.promote);
                    $(element).find(".billboard").html(htmlList_22);
				});

			}
			else if(element.id=='recommend'){
				$.getJSON("index/etc.json", function(result){
		            var target=$(element).find(".v-list");
		            $('#templet1-4').tmpl(result.recommend.list).appendTo(target);
		            $("#recommend").find(".v-list li").css({"height":"164px"});   
		            $("#recommend").find(".v-list li .title").css({"height":"40px"});    
				});
			}
		}
		else{
		    var data_source=$(element).find(".on").attr("data-source");
			$.getJSON(data_source, function(result){
		    htmlList1 = '';
		    var data=eval('result.'+element.id);
		    $.each(data,function(index,object){
		        htmlList1 += htmlTemp1.temp(object);
		    });
		   $(element).find(".v-list").html(htmlList1);

		    });
		    $.getJSON($(element).find(".selected").attr("data-source"), function(result){
			    htmlList2 = '';
			    $.each(result.hot,function(index,object){
			    	object.number=index+1;
			        htmlList2 += htmlTemp2.temp(object);
			    })
			   $(element).find(".billboard .b-list:eq(0)").html(htmlList2);
			   $(element).find(".billboard .b-list:eq(0) li:eq(0) .item").addClass("on");
		    });
		}
	
});


    //---------------------三日/一周选项 点击事件-----------------------------

// $(".container-row .b-header-icon").click(function(){console.log("点击");});
	var htmlTemp222 = $(".templet2").val();
    $(".container-row .billboard .b-header .time-range li").click(function(){
       
    	$(this).addClass("selected");
    	$(this).siblings().removeClass("selected");
    	$(this).parents(".b-header").find(".txt").html($(this).text());
        $(this).parents(".list").css({"display":"none"});
        var htmlList222 = '';
        // //
        // console.log("点击了："+$(this).text());
        // console.log("排行："+$(this).parents(".time-range").siblings(".b-header-tab").children(".on").attr("type"));
        var id=$(this).parents(".container-row").attr("id");

    	if($(this).parents(".time-range").siblings(".b-header-tab").children(".on").attr("type")=="hot"){
    		htmlList222 = '';
    		$.getJSON($(this).attr("data-source"), function(result){
			console.log(result);
		    $.each(result.hot,function(index,object){
		        object.number=index+1;
		        htmlList222 += htmlTemp222.temp(object);
		    })
		    $("#"+id).find(".b-list").eq(0).html(htmlList222);
		    $("#"+id).find(".b-list:eq(0) li:eq(0) .item").addClass("on");
			});
    	}
    	else if($(this).parents(".time-range").siblings(".b-header-tab").children(".on").attr("type")=="hot_original"){
    		htmlList222 = '';
    		$.getJSON($(this).attr("data-source"), function(result){
			    $.each(result.hot_original,function(index,object){
			        object.number=index+1;
			        htmlList222 += htmlTemp222.temp(object);
			    })
			    $("#"+id).find(".b-list").eq(1).html(htmlList222);
			    $("#"+id).find(".b-list:eq(1) li:eq(0) .item").addClass("on");
			});
    	}
        
    });
    $(".container-row .billboard .b-header .time-range .option").hover(function(){ 
		$(this).siblings(".list").css({"display":"block"});
	});

    //---------------------有新动态/最近投稿 click事件-----------------------------
	var htmlList = '', htmlTemp = $(".templet1").val();
    $(".container-row .recently-upload .b-header .b-header-tab li").click(function(){
    	$(this).addClass("on");
    	$(this).siblings().removeClass("on");
    	htmlList = '';
    	// console.log("ID:"+$(this).parents(".container-row").attr("id"));
    	var id=$(this).parents(".container-row").attr("id");
    	var d="result."+id;
		console.log($(this).attr("data-source")+"导入啦");
    	$.getJSON($(this).attr("data-source"), function(result){		
			console.log(result);
		    $.each(eval('(' + d + ')'),function(index,object){
		        htmlList += htmlTemp.temp(object);
		    })
		   $("#"+id).find(".v-list").html(htmlList);
		});

    });
     //---------------------直播排行/关注的主播/为你推荐 cllick事件----------------------------- 
    var temp=new Array(2);
    temp[0]="直播排行";
    temp[1]="为你推荐";
    var List=["直播排行","关注的主播","为你推荐"]

    $(".container-row .billboard .b-header .b-header-tab li").click(function(){
        if($(this).parents(".container-row").attr("id")=="live"){
        
        var text=$.trim($(this).text());
        console.log("点击了"+text);
        // 
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
        
        if(text=="为你推荐"){
            $(this).parents(".billboard").find(".b-list-wrapper").css({"width":"200%","margin-left":"0%"});
            $(this).parents(".billboard").find(".b-list-wrapper").animate({"width":"200%","margin-left":"-100%"},200);
        }
        else if(text=="直播排行"){
            $(this).parents(".billboard").find(".b-list-wrapper").css({"width":"200%","margin-left":"-100%"});
            $(this).parents(".billboard").find(".b-list-wrapper").animate({"width":"200%","margin-left":"0%"},200);
        }
        else if(text=="关注的主播"){
            if(temp[1]=="直播排行")
                $(this).parents(".billboard").find(".b-list-wrapper").animate({"width":"200%","margin-left":"-100%"},200);
            else if(temp[1]=="为你推荐")
                $(this).parents(".billboard").find(".b-list-wrapper").animate({"width":"200%","margin-left":"0%"},200);
        }
        $(".b-list-live").css({"display":"none"});
         if(text!==temp[0]&&text!==temp[1]){
            temp[0]=temp[1];
            temp[1]=text;
         }
        $.each(List,function(index,element){
            if(element==temp[0] || element==temp[1]){
             $(".b-list-live").eq(index).css({"display":"block"});
            }
        });
        
        console.log("temp:"+temp);
       } 
    });
    //---------------------全部/原创 hover事件-----------------------------
    var htmlList22 = '', htmlTemp22 = $(".templet2").val();
    $(".container-row .billboard .b-header .b-header-tab li").hover(function(){
        
        if($(this).parents(".container-row").attr("id")!="live"){
    	console.log($(this).attr("type"));
        $(this).addClass("on");
    	$(this).siblings().removeClass("on");
        var id=$(this).parents(".container-row").attr("id");
        var b_list=$("#"+id).find(".b-list");
    	if($(this).attr("type")=="hot"){
    		$(this).parents(".billboard").find(".b-list-wrapper").animate({"margin-left":"0%"},100);
    		$("#"+id).find(".b-list").eq(1).empty();
    		htmlList22 = '';
    		$.getJSON($(this).parents(".billboard").find(".selected").attr("data-source"), function(result){
    		    $.each(result.hot,function(index,object){
    		        object.number=index+1;
    		        htmlList22 += htmlTemp22.temp(object);
    		    })
    		    $("#"+id).find(".b-list").eq(0).html(htmlList22);
    		    $("#"+id).find(".b-list:eq(0) li:eq(0) .item").addClass("on");
			});
    	}
    	if($(this).attr("type")=="hot_original"){
    		$(this).parents(".billboard").find(".b-list-wrapper").animate({"margin-left":"-100%"},100);
    		$("#"+id).find(".b-list").eq(0).empty();
    		htmlList22 = '';
    		$.getJSON($(this).parents(".billboard").find(".selected").attr("data-source"), function(result){
        	    $.each(result.hot_original,function(index,object){
        	        object.number=index+1;
        	        htmlList22 += htmlTemp22.temp(object);
        	    })
        	    $("#"+id).find(".b-list").eq(1).html(htmlList22);
        	    $("#"+id).find(".b-list:eq(1) li:eq(0) .item").addClass("on");
			});
    	}
        }

	});
    
});

// --------------------------------导航栏操作--------------------------------------------
$(function(){
    navIndex={
        music: {
            name: "音乐",
            target: "music"
        },
    	live: {
            name: "直播",
            target: "live"
        },
        animation: {
            name: "动画",
            target: "animation"
        },
        manga: {
            name: "番剧",
            target: "manga"
        },
        music: {
            name: "音乐",
            target: "music"
        },
        dance: {
            name: "舞蹈",
            target: "dance"
        },
        game: {
            name: "游戏",
            target: "game"
        },
        technology: {
            name: "科技",
            target: "technology"
        },
        life: {
            name: "生活",
            target: "life"
        },
        kichiku: {
            name: "鬼畜",
            target: "kichiku"
        },
        fashion: {
            name: "时尚",
            target: "fashion"
        },
        advertisement: {
            name: "广告",
            target: "advertisement"
        },
        entertainment: {
            name: "娱乐",
            target: "entertainment"
        },
        movie: {
            name: "电影",
            target: "movie"
        },
        teleplay: {
            name: "TV剧",
            target: "teleplay"
        }
    }
    
		// var height=$(".container-row").height();
		var height=$("#kichiku").height();
		console.log("每个模块的高度："+height);
		var window_height=window.innerHeight;
		var a=new Array();
		var length=$(".sortable").length;
		console.log("length:"+length);
		
		function navSort(){
			var nav=$(".sortable:first");
			for(var i=0;i<length;i++){
	        	a[i]= $.trim(nav.text());
	            // console.log("a["+i+"]:"+a[i]);
	            nav=nav.next();
			}
		}
		// navSort();
		//------------------------拖动滚轴，导航栏标签跳转------------------------
		$(document).scroll(fun1=function(){

			console.log("页面高度:"+window_height);
			// console.log(navIndex);
			var scrollTop=$(window).scrollTop();
            if(scrollTop>232){
                $(".index-nav").css({"top":"0"});
            }
            else $(".index-nav").css({"top":"232px"});
	        $(".container-row").each(function(index,element){     		
	        		var distance=$(element).offset().top-scrollTop;

		        	if(distance>-height/2 && distance<height/2){ 
		        		var getID=$(element).attr("id");
		        	    // console.log(getID);
		        	    $.each(navIndex,function(index,element){
		        	    	if (element.target==getID) {
		        	    		var getName=element.name;
		        	    		// console.log(getName);
		        	    		$(".sortable").each(function(index,element2){
		   
		        	    			if($.trim($(element2).text())==getName){
		        	    				$(element2).addClass("on");
			                            $(element2).siblings().removeClass("on");
		        	    			}
		        	    		 	
		        	    		})
		        	    	}
		        	    })
		            	
		            }
		        })
	        
		});
        //---------------------------导航栏标签点击事件----------------------------
		$(".sortable").click(function(){
			console.log("即将跳转到:"+$.trim($(this).text()));
			var text=$.trim($(this).text());
			$(this).addClass("on");
			var scrollDistance;
            $.each(navIndex,function(index,element){
            	if (element.name==text) {
            		scrollDistance=$("#"+element.target+".container-row").offset().top;
            	}
            });
            $('body,html').animate({scrollTop:scrollDistance},"slow");  
		});
        //---------------------------导航栏标签hover事件---------------------------
        $(".sortable").hover(
        	function(){
	        	$(this).addClass("on");
	        },
	        function(){
	        	$(this).removeClass("on");
	        }
        );
        $(".customize").hover(
        	function(){
	        	$(this).addClass("on");
	        	$(this).children(".icon_sort").css({"background-position":" -728px -151px"});
	        },
	        function(){
	        	$(this).removeClass("on");
	        	$(this).children(".icon_sort").css({"background-position":" -663px -151px"});
	        }
        );
        //----------------------------导航栏位置-----------------------------------
        function navPosition(){
        	var window_width=$(window).innerWidth();
        	// console.log("width:"+window_width);
        	var left;
        	if(window_width<=980)
        	{
        		left=window_width-48+10;
        		$(".index-nav").css({"left":left+"px"});
        	}
        	else if(window_width>980)
        	{
        		left=(window_width+980)/2+10;
        		$(".index-nav").css({"left":left+"px"});
        	}
        }
        navPosition();
        // $(window).load(navPosition); //错误的写法
        $(window).resize(navPosition);
        //----------------------------排序点击事件---------------------------------
        var flag=false;
        
      
           // $('.nav_list').sortable({ helper: 'clone' });
           //  var helper = $('.selector').sortable('option', 'helper');
           //  $('.selector').sortable('option', 'helper', 'clone');
		$(".customize").click(function(){
			var tip="<div class='tip'></div>";
			var custom_bg="<div class='custom_bg'></div>";
			var mask="<div class='mask'></div>";
			var original_position;
			var target_position;
			var newIndex;
            var oldIndex;
            var oldList2=new Array();
          
             

			if(flag==false){
                oldList2=[];
                $(".sortable").each(function(index,element){
                    console.log(index+"=:"+$.trim($(element).text()));
                 // test[index]= $.trim($(element).text());
                    var temp=$.trim($(element).text());
                    oldList2.push(temp);
                });
                // navSort();
                // oldList2=a;
                console.log("最早排序动作开始时:"+oldList2);
				$(this).children(".icon_sort").css({"background-position":" -663px -151px"});
				$(".sortable").css({"cursor":"move"});
				$(document).off('scroll');
				$(".index-nav").css({"z-index":"1001"});
				$(".sortable").siblings().removeClass("on");
                // var oldList2=a;
	            $(".nav_list").sortable({
                    items: ".sortable",
                    //当排序动作结束时且元素坐标已经发生改变时触发此事件。
	            	update:function(event,ui){
                         // console.log("排序动作结束时且元素坐标已经发生改变时:"+a);
	            		alert(ui.item.text());
	            		var select=$.trim(ui.item.text());
    	            	for(var i=0;i<length;i++){
    						if (a[i]==select) { oldIndex=i; }
    					}
    		            // navSort();
                        a=[];
                        $(".sortable").each(function(index,element){
                             // var temp=$.trim($(element).text());
                             a.push($.trim($(element).text()));
                             // a[index]= $.trim($(element).text());
                        });
                        console.log("重新给A赋值后:"+a);
                         console.log("重新给A赋值后:"+oldList2);
                        // rearrange(select,oldIndex);
                        for(var i=0;i<length;i++){
                            if (a[i]==select) { newIndex=i;break;}
                        }
                        console.log("oldIndex=::::"+oldIndex);
                        console.log("newIndex=::::"+newIndex);
                         // console.log("目标oldList2[newIndex]："+oldList2[newIndex]);
                        $.each(navIndex,function(index,element){ 
                            if (element.name==select) {
                                original_position="#"+element.target;
                                console.log("选中："+original_position);
                            }
                            if (element.name==oldList2[newIndex]) {
                                // console.log("目标："+element.name);
                                target_position="#"+element.target;
                                console.log("目标："+target_position);
                            }
                        });
                      
                        if(oldIndex<newIndex){ 
                            console.log("oldIndex="+oldIndex);
                            console.log("newIndex="+newIndex);
                            $(original_position).clone().insertAfter(target_position);
                            $(original_position).eq(0).remove();
                        }
                        else if(oldIndex>newIndex){ 
                            $(original_position).clone().insertBefore(target_position);
                            $(original_position).eq(1).remove();
                        }
	            	}
	            });
	            $(".nav_list").disableSelection();
				
				$(".nav_list").before(tip);
				$(".nav_list").before(custom_bg);
				$("body").append(mask);
				flag=true;
				navSort();
			}
			else if(flag==true)
			{
				$(".tip").remove();
				$(".custom_bg").remove();
				$(".mask").remove();
			    navSort();
                // window.location.reload();
                fun1();

				$(document).on('scroll',fun1);
				
				flag=false;
			}
			
		});
        function rearrange(select,oldIndex){
            console.log("更改相应模块位置:oldList++++++++"+oldList2);
            for(var i=0;i<length;i++){
                if (a[i]==select) { newIndex=i;break;}
            }
            console.log("oldIndex=::::"+oldIndex);
            console.log("newIndex=::::"+newIndex);
            $.each(navIndex,function(index,element){ 
                if (element.name==select) {
                    var original_position="#"+element.target;
                    console.log("选中："+original_position);
                }
            });
             $.each(navIndex,function(index,element){
                if (element.name==oldList2[newIndex]) {
                    console.log("目标："+element.name);
                    var target_position="#"+element.target;
                    console.log("目标："+original_position);

                }
            });
            if(oldIndex<newIndex){ 
                $(original_position).clone().insertAfter(target_position);
                $(original_position).eq(0).remove();
            }
            if(oldIndex>newIndex){ 
                $(original_position).clone().insertBefore(target_position);
                $(original_position).eq(1).remove();
            }
        }
        //----------------------------Test点击事件---------------------------------
        // $(".test").click(function(){
        // 	console.log("Test点击了");
        // 	 // $('#Music').clone().insertBefore('#Live');
        // 	 $('#Music').clone().insertBefore(".container-row:eq(2)");
        //     $('#Music').eq(1).remove()
        // });
                  
	});
