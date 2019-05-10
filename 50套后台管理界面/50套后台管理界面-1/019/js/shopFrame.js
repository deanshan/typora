/*!
 * jQuery Frame structure 1.2
 *
 * Copyright 2017 BKUI,
 * Simple and easy to use frame structure
 */
(function($){
"use strict";
    $.fn.frame = function(options){
		var frame = this;
        var defaults = {
            float :'left',//位置
			minStatue : true,
			allowClose:true, //添加选项卡时是否允许关闭,默认值：是
			active:false, //添加选项卡时是否为活动状态,默认值：否
			logostyle:'.system_logo',//图片
			position:"#menuBar",//方位选择
			logo_img:'',
			header:70,//顶部高度
			bottom:30,//底部高度
			menu:220,//菜单栏宽度
			close_btn_width:25,//点击按钮宽度
			color_btn:'',//框架颜色
			content:'.side_content',
		    menu_nav:'#menu_list ',//栏目
			close_btn:'.close_btn', //点击隐藏
			show_btn:'.show_btn',	//点击显示		
			column_list:'.column_list',//设置栏目名称
			hover_btn:'',
			height:'',
			Sellerber_header:'.Sellerber_header',//顶部
			Sellerber_menu:'.list_content',//左侧
			Sellerber_left:'.Sellerber_left',//左侧
			Sellerber_bottom:'.Sellerber_bottom',//底部
			Sellerber_content:'.Sellerber_content',//内容
			page_content:'.page_content',//内容
            };	
		    var settings = $.extend({},defaults, options);	
            return this.each(function(){	
		   //获取对象
		   var thisBox = $(this), 
		   closeBtn = thisBox.find(settings.close_btn ), //隐藏对象
		   showbtn = thisBox.find(settings.show_btn ), //显示对象
		   colorbtn=thisBox.find(settings.color_btn ), //框架颜色选择
		   sideContent = thisBox.find(settings.content),//对象内容
		   position_float=thisBox.find(settings.position),//对象内容
		   headerheight=thisBox.find(settings.Sellerber_header),//获取顶部高度
		   leftmenu=thisBox.find(settings.Sellerber_menu),
		   hoverbtn=thisBox.find(settings.hover_btn),
		   page_list=thisBox.find(settings.page_content),
		   style_height=thisBox.find(settings.height),
		   menunav=thisBox.find(settings.menu_nav),//栏目对象
		   showiframe=thisBox.find(settings.show_iframe),//栏目对象
		   Sellerberleft=thisBox.find(settings.Sellerber_left),
		   bottomheight=thisBox.find(settings.Sellerber_bottom),//底部
		   content=thisBox.find(settings.Sellerber_content),//内容
		   columnlist = thisBox.find(settings.column_list); //获取操作对象名称
		   var defaultTop = thisBox.offset().top;	//对象的默认top										
		   thisBox.css(settings.float, 0);		   
		   headerheight.css("height", settings.header); 
		   leftmenu.width(settings.menu);
		   bottomheight.height(settings.bottom).css("line-height",(settings.bottom)+"px");		   
		   if(settings.minStatue){
				$(settings.show_btn ).css("float", settings.float);				
				sideContent.css('width', 0);			
				showbtn.css('width', (settings.close_btn_width));	
			}	
		   leftmenu.height($(window).height()-((settings.header)+(settings.bottom)));//获取栏目高度
		   style_height.height($(window).height()-20);//获取栏目高度
		   content.height($(window).height()-((settings.header)+(settings.bottom))).css({"width":$(window).width()-(settings.menu),"margin-top":settings.header,"margin-left":settings.menu,"position":"relative"});
		   page_list.height($(leftmenu).height()).css({"width":$(".h_products_list").width()-(settings.menu)-2,"position":"relative","float":"left"}); 
			 
		   //当窗口发生改变是触发
			 $(window).resize(function(){				   	
			   leftmenu.height($(window).height()-((settings.header)+(settings.bottom)));//高度值变化
			   style_height.height($(window).height()-20);//获取栏目高度
			   content.height($(window).height()-((settings.header)+(settings.bottom))).css({"width":$(window).width()-(settings.menu),"margin-top":settings.header,"margin-left":settings.menu,"position":"relative"});
			    page_list.height($(leftmenu).height()).css({"width":$(".h_products_list").width()-(settings.menu)-2,"position":"relative","float":"left"});  
			 });
		   //隐藏对象点击事件
			closeBtn.bind("click",function(){		
			  leftmenu.stop(true, true).delay(0).animate({ width:+(0)+'px'},"fast").css("display","none");
			  showbtn.stop(true, true).delay(0).animate({ width:+(settings.close_btn_width)+'px'},"fast").css("display","block");
			  content.css({"margin-left":0,"width":$(window).width()});	
			  page_list.css({"margin-left":0,"width":$(".h_products_list").width()});		
			});
			//显示点击事件
			showbtn.bind("click",function(){
			$(this).animate({width: '0px',border:'1px solid #ddd'},"fast").css('display','none');				
			leftmenu.stop(true, true).delay(0).animate({ width:+(settings.menu)+'px'},"fast").css("display","block");
			content.css({"margin-left":settings.menu,"width":$(window).width()-(settings.menu)});
		    page_list.css({"width":$(".h_products_list").width()-(settings.menu)-1,"position":"relative","float":"left"}); 
			content.removeClass("full_screen");					
			});	
			 //判断
		     if(settings.header===0){
				$(headerheight).find('.header').remove();
				leftmenu.prepend('<div class="system_logo"><img src="'+(settings.logo_img)+'"></div></div>');
			    leftmenu.prepend('<div class="user_operating"><a class="btn_dropout" href="javascript:void(0)" id="Exit_system"><i class="fa fa-user-times"></i>退出系统</a><a href="#" class="btn_usernfo"><i class="fa fa-user"></i>个人信息</a></div>');
			 }
		
	    //获得选项卡栏目         
            hoverbtn.hover(function(){
			$(this).addClass("hover");	
		     },function(){
			$(this).removeClass("hover");  
		     }); 
		    Sellerberleft.hover( function(){		
			$(this).addClass("display_btn");
			$(this).find(".close_btn span").css("display","block");		

			},function(){

				$(this).removeClass("display_btn");
				$(this).find(".close_btn span").css("display","none");
				});
		$('#js-tabNav-next').click(function(){
			num==oUl.find('li').length-1?num=oUl.find('li').length-1:num++;
			toNavPos();
		});
		$('#js-tabNav-prev').click(function(){
			num==0?num=0:num--;
			toNavPos();
		});
		 var fileItem = frame.find('.nav_link');
		 var fileData = data.files;//获取数据 
		 var treeView=frame.find('#menu_list');//获取执行的对象 	
		function toNavPos(){
			oUl.stop().animate({'left':-num*100},100);
			}	
			/*换肤*/
		        var li=colorbtn.find('a');
				li.on('click',function(){
					var v = $(this).attr("data-val");
					colorbtn.find('a').removeClass("selected");
				   $(this).addClass("selected");				
		          $.cookie("MYCssSkin",v,{path:'/',expires:10}); 
				  $("#skin").attr("href","skin/"+v+"/skin.css");				  
					});
					var cookie_skin=$.cookie("MyCssSkin");
				  if(cookie_skin){switchskin(cookie_skin)};
					
				   headerheight.find('.administrator').on('click',function(){					   
				   if($(this).hasClass("open")){
						$(this).removeClass("open");
						$("body").removeClass("big-page");
						$(this).find('i.glyph-icon').attr("class","glyph-icon fa fa-caret-down");
					}else{
						$(this).addClass("open");
						$(this).find('i.glyph-icon').attr("class","glyph-icon fa  fa-caret-up");
						$("body").addClass("big-page");			
					}
			    });				   
		 
				   /*获取顶部选项卡总长度*/
			  function tabNavallwidth(){
				  var topWindow=$(window.parent.document);
				  var taballwidth=0,
					  $tabNav = topWindow.find(".breadcrumb"),
					  $tabNavWp = topWindow.find(".breadcrumbs"),
					  $tabNavitem = topWindow.find(".breadcrumb li"),
					  $tabNavmore =$(".Hui-tabNav-more");
				  if(!$tabNav[0]){return}
				  $tabNavitem.each(function(index, element){
					  taballwidth+=Number(parseFloat($(this).width()+60));
				  });
				  $tabNav.width(taballwidth+25);
				  var w = $tabNavWp.width();
				  if(taballwidth+25>w){
					  $tabNavmore.show();
				  }
				  else{
					  $tabNavmore.hide();
					  $tabNav.css({left:0});
				  }
			  }
		 //获取数据id数量合计
		 function hasChilds(data,id){
	      return getChildById(data,id).length !== 0;
            }
		//获取数据pid 值
		function getChildById(arr,pid){
			var newArr = [];
			for( var i = 0; i < arr.length; i++ ){
				if( arr[i].pid == pid ){
					newArr.push(arr[i]);
				}
			}
			return newArr;
		  }
		 treeView.html = treeHtml(fileData, 0);
		 var munlist=treeView.html;
		 var template=munlist;
		//获取信息
		   function methods(){
			var column= frame.find('#column_list').append(template); 
			$.fold(".list_content .nav-list dt.nav_link",".list_content .nav-list dd","fast",1,"click"); 
			return column;
		   }
				
		methods();
							/*选项卡导航*/	
			 $(document).on('click',columnlist,function(){	
				    $(this).on('click','.submenu li a',function(){
				if($(this).attr('name')){
				  var bStop=false;
				  var bStopIndex=0;
				  var _href=$(this).attr('name');
				  var _titleName=$(this).text();
				  var topWindow=$(window.parent.document);
				  var show_navLi=topWindow.find("#min_title_list li,#dropdown_menu li");
				  show_navLi.each(function() {
					  if($(this).find('span').attr("data-href")===_href){
						  bStop=true;
						  bStopIndex=show_navLi.index($(this));
						  return false;
					  }
				  });
				  if(!bStop){  
					  creatIframe(_href,_titleName);
					  min_titleList();
				  }
				  else{
					  show_navLi.removeClass("active").eq(bStopIndex).addClass("active");
					  var iframe_box=topWindow.find("#iframe_box");
					  iframe_box.find(".show_iframe").hide().eq(bStopIndex).show().find("iframe").attr({"src":_href,"data-href":_href});
				  }
			  }
			});
		  });
			 $(columnlist).find('.submenu li.home').on('click',function(){
	         $(columnlist).find('.submenu li.home').removeClass('active');
	             $(this).addClass('active');
			  });
				//设置动态获取栏目
		  function treeHtml(fileData, fileId) {
			 var _html =[];
			 _html+='<dl class="nav nav-list" id="menu_list">';
			 function radelist(fileData, fileId){ 
			       _html+='<dd class="submenu"><ul>'; 
				      var children = getChildById(fileData, fileId);
					  children.forEach(function(item,index){
					  _html+='<li class="home">'+
				      '<a href="javascript:void(0)" name="'+item.url+'" title="'+item.title+'" class="iframeurl">'+
					  '<i class="fa fa-angle-double-right"></i>'+item.title+'</a>'+
				      '</li>';  
					  });
				 _html+='</ul></dd>';
				  }
			  //二级栏目
			     var children = getChildById(fileData, fileId);
			     children.forEach(function(item,index){
				_html+='<dt class="nav_link" data-file-id="'+item.id+'">'+
					'<a href="javascript:void(0)" class="dropdown-toggle title_nav">'+
					'<i class="fa '+item.icon+'"></i><span class="menu-text">'+item.title+' </span><b class="arrow fa fa-angle-down"></b>'+
					'</a>'+
					'</dt>';
                   ''+radelist(fileData, item.id);+'';   //获取二级栏目
			    });
			  _html+='</dl>';
			  return _html;
	    }	
		  	function min_titleList(){
		var topWindow=$(window.parent.document);
		var show_nav=topWindow.find("#min_title_list,#dropdown_menu");
		var aLi=show_nav.find("li");
	     };
		  function creatIframe(href,titleName){
			  var topWindow=$(window.parent.document);
			  var show_nav=topWindow.find('#min_title_list');
			  var id_name=$(".show_iframe").each(function(i){$(this).attr('id',"Sort_link_"+i);$(this).addClass("selected")});
			  show_nav.find('li').removeClass("active");
			  var iframe_box=topWindow.find('#iframe_box');
			  show_nav.append('<li class="active name"><span data-href="'+href+'">'+titleName+'</span><em class="close_icon"></em></li>');
			  tabNavallwidth();
			  var iframeBox=iframe_box.find('.show_iframe');
			  iframeBox.hide().addClass("selected");
			  iframe_box.append('<div class="show_iframe" date-id="'+id_name+'"><div class="loading"></div><iframe class="simei_iframe" frameborder="0" src='+href+' data-href='+href +'></iframe></div>');
			  var showBox=iframe_box.find('.show_iframe:visible');
			  showBox.find('iframe').attr("src",href).load(function(){
				  showBox.find('.loading').hide();
			  });
		  }
		  var num=0;
		  var oUl=$("#min_title_list");
		  var hide_nav=menunav;
		  $(document).on("click","#min_title_list li",function(){
			  var bStopIndex=$(this).index();
			  var iframe_box=$("#iframe_box");
			  $("#min_title_list li").removeClass("active").eq(bStopIndex).addClass("active");
			  iframe_box.find(".show_iframe").hide().removeClass("selected").eq(bStopIndex).show().addClass("selected");
		  });
		  $(document).on("click","#min_title_list li em.close_icon",function(){
			  var aCloseIndex=$(this).parents("li").index();
			  $(this).parent().remove();
			  $('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();	
			  num==0?num=0:num--;
			  tabNavallwidth();
		  });
		   $(document).on("click","#dropdown_menu .tabCloseCurrent", function () {       		
			 var aCloseIndex=$("#breadcrumbs .breadcrumb>li.active").index();//获取当前栏目为第几个
			 $("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li.active').remove();//关闭当前栏目
			 $("#iframe_box").find('.show_iframe').eq(aCloseIndex).remove();//关闭当前页iframe
			 $("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').siblings("li:last").addClass("active");  //删除当前栏目并赋值给最后一个样式class
			 $("#iframe_box").find('.show_iframe').css("display","block");				 
			  num==0?num=0:num--;
			  tabNavallwidth();										  	   
          });
		  //关闭打开的栏目以外的栏目
		  $(document).on("click","#dropdown_menu .tabCloseOther", function () {
		   var aCloseIndex=$("#breadcrumbs .breadcrumb>li.active").index();//获取当前栏目为第几个   
		   var iframeindex=$("#breadcrumbs .breadcrumb>li").length;
			  $("#breadcrumbs").find(' .breadcrumb_style .breadcrumb>li').not(".active,.home").remove();//关闭打开栏目以外的栏目（除首页）	  
			  $("#iframe_box").find('.show_iframe').not(".selected,.index_home").remove();  			  
		    num==0?num=0:num--;
	        tabNavallwidth();	
		  });
		  //除首页以外全部关闭
		     $(document).on("click","#dropdown_menu .tabCloseAll", function () {  
			  var $tabCloseAll=$("#breadcrumbs .breadcrumb li");
			  if($tabCloseAll.not(".name").length){	
			   $($tabCloseAll).not(".home").remove();//关闭除首页以外的全部栏目			
			   $("#iframe_box").find('.show_iframe').not("#Sort_link_0").remove();//关闭除首页以外的全部栏目	
			   $("#breadcrumbs").find('.breadcrumb_style .breadcrumb>li').addClass("active") ; 
			   $("#iframe_box").find('.show_iframe').css("display","block");			 
				num==0?num=0:num--;
			    tabNavallwidth();	
			 }   													  	   
          });
		  $(document).on("dblclick","#min_title_list li",function(){
			  var aCloseIndex=$(this).index();
			  var iframe_box=$("#iframe_box");
			  if(aCloseIndex>0){
				  $(this).remove();
				  $('#iframe_box').find('.show_iframe').eq(aCloseIndex).remove();	
				  num==0?num=0:num--;
				  $("#min_title_list li").removeClass("active").eq(aCloseIndex-1).addClass("active");
				  iframe_box.find(".show_iframe").hide().eq(aCloseIndex-1).show();
				  tabNavallwidth();
			  }else{
				  return false;
			  }
		  });
		  tabNavallwidth();
		});
		
     };
})(jQuery);

