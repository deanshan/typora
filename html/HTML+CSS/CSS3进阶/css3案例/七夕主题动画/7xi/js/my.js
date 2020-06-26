$(function(){

	function sunShine(){
		TweenMax.to($(".sun"),30,{"left":"-2000px","top":"400px"});
	}
	function cloundMove(){
		new TimelineMax({repeat:-1, repeatDelay:0,yoyo:true}).add(TweenMax.to($(".clound1"),30,{"left":"95%","delay":0}));		
		new TimelineMax({repeat:-1, repeatDelay:0,yoyo:true}).add(TweenMax.to($(".clound2"),60,{"right":"95%"}));
	}	
	//sunShine();
	//cloundMove();	
	var boyWalk =function(){
		var t1= new TimelineMax({repeat:-1, repeatDelay:0,yoyo:true,useFrames :false});
		t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"0 -291px","delay":0}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-602px 0","delay":0.2}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-302px -291px","delay":0.2}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-151px -291px","delay":0.2}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-0px -291px","delay":0.2}));
		this.pause=function(){t1.pause();}
		this.resume=function(){t1.resume();}
			//t1.resume();
		return this;
	}


	var boyWalk2 =function(){
		var t1= new TimelineMax({repeat:-1, repeatDelay:0,yoyo:true,useFrames :false});
		t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-904px -0px","delay":0}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-453px 0","delay":0.2}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-904px -0px","delay":0.2}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-753x 0px","delay":0.2}));
			t1.add(TweenMax.to($("#boy"),0,{"backgroundPosition":"-302px 0px","delay":0.2}));
			

		this.pause=function(){t1.pause();}
		this.resume=function(){t1.resume();}
			//t1.resume();
		return this;
	}

	//(new boyWalk()).pause().walk();
	/*var boy =boyWalk();
	boy.pause();
	boy.resume();*/


	function boyMove(left){
		TweenMax.to($("#boy"),10,{"left":left});
	}
	//boyMove();
	//boyMove("200%");

	function boySetpotion(){
		var h =$(document).height();
		pr = h/901;
		var t_pr =(645+118/2 - 291) *pr - (291 - pr *291)/2 ;
		//alert(h);
		//alert(t_pr);
		
		TweenMax.to($("#boy"),0,{scaleX:pr, scaleY:pr});
		TweenMax.to($("#boy"),0,{top:t_pr});

	}
	
	sunShine();
	cloundMove();
	boySetpotion();
	var boy =boyWalk();
	//boyMove("100%");

	var t2 =new TimelineMax();
	var width = $(".container").width();
	var pwidth =$(".page").width();
	//boyWalk2
	t2.add(
		TweenMax.to($("#boy"),5,{"x":width*0.2,ease:Linear.easeNone})
		);
	
	t2.add(
		TweenMax.to($(".container"),5,{"x":-pwidth,"delay":"0",ease:Linear.easeNone})
	);
	t2.add(
		TweenMax.to($("#boy"),5,{"x":pwidth*0.465,"delay":"-5",ease:Linear.easeNone})
		);

	t2.add(
		TweenMax.to($(".door-left"),2,{"x":"-100%",delay:0})
		
		).add(
		TweenMax.to($(".door-right"),2,{"x":"100%",delay:-2})
		).add(
		TweenMax.to($(".page2"),1,{"backgroundImage":"url(images/QixiB-bright.png)","delay":-1})
		)		
		;
	t2.add(
		TweenMax.to($("#boy"),3,{"scaleX":0.1,"scaleY":0.1,"alpha":0,"delay":"0",ease:Linear.easeNone,onComplete:function(){
			boy.pause();
			boy =boyWalk2();
		}
		})
		);
	t2.add(
		TweenMax.to($("#boy"),3,{"scaleX":pr,"scaleY":pr,"alpha":1,"delay":"0",ease:Linear.easeNone})
		);
	t2.add(
		TweenMax.to($(".door-left"),2,{"x":"0",delay:0})
		
		).add(
		TweenMax.to($(".door-right"),2,{"x":"0",delay:-2})
		).add(
		TweenMax.to($(".page2"),1,{"backgroundImage":"url(images/QixiB-dark.png)","delay":-1})
		)		;
	t2.add(
		TweenMax.to($(".container"),5,{"x":-2*pwidth,"delay":"0",ease:Linear.easeNone})
		)
		.add(
TweenMax.to($("#boy"),5,{"x":pwidth*0.165,"delay":"-5",ease:Linear.easeNone})
			);		

/*
	t2.add(
		TweenMax.to($("#boy"),5,{"left":"20%","delay":"-2",ease:Linear.easeNone})
		);

	t2.add(
		TweenMax.to($(".container"),5,{"left":"-200%","delay":"-=20",ease:Linear.easeNone})
		);*/
})