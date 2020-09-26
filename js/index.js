$(document).ready(function(){
    $('#category-button').click(function() {
        $('.category-list').toggle("slide");
        $('.cart-products').hide(500);
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
    $('.increase').click(function(){
        var quantity = $(this).parent().find('input');
        quantity.val(parseInt(quantity.val()) + 1);
    })
    $('.decrease').click(function(){
        var quantity = $(this).parent().find('input');
        if(parseInt(quantity.val()) - 1 >= 0){
            quantity.val(parseInt(quantity.val()) - 1);
        }
        if(parseInt(quantity.val()) == 0 && $(this).parent().hasClass('modify')){
            $(this).parent().replaceWith($('.addcart:first').clone(true,true));
        }
    });
    $('#cart').click(function() {
        $('.cart-products').toggle("slide");
    });
    $('.close').click(function() {
        $('.cart-products').toggle("slide");
    });
    $('.addcart').click(function(){
        var modifier = $('#modifier').clone(true,true).removeAttr('id').removeClass('hidden');
        $(this).replaceWith(modifier);  
    });

});