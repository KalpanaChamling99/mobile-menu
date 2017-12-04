
function ui(){

    this.init = function(){
        this.menuToggler(); 
    };
    
    //-----------menu----------------//
   
    this.menuToggler = function(){
        var $bar = $('.bars');
        if( $bar.length > 0 ){
            $bar.on('click',function(){
                $('.right-menu').slideToggle();
               $(this).toggleClass('fa-bars');
               $(this).toggleClass('fa-close');
            });
        }
    };
  //-----------/menu----------------//

   

};

var uiInstance = new ui();

$(document).ready(function(e){
    uiInstance.init();
});
