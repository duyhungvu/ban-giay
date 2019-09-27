$('.open-menu-icon').on('click',function(){
    $('.main-nav-outer').addClass('open-menu');
});
$('.close-menu-icon').click(function(){
    $('.main-nav-outer').removeaddClass('open-menu');
});