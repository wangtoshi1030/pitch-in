$(function(){
    $(".ii").on("click",function(){
        console.log("you touched");
        let up =$(".col-12").offset().top;
        $("html,body").animate({scrollTop:up},1000)
    });

    $(".dad").on("click",function(){
        $(this)
        .siblings(".yes")
        .slideToggle();
    })
})