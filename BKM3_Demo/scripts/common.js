$(function(){
    
    $(".selectable *").click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });
    //panel + X
    $(".floatpanel").each(function(){
        $(this).append('<a class="close" onclick="hidePanel();"><span class="glyphicon glyphicon-remove"></span></a>');
    });

    $('.btn-group').on('click', function () {
      if ($(this).hasClass('open')) {
        $(this).removeClass('open')
      } else {
        $(this).addClass('open')
      }
    })

  $('.top-window').on('click', function () {
    if (document.body.scrollTop) {
      document.body.scrollTop = 0
    }
    if (document.documentElement.scrollTop) {
      document.documentElement.scrollTop = 0
    }
    if (window.pageYOffset) {
      window.pageYOffset = 0
    }
  })

  $('.modal-mouseleave').on('mouseleave', function () {
    $(this).parent().modal('hide')
  })
    
});


function showPanel(id){
    $(".floatpanel").hide();
    $("#"+id).show();
    if($(".mask").length===0){
        $("body").append('<div class="mask">&nbsp;</div>');
        $(".mask").click(function(){
            hidePanel();
        });
    }
}

function hidePanel(){
    $(".floatpanel").hide();
    $(".mask").remove();
}
 function hidden(){
    var tab = document.getElementsByTagName('table')[0];
    tab.caption.onclick = function(){
      var trs = tab.rows;
      for(var i = 0, len = trs.length; i < len; i++){
        var cell = trs[i].cells[1];
        if(cell.style.display == 'none'){
          cell.style.display = '';
        }else{
          cell.style.display = 'none';
        }
      }
    }
  }