// event klik link
$('.page-scroll').on('click', function(e){

    // ambil isi hrefnya
    var isihref = $(this).attr('href');
    // ambil elemen yg ditunjuk
    var elementujuan = $(isihref);

   // scroll pindah
   $('html,body').animate({
       scrollTop: elementujuan.offset().top - 50
   }, 1250, 'easeInOutExpo');

   e.preventDefault();
    
});

// Efek Paralax di Jumbotron

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    // Jumbotron Paralax

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+ wScroll/4 +'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+ wScroll/2 +'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
    });


    // Portfolio Landing Page
    if (wScroll > $('.portfolio').offset().top - 450){
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function() {
                $('.portfolio .thumbnail').eq(i).addClass('keliatan');
            }, 200 * (i+1));
        });
        
    }


});