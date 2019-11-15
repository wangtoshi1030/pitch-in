$(function() {
    $('.schroll').on('click', function() {
        console.log(123);
        // 画面の先頭に戻る
        // animate({実行すること}, 何秒使うか)
        $('html, body').animate({ scrollTop: 0 }, 500);
    })
});
