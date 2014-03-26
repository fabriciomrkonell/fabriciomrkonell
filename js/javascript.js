$(function(){
  $(".contato-icon").hover(function(event){
    var atual = $(this).attr("data-status");
      if(atual == 1){
        $("#label-contato").html("Follow me on Twitter!");
        return true;
      }else if(atual ==2){
        $("#label-contato").html("Add me on Linkedin!");
        return false;
      }else{
        $("#label-contato").html("Follow me on GitHub!");
        event.preventDefault();
      }
    }, function(){
        $("#label-contato").html("")
    })
})
