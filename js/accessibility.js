  window.addEventListener("load", function(){
       document.querySelectorAll('.leaflet-control-attribution>a')
       .forEach(function (el) {
           el.setAttribute('tabindex','-1');
       });

       document.getElementById("map").setAttribute('tabindex','-1');

       document.querySelectorAll('.leaflet-marker-icon')
           .forEach(function(el){
               el.setAttribute('tabindex','-1');
           });
       document.querySelectorAll('a[href=\'#\']')
           .forEach(function (el){
               el.setAttribute('tabindex','-1');
           }
           );
   });
