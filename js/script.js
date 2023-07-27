
$(function () {

    //ページ内スクロール
    var navHeight = $(".gnav").outerHeight();

    $('a[href^="#"]').on("click", function () {
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? "html" : href);
        var position = target.offset().top - navHeight;
        $("html, body").animate({ scrollTop: position, }, 300, "swing");
        return false;
    });


    //アニメーションをつけるときはclassにfadeと動きを指示するクラスを付与する
    $(window).on('load scroll', function () {
        $('.fade').each(function () {
            var target = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var height = $(window).height();
            if (scroll > target - height) {
                $(this).addClass('active');
            }
        });
    });

});


/* ハンバーガーメニュー */
const hambtn = document.getElementById("hamBtn");

//クリックすると、ハンバーガーメニューが表示
hambtn.addEventListener('click', () => {
    document.querySelector('html').classList.toggle('open');
});

//アンカーメニュークリック後、ハンバーガメニュー非表示
$('#js_hamburger a[href]').on('click', function (event) {
    $('#hamBtn').trigger('click');
});
