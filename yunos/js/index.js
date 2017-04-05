//顶部固定定位
;(function () {
    var $nav = $(".nav");
    $(window).scroll(function () {
        if ($(document).scrollTop() > 80) {
            $nav.addClass('nav-scroll');
        } else {
            $nav.removeClass('nav-scroll')
        }
    });
})();

//右上角导航栏伸缩
;(function(){
        $('.navThree').click(function(){
            $('.navCon ul').slideToggle('navNone');
        });
    $(window).resize(function () {
        if($(document).width() > 500){
            $('.navCon').find('ul').css('display','block');
        }else {
            $('.navCon').find('ul').css('display','none');
        }
    })
})();

//轮播图
(function () {
    var $imgs = $('.slide'),
        $header = $('.header'),
        $lis = $('.focusList').find('li'),
        step = 0,
        timer = window.setInterval(autoMove, 2000);

    function autoMove() {
        if (step == $imgs.length - 1) {
            step = -1;
        }
        step++;
        setBanner();
    }

    function setBanner() {
        $.each($imgs, function (index, item) {
            if (index == step) {
                $(this).css('zIndex', 1).stop().animate({opacity: 1}, 500, function () {
                    $(item).siblings().css('opacity', 0);
                })
            } else {
                $(item).css('zIndex', 0);
            }
        });
        //底下焦点
        $.each($lis, function (index, item) {
            index == step ? $(item).addClass('selected') : $(item).removeClass('selected');
        });
    }
    $header.on('mouseover',function (){
        window.clearInterval(timer);
    }).on('mouseout',function (){
        timer = window.setInterval(autoMove,2000);
    });
//点击焦点
    ;
    (function bindEventForLis() {
        $lis.on('click', function () {
            step = $(this).index();
            setBanner();
        });
    })();
})();


//选项卡
$('.icon a').click(function () {
    $(this).addClass('cur').siblings().removeClass('cur');
    $('.home-content div').eq($(this).index()).animate({opacity:1},500,function () {
        $(this).siblings().removeClass('cur').css('opacity',0);
    })
});
