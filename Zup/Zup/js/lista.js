jQuery(document).ready(function() {
    
    jQuery("#txtBusca").keyup(function(){
        
        var nomeFiltro = $(this).val().toLowerCase();

       jQuery('table tbody').find('tr').each(function() {
            var conteudoCelula = $(this).find('td:nth-child(2)').text();
            var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >= 0;
            jQuery(this).css('display', corresponde ? '' : 'none');
        });
    });
    
    jQuery('.buscar').click(function() {
       
        debugger;
        var x = jQuery('#X').val();
        var y = jQuery("#Y").val();
        
        if (x != "" && y != "") {
            
            var dMax = x - y;
            jQuery('table tbody').find('tr').hide();
            jQuery('table tbody').find('tr').each(function() {
                
                var conteudoCelula = jQuery(this).text();
                var conteudoCelulaId = jQuery(this);
                var array = conteudoCelula.split(/\s+/);
                
                var coordX = array[3];
                var coordY = array[5];
                 
                var strX = coordX - x;
                var stry = coordY - y;
                
                if (dMax <= "0") {
                    
                    return false;
                
                } else {
                    
                    if (strX <= dMax && stry <= dMax) { 
                   
                        var contains = jQuery(conteudoCelulaId).is(':visible');
             
                         if (contains == false) {

                             jQuery(this).show();
                         }
                   
                    } if (strX > dMax || stry > dMax) {
                    
                        jQuery(conteudoCelulaId).hide();
                    } 
                    
                }
                
            });
        }
        
        return false;
    });
    
    jQuery('.buscarTudo').click(function() {
        
       
         jQuery('table tbody').find('tr').each(function() {
             
             var style = jQuery(this).is(':visible');
             
             if (style == false) {
                 
                 jQuery(this).css('display', 'block');
             }
             
         });
        
    });
    
});