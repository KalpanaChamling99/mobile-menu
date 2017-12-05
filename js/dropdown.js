+(function(){
    
        function dropDownMenu(){
            
            this.selector = 'ul.menu li';

            this.init = function(){
                this.addClass();
                this.listingMenu();
            };
    
            this.addClass = function(){
                $(this.selector+":has(ul)").addClass("has-sub");
            };
    
            this.listingMenu = function(){
               
                
                $(this.selector+'.has-sub').click( function(e){
                    e.stopPropagation();
                  
                    $('>ul', this).slideToggle();
                    $(' > a', this).toggleClass('up');
                    $(this).siblings().find('ul').slideUp();  
                    $(this).siblings().find('a').removeClass();
            
                });

               
            };
        };
    
        var obj = new dropDownMenu();
        $(window).load(function(){
            obj.init();
        });
        
    
    })();