$(document).ready(function(){
                $('.arrow').click(function(){

                $('header .navbar-toggle , header .navbar-brand , .filter').css({
                    'display':'block'
                });

                $('header .hide-part').css({
                    'display':'none',
                })

                $(this).css({
                    'display':'none',
                })

                $('.icon').show();

                $('header .collapse.in ').css({
                    'margin-top': '10px'
                })
                    $('.hidden-part').css({
                    'display':'none'
                })
            })

            $('.filter').click(function(){
                $('.hidden-part').css({
                    'display':'inline'
                })

                $(this).css({
                    'display':'none'
                })

                $('header .navbar-toggle , header .navbar-brand').css({
                    'display':'none'
                })

                $('header .arrow').css({
                    'display':'block'
                })

                $('header .collapse.in ').css({
                    'margin-top': '70px'
                })
            })

        })
	 				//button/
	 
		$(document).ready(function(){
			$('.navbar-header button').click(function(){
				$('.icon').toggleClass('active')
			});

            new WOW({ mobile: false }).init();
		})
