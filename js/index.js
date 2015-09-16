$(function(){
	
	$('.tables .first_td').click(function(){
		var index = $(this).parent().parent().parent().parent().index();
		$('.first_td').removeClass('td_active');
		var dispy = $('.tabs2').eq(index).css('display');
		if(dispy=='none'){
			$('.tabs2').eq(index).show();
			
		}else{
			$('.tabs2').eq(index).hide();
		}
	})
	$('.success').click(function(){
		$('.success_list').toggle();
	})
	$('.success_list li').click(function(){
		var index = $(this).index();
		var text1 = $('.success').html($(this).text()+'<span class="sanjiao inline_block bz_25"></span>');
		$('.success_list').toggle();
	})
	
	
	//  index双色球
		var x = 33;	//红上限
		var y = 1;  //蓝红下限
		var z = 16; //蓝上限
		
		var len = $('.Double_Ball_main li').length;
		$('.nots').click(function(){
			for(var i=0;i<len-1;i++){
				var rand = parseInt(Math.random() * 32);
				$('.Double_Ball_main li').eq(i).text(rand);
			}
		})
		
	
	//  banner	
	$('#slideBox').swipeSlide({
        continuousScroll:true,
        speed : 5000,
        transitionType : 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
        callback : function(i){
            $('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
        }
    });
    //  end Banner
    
    //  sports
    var len = $('.sports_tabs2').length;
    var num = 0;
    $('.prev').tap(function(){
    	 tabL();
    })
    
    $('.next').tap(function(){
    	 tabR();
    })
    
    $('.sports_tab2').swipeLeft(function(){
    	tabL();
    })
    
    $('.sports_tab2').swipeRight(function(){
    	tabR();
    })
    function tabS(){
    	$('.sports_tabs2').eq(num).show().siblings('.sports_tabs2').hide();
    	$('.liss li').eq(num).addClass('liss_active').siblings().removeClass('liss_active');
    }
    function tabL(){
    	num++;
    	if(num>len-1){num=0;}
 		tabS();
    }
    function tabR(){
    	num++;
    	if(num>len-1){num=0;}
    	tabS();
    }
    //  end sports

	//  filtrate
	$('.Radio1 ul li').click(function(){
		var index2 = $(this).index();
		$('.Radio1 ul li').eq(index2).addClass('Radio_active').siblings().removeClass('Radio_active')
	})
	
	$('.Radio2 ul li').click(function(){
		var index3 = $(this).index();
		$('.Radio2 ul li').eq(index3).addClass('Radio_active').siblings().removeClass('Radio_active')
	})
	
	$('.CheckBox ul li').click(function(){
		var yes2 = $(this).attr('class');
		var index4 = $(this).index();
		if(yes2=='Radio_active'){
			$('.CheckBox ul li').eq(index4).removeClass('Radio_active');
		}else{
			$('.CheckBox ul li').eq(index4).addClass('Radio_active');
		}
	})
	//  end filtrate
	
	//  全选  反选
	$('.quan1').click(function(){
		$('.CheckBox ul li').addClass('Radio_active');
	})
	
	$('.fan').click(function(){
		$('.CheckBox ul li').each(function(i){
			var clas3 = $(this).attr('class')
			if(clas3=='Radio_active'){
				$('.CheckBox ul li').eq(i).removeClass('Radio_active');
			}else{
				$('.CheckBox ul li').eq(i).addClass('Radio_active');
			}
		})
	})
	// end  全选反选 
	
})

