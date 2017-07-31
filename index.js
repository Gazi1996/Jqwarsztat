"use strict";

$(function()
{
    $("#button").click(function()
    {
        var sq = $("#square");
        var h2 = $("#nagl");
        
        sq.animate({ right: "100px",height:"100px", width:"100px"},3000);
        sq.animate({backgroundColor: "rgb(25, 121, 217)"}, 5000);
        h2.css("display", "block");     
    });
    
});