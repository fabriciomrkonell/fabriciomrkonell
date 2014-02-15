$(function(){
  $(".contato-icon").hover(function(){
    var atual = $(this).attr("data-status");
      if(atual == 1){
        $("#label-contato").html("Siga-me no Twitter!");
      }else if(atual ==2){
        $("#label-contato").html("Adicione-me no Linkedin!");
      }else{
        $("#label-contato").html("Siga-me no GitHub!");
      }
    }, function(){
        $("#label-contato").html("")
    })
})