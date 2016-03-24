(function() {                              
  var $imgs = $('.gal img');           
  var $search = $('.filter');       
  var cache = [];                          

  $imgs.each(function() {                 
    cache.push({                          
      element: this,                      
      text: this.alt.trim().toLowerCase(),
    });
  });

  function filter() {                     
    var query = this.value.trim().toLowerCase();    
    cache.forEach(function(img) {         
      var index = 0;                      

      if (query) {                         
        index = img.text.indexOf(query);  
        $(img.element).fadeOut(100);
      }
     
      if(index === -1){
         $(img.element).css("display","none");
     
      }else{
        $(img.element).css("display","''").fadeIn(500);
           

      }

    
    });
  

  }

  if ('oninput' in $search[0]) {          
    $search.on('input', filter);            
  } else {                              
    $search.on('keyup', filter);          
     }    

   

}());


