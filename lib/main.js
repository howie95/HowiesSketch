
//导航栏切换&小图标显示
var navbar = $(".header-content");
var headhold = $(".header-holder");
var maintop = $("main").offset().top;
var btsbar = $(".foot-bts");
function navScorll(){
    if($(document).scrollTop()>maintop){
        headhold.show();
        navbar.addClass("downpage");
        btsbar.css("opacity","1");
    }else{
        headhold.hide();
        navbar.removeClass("downpage");
        btsbar.css("opacity","0");
    }
}

//Title页面显示
function noScript(){
    $("#titlepage").show();
    $("header").hide();
    $("main").hide();
    $("footer").hide();
}
$("#titlespan").click(function(){
    $("#titlepage").hide();
    $("header").show();
    $("main").show();
    $("footer").show();
});

window.onload=function(){

}
$(window).scroll(function(){
    navScorll();
});