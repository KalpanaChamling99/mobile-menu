+(function(){
    
        function dropDownMenu(){
            
            this.selector = 'ul.menu li';
            this.windowWidth = null;
    
            this.init = function(){
                this.windowWidth = $(window).width();
                this.addClass();
                this.calcWidth();
            };
    
            this.addClass = function(){
                $(this.selector+":has(ul)").addClass("has-sub");
            };
    
            this.calcWidth = function(){
                var counter = 1;
                var totalOffset = null;
                var self = this;
                
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
        $(window).resize(function(){
            obj.init();
        });
    
    })();