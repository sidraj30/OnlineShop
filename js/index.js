$(document).ready(function(){
    		$('#category-button').click(function() {
      			$('.category-list').toggle("slide");
    		});

    		$('.category-type').click(function() {
    			if ($(this).hasClass('selected')) {
    				$('.category-list').toggle("slide");
    			}
    			else{
    				$('.category-type').each(function(){
    					$(this).removeClass('selected');
    				});
    				$(this).addClass('selected');
    				$('.category-list').toggle("slide");
    				$('#catNo').text($(this).text());
    			}
    			
    		});
			var lastScrollTop = 0;
			$(window).scroll(function(event){
				var st = $(this).scrollTop();
				if (st > lastScrollTop){
					$('#category-button').hide(500);
					$('.category-list').hide();
				} 
				else {
					$('#category-button').show(500);
				}
				lastScrollTop = st;
			});

		});