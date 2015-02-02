$(function(){
  $(".contato-icon").hover(function(event){
    var atual = $(this).attr("data-status");
      if(atual == 1){
        $("#label-contato").html("Follow me on Twitter!");
      }else if (atual == 2){
        $("#label-contato").html("Follow me on Linkedin!");
      }else {
        $("#label-contato").html("Follow me on GitHub!");
      }
    }, function(){
        $("#label-contato").html("")
    })
})
