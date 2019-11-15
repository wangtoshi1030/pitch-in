

console.log(1234);


$(function(){
    $(".btn").on("click",function(){
        console.log("クリックした");
        $(".btn")
        .siblings("ol")
        .slideToggle(aaa);
    });
})



// $(function(){
//     $(".btn").hover(function(){
//         $("ol")
//     })
// })