// wayponts js

$(function () {

    //sidebar
    $('.feat-btn').click(function () {
        $('sidebar_menu ul .feat-show').toggleClass("show");
        $('sidebar_menu ul .first').toggleClass("rotate");
      });
      $('.serv-btn').click(function () {
        $('sidebar_menu ul .serv-show').toggleClass("show1");
        $('sidebar_menu ul .second').toggleClass("rotate");
      });
      $('sidebar_menu ul li').click(function () {
        $(this).addClass("active").siblings().removeClass("active");
      });

 //     
  
    $('.countup').counterUp({
        time: 5000
    });

});
